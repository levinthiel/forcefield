"use client"
import React, { useEffect, useState } from "react";
import { useLocale } from "../../lib/LocaleContext";
import ReactMarkdown from "react-markdown";
import styled, { css } from "styled-components";
import Image from 'next/image'
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { FaArrowUp, FaHouse } from "react-icons/fa6";
import { cornerBracketHover, retroBorder, terminalChrome, textGlow } from "../../lib/terminalStyles";
import Link from "next/link";

export default function StoryPage({ params }) {
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;
  const { stories, t } = useLocale();
  const sp = t.storyPage;
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

  if (!story) return <p>{sp.notFound}</p>;

  return (
    <>
      <FloatingControls>
        <HomeButton href="/" aria-label={sp.backHomeAria}>
          <FaHouse />
        </HomeButton>
        <TopButton href="#top" aria-label={sp.backTopAria}>
          <FaArrowUp />
        </TopButton>
        <LightButton onClick={toggleLightMode} role="button" tabIndex={0} aria-label={sp.toggleLightAria}>
          {lightMode ? <MdNightlight /> : <MdLightMode />}
        </LightButton>
      </FloatingControls>

      <ProgressContainer>
        <ProgressLabel>{sp.loadingNarrative}</ProgressLabel>
        <ProgressBar style={{ width: `${scrollProgress}%` }} >
          <Progress>{scrollProgress}%</Progress>
        </ProgressBar>
      </ProgressContainer>

      <StyledPage className={lightMode ? "light" : ""} id="top">
        <TerminalChrome>
          <span>{sp.storyReaderExe}</span>
          <span>{sp.rootAccess}</span>
        </TerminalChrome>
        <StyledImage
          src={story.bigcoverpath}
          width={500}
          height={709}
          alt={sp.coverAlt}
          layout="responsive"
        />
        <hr />
        <StyledH1>{story.title}</StyledH1>
        <StyledMarkdown>
          <ReactMarkdown>{story.storyContent}</ReactMarkdown>
        </StyledMarkdown>
      </StyledPage>
    </>
  );
}

const fabButtonStyles = css`
  ${cornerBracketHover}
  display: flex;
  width: 44px;
  height: 44px;
  background: var(--black);
  border: 1px solid var(--beige);
  border-radius: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  flex-shrink: 0;

  &::before,
  &::after {
    background: var(--black);
  }

  svg {
    position: relative;
    z-index: 2;
    width: 18px;
    height: 18px;
    fill: var(--beige);
  }
`;

const FloatingControls = styled.div`
  position: fixed;
  bottom: 30px;
  right: 20px;
  display: flex;
  gap: 8px;
  z-index: 60;
`;

const HomeButton = styled(Link)`
  ${fabButtonStyles}
`;

const TopButton = styled.a`
  ${fabButtonStyles}
`;

const LightButton = styled.div`
  ${fabButtonStyles}
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
  background: rgba(42, 42, 42, 0.92);
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
