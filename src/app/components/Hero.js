"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import {
    boxGlow,
    bracketButton,
    retroBorder,
    terminalChrome,
    textGlow,
} from "../lib/terminalStyles";

const DIAG_METRICS = [
    { label: "STORY_INDEX_LOAD", value: 98, delay: 0 },
    { label: "READER_SYNC", value: 72, delay: 400 },
    { label: "ARCHIVE_INTEGRITY", value: 100, delay: 800 },
];

const CONSOLE_LINES = [
    "> LOADING STORY_INDEX...",
    "> TALES VERIFIED: ONLINE",
    "> CHRONICLES_SIGNAL: STABLE",
    "> ARCHIVE_SYNC: OK",
    "> READER_UPLINK: READY",
    "> NARRATIVE_BUFFER: CLEAR",
];

const BAR_SEGMENTS = 34;
const TYPE_SPEED_MS = 32;
const LINE_PAUSE_MS = 1400;

function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(mq.matches);
        const onChange = (e) => setReduced(e.matches);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    return reduced;
}

function AnimatedBar({ label, targetValue, startDelay, reducedMotion }) {
    const [displayValue, setDisplayValue] = useState(reducedMotion ? targetValue : 0);
    const [fillPercent, setFillPercent] = useState(reducedMotion ? targetValue : 0);
    const [isAnimating, setIsAnimating] = useState(!reducedMotion);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (!hasMounted) return;

        if (reducedMotion) {
            setDisplayValue(targetValue);
            setFillPercent(targetValue);
            setIsAnimating(false);
            return;
        }

        setDisplayValue(0);
        setFillPercent(0);
        setIsAnimating(true);

        const totalSteps = Math.max(1, Math.round((targetValue / 100) * BAR_SEGMENTS));
        const stepMs = 50;
        let step = 0;
        let intervalId;
        let timeoutId;

        timeoutId = window.setTimeout(() => {
            intervalId = window.setInterval(() => {
                step += 1;
                const progress = Math.min(1, step / totalSteps);
                const eased = 1 - Math.pow(1 - progress, 2.5);
                const nextValue = Math.round(targetValue * eased);

                setFillPercent(nextValue);
                setDisplayValue(nextValue);

                if (step >= totalSteps) {
                    window.clearInterval(intervalId);
                    setFillPercent(targetValue);
                    setDisplayValue(targetValue);
                    setIsAnimating(false);
                }
            }, stepMs);
        }, startDelay);

        return () => {
            window.clearTimeout(timeoutId);
            window.clearInterval(intervalId);
        };
    }, [hasMounted, targetValue, startDelay, reducedMotion]);

    const filled = "|".repeat(BAR_SEGMENTS);
    const empty = ".".repeat(BAR_SEGMENTS);

    return (
        <DiagItem>
            <DiagLabel>
                <span>{label}</span>
                <DiagValue $animating={isAnimating}>{displayValue}%</DiagValue>
            </DiagLabel>
            <DiagBarTrack>
                <DiagBarGhost aria-hidden="true">
                    [{empty}]
                </DiagBarGhost>
                <DiagBarFillWrap
                    $fillPercent={fillPercent}
                    $animating={isAnimating}
                    aria-hidden="true"
                >
                    <DiagBarFill>[{filled}]</DiagBarFill>
                </DiagBarFillWrap>
            </DiagBarTrack>
        </DiagItem>
    );
}

function TypewriterConsole({ reducedMotion }) {
    const [completedLines, setCompletedLines] = useState(
        reducedMotion ? CONSOLE_LINES.slice(0, 4) : []
    );
    const [currentText, setCurrentText] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (reducedMotion) return;

        const fullLine = CONSOLE_LINES[lineIndex];

        if (isPaused) {
            const pauseTimer = window.setTimeout(() => {
                setCompletedLines((prev) => [...prev.slice(-3), fullLine]);
                setCurrentText("");
                setLineIndex((i) => (i + 1) % CONSOLE_LINES.length);
                setIsPaused(false);
            }, LINE_PAUSE_MS);
            return () => clearTimeout(pauseTimer);
        }

        if (currentText.length < fullLine.length) {
            const typeTimer = window.setTimeout(() => {
                setCurrentText(fullLine.slice(0, currentText.length + 1));
            }, TYPE_SPEED_MS);
            return () => clearTimeout(typeTimer);
        }

        setIsPaused(true);
    }, [currentText, lineIndex, isPaused, reducedMotion]);

    if (reducedMotion) {
        return (
            <ConsoleLog>
                {completedLines.map((line) => (
                    <ConsoleLine key={line}>{line}</ConsoleLine>
                ))}
            </ConsoleLog>
        );
    }

    return (
        <ConsoleLog>
            {completedLines.map((line, i) => (
                <ConsoleLine key={`${line}-${i}`} $highlight={line.includes("VERIFIED")}>
                    {line}
                </ConsoleLine>
            ))}
            <ConsoleLine $active>
                {currentText}
                <TypeCursor>_</TypeCursor>
            </ConsoleLine>
        </ConsoleLog>
    );
}

