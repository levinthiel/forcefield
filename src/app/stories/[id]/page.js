"use client"
import React from "react";
import stories from "../../lib/allTheStories";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Image from 'next/image'

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
        <StyledImage
          src={story.bigcoverpath}
          width={500}
          height={709}
          alt="Picture of the cover"
          layout="responsive"
        />
        <hr></hr>
        <br></br>
        <h1>{story.title}</h1>
        <br></br>
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
  background: url(/lines.svg) center center;
  background-size: cover;

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
const StyledImage = styled(Image)`
  border-radius: 7px;
  max-width: 500px;
`;

