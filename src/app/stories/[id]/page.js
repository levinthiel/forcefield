"use client"
import React, { useEffect, useState } from "react";
import stories from "../../lib/allTheStories";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Image from 'next/image'
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import { bracketButton, retroBorder, terminalChrome, textGlow } from "../../lib/terminalStyles";

export default function StoryPage({ params }) {
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;
  const story = stories.find((s) => s.id === id);

  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode((prev) => !prev);
  };

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
      <TopButton href="#top" aria-label="Back to top">
        <FaArrowUp />
      </TopButton>

      <LightButton onClick={toggleLightMode} role="button" tabIndex={0} aria-label="Toggle reading mode">
        {lightMode ? <MdNightlight /> : <MdLightMode />}
      </LightButton>

      <ProgressContainer>
        <ProgressLabel>LOADING_NARRATIVE</ProgressLabel>
        <ProgressBar style={{ width: `${scrollProgress}%` }} >
          <Progress>{scrollProgress}%</Progress>
        </ProgressBar>
      </ProgressContainer>

      <LinkBox>
        <LinkHome href="/">
          <span>[ BACK ]</span>
        </LinkHome>
        <LinkEmpty />
      </LinkBox>

      <StyledPage className={lightMode ? "light" : ""} id="top">
        <TerminalChrome>
          <span>STORY_READER.EXE</span>
          <span>ROOT_ACCESS</span>
        </TerminalChrome>
        <StyledImage
          src={story.bigcoverpath}
          width={500}
          height={709}
          alt="Picture of the cover"
          layout="responsive"
        />
        <hr />
        <StyledH1>{story.title}</StyledH1>
        <StyledMarkdown>
          <ReactMarkdown>{story.storyContent}</ReactMarkdown>
        </StyledMarkdown>
      </StyledPage>
      <LinkBox>
        <LinkHome href="/">
          <span>[ BACK ]</span>
        </LinkHome>
        <LinkEmpty />
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
  border-radius: 2px;
  border: 1px solid var(--beige);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 60;
  box-shadow: 0 0 10px rgba(236, 232, 215, 0.15);
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 0 0 14px rgba(180, 27, 6, 0.35);
    transform: translateY(-2px);
  }

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
  border-radius: 2px;
  border: 1px solid var(--beige);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 60;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(236, 232, 215, 0.15);

  svg {
    width: 20px;
    height: 20px;
    fill: var(--beige);
  }

  &:hover {
    transform: rotate(180deg);
    box-shadow: 0 0 14px rgba(180, 27, 6, 0.35);

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
  z-index: 100;
  left: 0;
  background: rgba(32, 32, 32, 0.95);
  border-top: 1px solid var(--ff-border);
`;

const ProgressLabel = styled.div`
  ${terminalChrome}
  padding: 2px 10px 0;
  font-size: 0.55rem;
  opacity: 0.7;
  color: var(--beige);
`;

const ProgressBar = styled.div`
  height: 0.65rem;
  background: var(--red);
  width: 0%;
  transition: width 0.25s ease-out;
  box-shadow: 0 0 12px rgba(180, 27, 6, 0.5);
`;

const Progress = styled.p`
  font-size: 0.65rem;
  font-weight: normal;
  text-align: right;
  color: var(--beige);
  padding-right: 10px;
  font-family: var(--font-geist-mono), ui-monospace, monospace;
  line-height: 0.65rem;
`;

const TerminalChrome = styled.div`
  ${terminalChrome}
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: rgba(236, 232, 215, 0.08);
  border-bottom: 1px solid var(--ff-border);
  margin: 0 -3rem 1.5rem;
  width: calc(100% + 6rem);

  @media (max-width: 530px) {
    margin: 0 -1rem 1rem;
    width: calc(100% + 2rem);
  }
`;

const StyledPage = styled.article`
  margin: 2rem auto;
  padding: 0 3rem 3rem;
  ${retroBorder}
  border-radius: 2px;
  color: var(--beige);
  width: 100%;
  max-width: 800px;
  background: rgba(42, 42, 42, 0.55);
  overflow: hidden;

  hr {
    border: none;
    border-top: 1px dashed rgba(236, 232, 215, 0.25);
    margin: 1.5rem 0;
  }

  &.light {
    background: var(--beige);
    color: var(--black);
    border-color: var(--black);

    ${TerminalChrome} {
      background: rgba(32, 32, 32, 0.08);
      color: var(--black);
    }
  }

  @media (max-width: 530px) {
    padding: 0 1rem 1rem;
  }
`;

const LinkBox = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

const LinkHome = styled.a`
  ${bracketButton}
  width: 20%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
`;

const LinkEmpty = styled.div`
  width: 80%;
  border-radius: 2px;
  border: 1px solid var(--ff-border);
  background: url(/lines.svg) center center;
  background-size: cover;
  opacity: 0.85;
  box-shadow: inset 0 0 24px rgba(0, 0, 0, 0.35);
`;

const StyledImage = styled(Image)`
  border-radius: 2px;
  max-width: 500px;
  margin: 0 auto;
  display: block;
  border: 1px solid var(--ff-border);
  box-shadow: 0 0 20px rgba(180, 27, 6, 0.15);
`;

const StyledH1 = styled.h1`
  font-size: 3rem;
  font-family: "Mentra", sans-serif;
  font-weight: normal;
  letter-spacing: 2px;
  text-align: center;
  ${textGlow}
`;

const StyledMarkdown = styled.div`
  font-weight: normal;
  line-height: 1.7rem;
  font-size: 1rem;

  blockquote {
    padding-left: 10px;
    font-style: italic;
    border-left: 2px solid var(--red);
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
    font-family: "Mentra", sans-serif;
    letter-spacing: 1px;
  }

  ${StyledPage}.light & blockquote {
    border-left-color: var(--black);
  }
`;
