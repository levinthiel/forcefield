export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const useCdn = process.env.NODE_ENV === "production";

export function getSanityProjectId() {
    if (!projectId) {
        throw new Error(
            "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
        );
    }

    return projectId;
}
