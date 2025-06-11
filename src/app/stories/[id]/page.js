"use client"
import React from "react";
import stories from "../../lib/allTheStories";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

export default function StoryPage({ params }) {
  const resolvedParams = React.use(params);  // unwrap the promise here
  const { id } = resolvedParams;

  const story = stories.find((s) => s.id === id);

  if (!story) return <p>Story not found.</p>;

  return (
    <StyledPage>
      <h1>{story.title}</h1>
      <h3>by {story.tags}</h3>
      <small>{story.time}</small>
      <ReactMarkdown>{story.storyContent}</ReactMarkdown>
    </StyledPage>
  );
}

const StyledPage = styled.article`
  max-width: 700px;
  margin: 2rem auto;
  padding: 1rem;
`;

