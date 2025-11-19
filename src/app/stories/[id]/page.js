"use client"
import React, { useEffect, useState } from "react";
import stories from "../../lib/allTheStories";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Image from 'next/image'
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";

export default function StoryPage({ params }) {
  // story
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;
  const story = stories.find((s) => s.id === id);

  //light mode
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode((prev) => !prev);
  };

  // scroll progress bar
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = Math.round((scrollTop / docHeight) * 100);
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!story) return <p>Story not found.</p>;

  return (
    <>
      <TopButton href="#top">
        <FaArrowUp />
      </TopButton>

      <LightButton onClick={toggleLightMode}>
        {lightMode ? <MdNightlight /> : <MdLightMode />}
      </LightButton>

      <ProgressContainer>
        <ProgressBar style={{ width: `${scrollProgress}%` }} >
          <Progress>{scrollProgress}%</Progress>
        </ProgressBar>
      </ProgressContainer>

      <LinkBox>
        <LinkHome href="/">     
          Back
        </LinkHome>
        <LinkEmpty></LinkEmpty>
      </LinkBox>

      <StyledPage className={lightMode ? "light" : ""} id="top">
        <StyledImage
          src={story.bigcoverpath}
          width={500}
          height={709}
          alt="Picture of the cover"
          layout="responsive"
        />
        <br></br>
        <hr></hr>
        <br></br>
        <StyledH1>{story.title}</StyledH1>
        <br></br>
        <StyledMarkdown>
          <ReactMarkdown>{story.storyContent}</ReactMarkdown>
        </StyledMarkdown>
      </StyledPage>
      <LinkBox>
        <LinkHome href="/">
          Back
        </LinkHome>
        <LinkEmpty></LinkEmpty>
      </LinkBox>
    </>
  );
}
const TopButton = styled.a`
  display: flex;
  position: fixed;
  bottom: 30px;
  right: 70px;
  width: 44px;
  height: 44px;
  background: var(--black);
  border-radius: 50%;
  border:2px solid var(--beige);
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    fill: var(--beige);
  }
`;
const LightButton = styled.div`
  display: flex;
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 44px;
  height: 44px;
  background: var(--black);
  border-radius: 50%;
  border:2px solid var(--beige);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .3s ease;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--beige);
  }

  &:hover {
    transform: rotate(180deg);

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
const ProgressContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  background: var(--beige);
  z-index: 100;
  left: 0;
`;
const ProgressBar = styled.div`
  height: 1rem;
  background:var(--red);
  width: 0%;
  transition: width 0.25s ease-out;
`;
const Progress = styled.p`
  font-size: 0.8rem;
  font-weight: normal;
  text-align: right;
  color: var(--beige);
  padding-right: 10px;
`;
const StyledPage = styled.article`
  margin: 2rem auto;
  padding: 3rem;
  border: 2px solid var(--beige);
  border-radius: 7px;
  color: var(--beige);
  width: 100%;
  max-width: 800px;

  &.light {
    background: var(--beige);
    color: var(--black);
    border-color: var(--black);
  }

  @media (max-width: 530px) {

    padding: 1rem;
  }
`;
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
const StyledImage = styled(Image)`
  border-radius: 7px;
  max-width: 500px;
  margin: 0px auto;
  display: block;
`;
const StyledH1 = styled.h1 `
  font-size: 3rem;
  font-family: "Mentra";
  font-weight: normal;
  letter-spacing: 2px;
  text-align: center;
`;
const StyledMarkdown = styled.div`
  font-weight: normal;
  line-height: 1.7rem;
  font-size: 1rem;

  blockquote {
    padding-left: 10px;
    font-style: italic;
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: bold;
  }

  h2 {
    font-size: 24px;
    margin-top: 20px;
  }
  hr {
    margin: 1rem auto;
  }
`;

