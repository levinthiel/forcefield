import { createClient } from "@sanity/client";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const legacyContentPath = path.join(__dirname, "legacy-content.json");
const envLocalPath = path.join(rootDir, ".env.local");

function loadEnvFile() {
    if (!fs.existsSync(envLocalPath)) {
        return;
    }

    const contents = fs.readFileSync(envLocalPath, "utf8").replace(/^\uFEFF/, "");

    for (const line of contents.split(/\r?\n/)) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) {
            continue;
        }

        const separatorIndex = trimmed.indexOf("=");
        if (separatorIndex === -1) {
            continue;
        }

        const key = trimmed.slice(0, separatorIndex).trim();
        const value = trimmed.slice(separatorIndex + 1).trim();
        if (!process.env[key]) {
            process.env[key] = value;
        }
    }
}

loadEnvFile();

const LOCALES = ["EN", "DE", "FR"] as const;

type LegacyStory = {
    id: string;
    cluster: string;
    title: string;
    bigcoverpath: string;
    time: string;
    tags: string;
    storyContent: string;
};

type LegacyCluster = {
    id: string;
    order: number;
    status: "available" | "coming_soon";
    coverImage?: string;
};

type LegacyContent = {
    clusters: LegacyCluster[];
    storiesByLocale: Record<(typeof LOCALES)[number], LegacyStory[]>;
};

function requireEnv(name: string) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing environment variable: ${name}`);
    }
    return value;
}

function loadLegacyContent() {
    if (!fs.existsSync(legacyContentPath)) {
        throw new Error(
            `Missing ${legacyContentPath}. Run: npx tsx scripts/export-legacy-content.ts`
        );
    }

    return JSON.parse(fs.readFileSync(legacyContentPath, "utf8")) as LegacyContent;
}

async function uploadImage(
    client: ReturnType<typeof createClient>,
    cache: Map<string, string>,
    publicPath: string
) {
    if (cache.has(publicPath)) {
        return cache.get(publicPath)!;
    }

    const normalizedPath = publicPath.startsWith("/")
        ? publicPath.slice(1)
        : publicPath;
    const filePath = path.join(publicDir, normalizedPath);

    if (!fs.existsSync(filePath)) {
        throw new Error(`Cover image not found: ${filePath}`);
    }

    const asset = await client.assets.upload(
        "image",
        fs.createReadStream(filePath),
        {
            filename: path.basename(filePath),
        }
    );

    cache.set(publicPath, asset._id);
    return asset._id;
}

function imageReference(assetId: string) {
    return {
        _type: "image",
        asset: {
            _type: "reference",
            _ref: assetId,
        },
    };
}

async function migrate() {
    const client = createClient({
        projectId: requireEnv("NEXT_PUBLIC_SANITY_PROJECT_ID"),
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
        apiVersion:
            process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
        token: requireEnv("SANITY_API_WRITE_TOKEN"),
        useCdn: false,
    });

    const { clusters, storiesByLocale } = loadLegacyContent();
    const imageCache = new Map<string, string>();
    const clusterRefs = new Map<string, string>();

    console.log("Creating clusters...");
    for (const cluster of clusters) {
        const docId = `cluster-${cluster.id}`;
        const coverImage = cluster.coverImage
            ? imageReference(
                  await uploadImage(client, imageCache, cluster.coverImage)
              )
            : undefined;

        await client.createOrReplace({
            _id: docId,
            _type: "cluster",
            title:
                cluster.id === "cc1"
                    ? "Chronicles Cluster One"
                    : "Chronicles Cluster Two",
            clusterId: {
                _type: "slug",
                current: cluster.id,
            },
            order: cluster.order,
            status: cluster.status,
            ...(coverImage ? { coverImage } : {}),
        });

        clusterRefs.set(cluster.id, docId);
        console.log(`  ✓ ${cluster.id}`);
    }

    console.log("Creating stories...");
    let storyCount = 0;

    for (const locale of LOCALES) {
        for (const story of storiesByLocale[locale]) {
            const docId = `story-${locale.toLowerCase()}-${story.id}`;
            const clusterRef = clusterRefs.get(story.cluster);

            if (!clusterRef) {
                throw new Error(`Unknown cluster for story ${story.id}`);
            }

            const coverAssetId = await uploadImage(
                client,
                imageCache,
                story.bigcoverpath
            );

            await client.createOrReplace({
                _id: docId,
                _type: "story",
                storyId: {
                    _type: "slug",
                    current: story.id,
                },
                locale,
                cluster: {
                    _type: "reference",
                    _ref: clusterRef,
                },
                title: story.title,
                readingTime: story.time,
                tags: story.tags,
                coverImage: imageReference(coverAssetId),
                storyContent: story.storyContent.trim(),
            });

            storyCount += 1;
            console.log(`  ✓ [${locale}] ${story.id}`);
        }
    }

    console.log(
        `\nMigration complete: ${clusters.length} clusters, ${storyCount} stories.`
    );
}

migrate().catch((error) => {
    console.error("Migration failed:", error);
    process.exit(1);
});
