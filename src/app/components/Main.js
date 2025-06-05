import styled from "styled-components"
import Card from "./Card"
import story from "../../../public/lib/sa"
import ReactMarkdown from "react-markdown";

export default function Main() {
    return (
        <StyledMain>
          <Card></Card>  
          <p><em>by {story.title} – {story.date}</em></p>
          <ReactMarkdown>{story.storyContent}</ReactMarkdown>
        </StyledMain>
    )
}

const StyledMain = styled.main `
    margin-top: 20px;
    opacity: 0.7;
`;