export default function Hero() {
    const reducedMotion = usePrefersReducedMotion();

    return (
        <HeroSection>
            <HeroGrid>
                <HeroMain>
                    <HeroCard>
                        <HeroBgGrid aria-hidden="true" />
                        <HeroContent>
                            <PromptLine>
                                C:\FORCE_FIELD\CHRONICLES\ROOT&gt; LOAD_STORIES.EXE
                            </PromptLine>
                            <HeroTitle>
                                <TitleLine>&gt; Chronicles from the Edge</TitleLine>
                                <TitleLine $highlight>
                                    Science fiction short stories
                                    <Cursor>_</Cursor>
                                </TitleLine>
                            </HeroTitle>
                        </HeroContent>
                        <HeroActions>
                            <AboutLink href="/about">
                                <span>[ ABOUT ]</span>
                            </AboutLink>
                        </HeroActions>
                    </HeroCard>
                </HeroMain>

                <HeroSidebar>
                    <DiagnosticsCard>
                        <DiagHeader>
                            <DiagTitle>SYSTEM_DIAGNOSTICS</DiagTitle>
                            <LiveBadge>
                                <LiveDot aria-hidden="true" />
                                LIVE
                            </LiveBadge>
                        </DiagHeader>

                        <DiagBars>
                            {DIAG_METRICS.map((metric) => (
                                <AnimatedBar
                                    key={metric.label}
                                    label={metric.label}
                                    targetValue={metric.value}
                                    startDelay={metric.delay}
                                    reducedMotion={reducedMotion}
                                />
                            ))}
                        </DiagBars>

                        <TypewriterConsole reducedMotion={reducedMotion} />
                    </DiagnosticsCard>
                </HeroSidebar>
            </HeroGrid>
        </HeroSection>
    );
}

const blink = keyframes`
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
`;

const pulse = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0.35; }
`;

const livePulse = keyframes`
    0%, 100% {
        opacity: 1;
        box-shadow: 0 0 6px var(--red);
    }
    50% {
        opacity: 0.5;
        box-shadow: 0 0 2px var(--red);
    }
`;

const barShimmer = keyframes`
    0% {
        text-shadow: 0 0 4px rgba(236, 232, 215, 0.25);
    }
    50% {
        text-shadow: 0 0 10px rgba(180, 27, 6, 0.45), 0 0 6px rgba(236, 232, 215, 0.5);
    }
    100% {
        text-shadow: 0 0 4px rgba(236, 232, 215, 0.25);
    }
`;

const scanLine = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    15% {
        opacity: 0.35;
    }
    100% {
        transform: translateY(220%);
        opacity: 0;
    }
`;

const HeroSection = styled.section`
    position: relative;
    z-index: 1;
    margin-bottom: 1.5rem;

    @media (max-width: 640px) {
        margin-bottom: 1rem;
    }
`;

const HeroGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    align-items: stretch;

    @media (min-width: 900px) {
        grid-template-columns: 70fr 30fr;
        gap: 1.25rem;
    }
`;

const HeroMain = styled.div`
    min-width: 0;
`;

const HeroSidebar = styled.div`
    min-width: 0;
    display: flex;

    @media (max-width: 899px) {
        display: none;
    }
`;

const HeroCard = styled.div`
    ${retroBorder}
    ${boxGlow}
    position: relative;
    overflow: hidden;
    min-height: 280px;
    height: 100%;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
    background: rgba(42, 42, 42, 0.55);

    @media (max-width: 899px) {
        min-height: auto;
        gap: 0.75rem;
        padding: 1rem 1rem 1.1rem;
    }

    @media (min-width: 640px) {
        padding: 2rem;
    }

    @media (min-width: 640px) and (max-width: 899px) {
        padding: 1.25rem;
    }
`;

const DiagnosticsCard = styled.div`
    ${retroBorder}
    ${boxGlow}
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 280px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: rgba(42, 42, 42, 0.65);

    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 232, 215, 0.35),
            transparent
        );
        animation: ${scanLine} 4s linear infinite;
        pointer-events: none;
        z-index: 2;
    }

    @media (prefers-reduced-motion: reduce) {
        &::after {
            display: none;
        }
    }

    @media (min-width: 900px) {
        min-height: 100%;
    }
`;

const DiagHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(236, 232, 215, 0.3);
    padding-bottom: 0.5rem;
    position: relative;
    z-index: 1;
`;

const DiagTitle = styled.h3`
    ${terminalChrome}
    font-weight: 700;
    font-size: 0.75rem;
    margin: 0;
    ${textGlow}
`;

