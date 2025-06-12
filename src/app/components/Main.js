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
                    >
                    </Card>  
                </Link>
            ))}
            {stories.map((story) => (
                <Link key={story.id} href={`/stories/${story.id}`}>
                    <Card
                        storytitle={story.title}
                        storyReadingTime={story.time}
                        storyTags={story.tags}
                    >
                    </Card>  
                </Link>
            ))}
            
        </StyledMain>
    )
}

const StyledMain = styled.main `
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;
