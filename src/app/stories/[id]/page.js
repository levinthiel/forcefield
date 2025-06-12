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
    <>
      <LinkBox>
        <LinkHome href="/">
          Back
        </LinkHome>
        <LinkEmpty></LinkEmpty>
      </LinkBox>
      <StyledPage>
        <h1>{story.title}</h1>
        <h3>by {story.tags}</h3>
        <small>{story.time}</small>
        <ReactMarkdown>{story.storyContent}</ReactMarkdown>
      </StyledPage>
    </>
  );
}
const LinkBox = styled.div `
  width: 100%;
  display: flex;
  gap: 1rem;
`;
const LinkHome = styled.a `
  width: 20%;
  display: block;
  border-radius: 7px;
  border: 2px solid var(--beige);
  padding: 1rem;
  color: var(--red);
  min-width: 80px;
`;
const LinkEmpty = styled.div`
  width: 80%;
  border-radius: 7px;
  border: 2px solid var(--beige);
`;
const StyledPage = styled.article`
  margin: 2rem auto;
  padding: 3rem;
  border: 2px solid var(--beige);
  border-radius: 7px;
  color: var(--beige);
  width: 100%;

  @media (max-width: 530px) {

    padding: 1rem;
  }
`;

