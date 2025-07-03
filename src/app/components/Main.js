import styled from "styled-components"
import Card from "./Card"
import stories from "../lib/allTheStories"
import Link from "next/link"

export default function Main() {
    return (
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
    )
}

const StyledMain = styled.main`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
`;