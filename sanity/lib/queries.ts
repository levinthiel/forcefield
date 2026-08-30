import { getSanityClient } from "./client";
import { urlFor } from "./image";

function formatPublishedDate(isoDate: string) {
    if (!isoDate) {
        return "";
    }

    if (/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) {
        const [year, month, day] = isoDate.split("-");
        return `${day}${month}${year}`;
    }

    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) {
        return "";
    }

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();

    return `${day}${month}${year}`;
}

export const REVALIDATE_SECONDS = 3600;

export type StoryRecord = {
    id: string;
    cluster: string;
    title: string;
    time: string;
    tags: string;
    bigcoverpath: string;
    storyContent: string;
    publishedAt: string;
    publishedDateDisplay: string;
    version: string;
    author: string;
};

export type ClusterRecord = {
    id: string;
    order: number;
    status: "available" | "coming_soon";
    coverImage?: string;
};

type SanityStory = {
    storyId: string;
    locale: "EN" | "DE" | "FR";
    title: string;
    readingTime: string;
    tags: string;
    storyContent: string;
    publishedAt: string;
    version?: string;
    author?: string;
    coverImage: Parameters<typeof urlFor>[0];
    cluster: {
        clusterId: string;
    } | null;
};

type SanityCluster = {
    clusterId: string;
    order: number;
    status: "available" | "coming_soon";
    coverImage?: Parameters<typeof urlFor>[0];
};

const storiesQuery = `*[_type == "story"] | order(publishedAt desc) {
  "storyId": storyId.current,
  locale,
  title,
  "readingTime": readingTime,
  tags,
  storyContent,
  publishedAt,
  version,
  author,
  coverImage,
  "cluster": cluster->{
    "clusterId": clusterId.current
  }
}`;

const clustersQuery = `*[_type == "cluster"] | order(order asc) {
  "clusterId": clusterId.current,
  order,
  status,
  coverImage
}`;

function mapStory(story: SanityStory): StoryRecord | null {
    if (!story.cluster?.clusterId || !story.coverImage) {
        return null;
    }

    return {
        id: story.storyId,
        cluster: story.cluster.clusterId,
        title: story.title,
        time: story.readingTime,
        tags: story.tags,
        bigcoverpath: urlFor(story.coverImage),
        storyContent: story.storyContent,
        publishedAt: story.publishedAt || "",
        publishedDateDisplay: formatPublishedDate(story.publishedAt || ""),
        version: story.version || "1.0.0",
        author: story.author || "Skltrn",
    };
}

function mapCluster(cluster: SanityCluster): ClusterRecord {
    return {
        id: cluster.clusterId,
        order: cluster.order,
        status: cluster.status,
        coverImage: cluster.coverImage
            ? urlFor(cluster.coverImage)
            : undefined,
    };
}

export async function fetchStoriesByLocale() {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
        return { EN: [], DE: [], FR: [] };
    }

    const stories = await getSanityClient().fetch<SanityStory[]>(
        storiesQuery,
        {},
        { next: { revalidate: REVALIDATE_SECONDS, tags: ["stories"] } }
    );

    const grouped = { EN: [], DE: [], FR: [] } as Record<
        "EN" | "DE" | "FR",
        StoryRecord[]
    >;

    for (const story of stories) {
        const mapped = mapStory(story);
        if (mapped && grouped[story.locale]) {
            grouped[story.locale].push(mapped);
        }
    }

    return grouped;
}

export async function fetchClusters() {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
        return [];
    }

    const clusters = await getSanityClient().fetch<SanityCluster[]>(
        clustersQuery,
        {},
        { next: { revalidate: REVALIDATE_SECONDS, tags: ["clusters"] } }
    );

    return clusters.map(mapCluster).sort((a, b) => a.order - b.order);
}

export async function fetchSiteContent() {
    const [storiesByLocale, clusters] = await Promise.all([
        fetchStoriesByLocale(),
        fetchClusters(),
    ]);

    return { storiesByLocale, clusters };
}
