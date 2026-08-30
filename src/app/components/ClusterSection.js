"use client";

import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import ClusterBanner from "./ClusterBanner";
import Link from "next/link";
import {
    getStoredClusterSort,
    sortStories,
    storeClusterSort,
} from "../lib/storyUtils";

export default function ClusterSection({ cluster, copy, stories, sortLabels }) {
    const [sortOrder, setSortOrder] = useState("newest");
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setSortOrder(getStoredClusterSort(cluster.id));
        setHydrated(true);
    }, [cluster.id]);

    const sortedStories = useMemo(() => {
        if (!hydrated) {
            return sortStories(stories, "newest");
        }

        return sortStories(stories, sortOrder);
    }, [stories, sortOrder, hydrated]);

    const handleSortChange = (event) => {
        const nextOrder = event.target.value;
        setSortOrder(nextOrder);
        storeClusterSort(cluster.id, nextOrder);
    };

    return (
        <ClusterSectionWrap>
            <ClusterBanner
                copy={copy}
                coverImage={cluster.coverImage}
                clusterId={cluster.id}
                sortLabels={sortLabels}
                sortOrder={sortOrder}
                onSortChange={handleSortChange}
            />
            <StoryGrid>
                {sortedStories.map((story) => (
                    <StoryLink key={story.id} href={`/stories/${story.id}`}>
                        <Card
                            storytitle={story.title}
                            storyReadingTime={story.time}
                            storyTags={story.tags}
                            storyCoverPath={story.bigcoverpath}
                            storyVersion={story.version}
                            storyPublishedDate={story.publishedDateDisplay}
                            storyPublishedAt={story.publishedAt}
                            storyAuthor={story.author}
                        />
                    </StoryLink>
                ))}
            </StoryGrid>
        </ClusterSectionWrap>
    );
}

const ClusterSectionWrap = styled.section`
    margin-top: 20px;
    position: relative;
    z-index: 1;
`;

const StoryGrid = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 40px;
    align-items: stretch;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const StoryLink = styled(Link)`
    display: flex;
    min-width: 0;
    height: 100%;
`;
