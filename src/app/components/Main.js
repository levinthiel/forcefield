import styled from "styled-components"
import Card from "./Card"
import ClusterBanner from "./ClusterBanner"
import { useLocale } from "../lib/LocaleContext"
import { getSortedClusters } from "../lib/clusters"
import Link from "next/link"
import AnnouncerTxt from "./AnnouncerTxt"
import Hero from "./Hero"

export default function Main() {
    const { stories, t } = useLocale();
    const clusters = getSortedClusters();

    return (
        <>
            <Hero />
            <AnnouncerTxt/>
            {clusters.map((cluster) => {
                const copy = t.clusters[cluster.id];
                const clusterStories = stories.filter(
                    (story) => story.cluster === cluster.id
                );

                if (clusterStories.length === 0) {
                    return null;
                }

                return (
                    <ClusterSection key={cluster.id}>
                        <ClusterBanner
                            copy={copy}
                            coverImage={cluster.coverImage}
                        />
                        <StoryGrid>
                            {clusterStories.map((story) => (
                                <StoryLink key={story.id} href={`/stories/${story.id}`}>
                                    <Card
                                        storytitle={story.title}
                                        storyReadingTime={story.time}
                                        storyTags={story.tags}
                                        storyCoverPath={story.bigcoverpath}
                                    />
                                </StoryLink>
                            ))}
                        </StoryGrid>
                    </ClusterSection>
                );
            })}
        </>
    )
}

const ClusterSection = styled.section`
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
