import { createClient } from "@sanity/client";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const envLocalPath = path.join(rootDir, ".env.local");

// Newest first: Renata -> ... -> Sagasu (oldest)
const STORY_PUBLISHED_DATES: Record<string, string> = {
    renata: "2026-08-30T12:00:00.000Z",
    criticalmass: "2026-08-20T12:00:00.000Z",
    survivor3: "2026-08-10T12:00:00.000Z",
    survivor2: "2026-07-25T12:00:00.000Z",
    survivor1: "2026-07-10T12:00:00.000Z",
    tunnels: "2026-06-20T12:00:00.000Z",
    "tunnels-en": "2026-06-20T12:00:00.000Z",
    industrial: "2026-06-01T12:00:00.000Z",
    passengers: "2026-05-01T12:00:00.000Z",
    priestess: "2026-04-01T12:00:00.000Z",
    sagasu: "2026-03-01T12:00:00.000Z",
};

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

function requireEnv(name: string) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing environment variable: ${name}`);
    }
    return value;
}

loadEnvFile();

async function patchStoryMetadata() {
    const client = createClient({
        projectId: requireEnv("NEXT_PUBLIC_SANITY_PROJECT_ID"),
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
        apiVersion:
            process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
        token: requireEnv("SANITY_API_WRITE_TOKEN"),
        useCdn: false,
    });

    const stories = await client.fetch<
        Array<{ _id: string; storyId: string; locale: string }>
    >(`*[_type == "story"]{
        _id,
        "storyId": storyId.current,
        locale
    }`);

    console.log(`Patching ${stories.length} stories...`);

    for (const story of stories) {
        const publishedAt = STORY_PUBLISHED_DATES[story.storyId];

        if (!publishedAt) {
            console.warn(`  ! Skipping unknown storyId: ${story.storyId}`);
            continue;
        }

        await client
            .patch(story._id)
            .set({
                publishedAt,
                version: "1.0.0",
                author: "Skltrn",
                ...(story.storyId === "tunnels-en"
                    ? {
                          storyId: {
                              _type: "slug",
                              current: "tunnels",
                          },
                      }
                    : {}),
            })
            .commit();

        console.log(`  ✓ [${story.locale}] ${story.storyId}`);
    }

    console.log("\nStory metadata patch complete.");
}

patchStoryMetadata().catch((error) => {
    console.error("Patch failed:", error);
    process.exit(1);
});
