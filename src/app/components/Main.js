import styled from "styled-components"
import Card from "./Card"
import stories from "../lib/sa"

export default function Main() {
    return (
        <StyledMain>
            {stories.map((story) => (
                <Card key={story.title}
                storytitle={story.title}
                storyReadingTime={story.time}
                storyTags={story.tags}
                >
                </Card>  
            ))}
            {stories.map((story) => (
                <Card key={story.title}
                storytitle={story.title}
                storyReadingTime={story.time}
                storyTags={story.tags}
                >
                </Card>  
            ))}
            {stories.map((story) => (
                <Card key={story.title}
                storytitle={story.title}
                storyReadingTime={story.time}
                storyTags={story.tags}
                >
                </Card>  
            ))}
            {stories.map((story) => (
                <Card key={story.title}
                storytitle={story.title}
                storyReadingTime={story.time}
                storyTags={story.tags}
                >
                </Card>  
            ))}
            {stories.map((story) => (
                <Card key={story.title}
                storytitle={story.title}
                storyReadingTime={story.time}
                storyTags={story.tags}
                >
                </Card>  
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
