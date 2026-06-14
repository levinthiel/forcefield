export const CLUSTERS = [
    { id: "cc2", order: 0, status: "coming_soon" },
    {
        id: "cc1",
        order: 1,
        status: "available",
        coverImage: "/Chronicle-cluster-one-cover.png",
    },
];

export function getSortedClusters() {
    return [...CLUSTERS].sort((a, b) => a.order - b.order);
}