const LiveBadge = styled.span`
    ${terminalChrome}
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.65rem;
    color: var(--red);
`;

const LiveDot = styled.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--red);
    animation: ${livePulse} 1.5s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
        animation: ${pulse} 2s ease-in-out infinite;
    }
`;

const DiagBars = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    position: relative;
    z-index: 1;
`;

const DiagItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

const DiagLabel = styled.div`
    ${terminalChrome}
    display: flex;
    justify-content: space-between;
    font-size: 0.6rem;
`;

const DiagValue = styled.span`
    color: var(--beige);

    ${({ $animating }) =>
        $animating &&
        css`
            animation: ${pulse} 0.8s ease-in-out infinite;
        `}
`;

const DiagBarTrack = styled.div`
    position: relative;
    font-family: var(--font-geist-mono), ui-monospace, monospace;
    font-size: clamp(0.55rem, 1.2vw, 0.75rem);
    letter-spacing: -0.06em;
    line-height: 1.2;
    height: 1.2em;
    overflow: hidden;
`;

const DiagBarGhost = styled.div`
    position: absolute;
    inset: 0;
    opacity: 0.35;
    color: var(--beige);
    white-space: nowrap;
    overflow: hidden;
`;

const DiagBarFillWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform-origin: left center;
    transform: scaleX(${({ $fillPercent }) => Math.max(0, Math.min(1, $fillPercent / 100))});
    transition: transform 0.08s linear;
    z-index: 1;

    ${({ $animating }) =>
        $animating &&
        css`
            animation: ${barShimmer} 1.2s ease-in-out infinite;
        `}
`;

const DiagBarFill = styled.div`
    color: var(--beige);
    white-space: nowrap;
    text-shadow: 0 0 6px rgba(236, 232, 215, 0.35);
`;

const ConsoleLog = styled.div`
    margin-top: auto;
    position: relative;
    z-index: 1;
    border-top: 1px solid rgba(236, 232, 215, 0.25);
    min-height: 7rem;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.45);
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const ConsoleLine = styled.p`
    ${terminalChrome}
    margin: 0 0 0.35rem;
    font-size: 0.6rem;
    line-height: 1.45;
    color: ${({ $highlight, $active }) =>
        $active ? "#ffffff" : $highlight ? "#ffffff" : "rgba(236, 232, 215, 0.75)"};
    ${({ $highlight, $active }) =>
        ($highlight || $active) && `text-shadow: 0 0 6px rgba(180, 27, 6, 0.45);`}
`;

const TypeCursor = styled.span`
    animation: ${blink} 0.9s step-end infinite;
    color: var(--red);
    margin-left: 1px;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

const HeroBgGrid = styled.div`
    position: absolute;
    inset: 0;
    opacity: 0.08;
    background-image:
        linear-gradient(var(--beige) 1px, transparent 1px),
        linear-gradient(90deg, var(--beige) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 1;
`;

const PromptLine = styled.p`
    ${terminalChrome}
    opacity: 0.7;
    margin-bottom: 1rem;
    font-size: clamp(0.6rem, 2vw, 0.875rem);

    @media (max-width: 640px) {
        margin-bottom: 0.5rem;
        font-size: 0.6rem;
    }
`;

const HeroTitle = styled.h1`
    margin: 0;
    line-height: 1.05;
    letter-spacing: -0.02em;
`;

const TitleLine = styled.span`
    display: block;
    margin-bottom: 0.5rem;
    font-size: clamp(1.75rem, 6vw, 4.5rem);
    font-weight: 700;
    ${textGlow}
    color: ${({ $highlight }) => ($highlight ? "#ffffff" : "var(--beige)")};
    font-family: var(--font-geist-sans), var(--font-geist-mono), ui-sans-serif, system-ui, sans-serif;
    letter-spacing: ${({ $highlight }) => ($highlight ? "0.04em" : "-0.02em")};

    @media (max-width: 640px) {
        margin-bottom: 0.35rem;
        font-size: clamp(1.35rem, 7vw, 1.85rem);
    }

    ${({ $highlight }) =>
        $highlight &&
        css`
            font-size: clamp(0.875rem, 3vw, 2.25rem);

            @media (max-width: 640px) {
                font-size: clamp(0.7rem, 3.2vw, 0.95rem);
            }
        `}
`;

const Cursor = styled.span`
    animation: ${blink} 1s step-end infinite;
    color: var(--red);

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

const HeroActions = styled.div`
    position: relative;
    z-index: 1;
`;

const AboutLink = styled(Link)`
    ${bracketButton}
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    text-decoration: none;

    @media (max-width: 640px) {
        padding: 0.45rem 0.9rem;
        font-size: 0.7rem;
    }
`;
