export function formatPublishedDate(isoDate) {
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

export function formatVersion(version) {
    if (!version) {
        return "V1.0.0";
    }

    return version.startsWith("V") ? version : `V${version}`;
}

export function sortStories(stories, order = "newest") {
    const sorted = [...stories];

    sorted.sort((a, b) => {
        const aTime = new Date(a.publishedAt || 0).getTime();
        const bTime = new Date(b.publishedAt || 0).getTime();
        return order === "newest" ? bTime - aTime : aTime - bTime;
    });

    return sorted;
}

export const CLUSTER_SORT_STORAGE_PREFIX = "forcefield-cluster-sort-";

export function getStoredClusterSort(clusterId) {
    if (typeof window === "undefined") {
        return "newest";
    }

    const stored = localStorage.getItem(`${CLUSTER_SORT_STORAGE_PREFIX}${clusterId}`);
    return stored === "oldest" ? "oldest" : "newest";
}

export function storeClusterSort(clusterId, sortOrder) {
    if (typeof window === "undefined") {
        return;
    }

    localStorage.setItem(`${CLUSTER_SORT_STORAGE_PREFIX}${clusterId}`, sortOrder);
}
