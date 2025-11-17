import styled from "styled-components"
import Card from "./Card"
import stories from "../lib/allTheStories"
import Link from "next/link"
import AnnouncerTxt from "./AnnouncerTxt"

export default function Main() {
    return (
        <>
            <AnnouncerTxt/>
            <StyledMain>
                {stories.map((story) => (
                    <Link key={story.id} href={`/stories/${story.id}`}>
                        <Card
                            storytitle={story.title}
                            storyReadingTime={story.time}
                            storyTags={story.tags}
                            storyCoverPath={story.bigcoverpath}
                        >
                        </Card>  
                    </Link>
                ))}            
            </StyledMain>
        </>
    )
}

const StyledMain = styled.main`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;

    & > * {
        flex-basis: calc(25% - 40px);  // 4 cards per row

        @media (max-width: 1000px) {
            flex-basis: calc(50% - 40px); // 2 cards per row
        }
        @media (max-width: 600px) {
            flex-basis: 100%; // 1 per row
        }

        @media (max-width: 530px) {
            min-width: 100%;
        }
    }
`;
