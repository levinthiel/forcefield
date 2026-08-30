import ClusterSection from "./ClusterSection";
import { useLocale } from "../lib/LocaleContext";
import AnnouncerTxt from "./AnnouncerTxt";
import Hero from "./Hero";

export default function Main() {
    const { stories, clusters, t } = useLocale();

    return (
        <>
            <Hero />
            <AnnouncerTxt />
            {clusters.map((cluster) => {
                const copy = t.clusters[cluster.id];
                const clusterStories = stories.filter(
                    (story) => story.cluster === cluster.id
                );

                if (clusterStories.length === 0) {
                    return null;
                }

                return (
                    <ClusterSection
                        key={cluster.id}
                        cluster={cluster}
                        copy={copy}
                        stories={clusterStories}
                        sortLabels={t.clusterSort}
                    />
                );
            })}
        </>
    );
}
