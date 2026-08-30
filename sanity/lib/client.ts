import { createClient, type SanityClient } from "next-sanity";

import { apiVersion, dataset, getSanityProjectId, useCdn } from "../env";

let client: SanityClient | null = null;

export function getSanityClient() {
    if (!client) {
        client = createClient({
            projectId: getSanityProjectId(),
            dataset,
            apiVersion,
            useCdn,
            perspective: "published",
        });
    }

    return client;
}

export function getWriteClient() {
    const token = process.env.SANITY_API_WRITE_TOKEN;

    if (!token) {
        throw new Error("Missing environment variable: SANITY_API_WRITE_TOKEN");
    }

    return createClient({
        projectId: getSanityProjectId(),
        dataset,
        apiVersion,
        useCdn: false,
        token,
        perspective: "published",
    });
}
