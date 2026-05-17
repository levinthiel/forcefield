import styled from "styled-components"
import Card from "./Card"
import stories from "../lib/allTheStories"
import Link from "next/link"
import AnnouncerTxt from "./AnnouncerTxt"
import Hero from "./Hero"

export default function Main() {
    return (
        <>
            <Hero />
            <AnnouncerTxt/>
            <StyledMain>
                {stories.map((story) => (
                    <StoryLink key={story.id} href={`/stories/${story.id}`}>
                        <Card
                            storytitle={story.title}
                            storyReadingTime={story.time}
                            storyTags={story.tags}
                            storyCoverPath={story.bigcoverpath}
                        />
                    </StoryLink>
                ))}            
            </StyledMain>
        </>
    )
}

const StyledMain = styled.main`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 40px;
    align-items: stretch;
    position: relative;
    z-index: 1;

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
