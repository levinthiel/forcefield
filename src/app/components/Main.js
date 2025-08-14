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
                            storyCoverPath={story.smallcoverpath}
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

  & > * {
        flex: 1 1 calc((100% - 80px) / 3); // 3 items per row with 16px gap
        max-width: calc((100% - 80px) / 3);
        min-width: 328px;
    }
`;
