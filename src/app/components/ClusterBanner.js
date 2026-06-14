"use client";

import styled, { css, keyframes } from "styled-components";
import {
    boxGlow,
    retroBorder,
    terminalChrome,
    textGlow,
} from "../lib/terminalStyles";

const blink = keyframes`
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
`;

export default function ClusterBanner({ copy }) {
    return (
        <BannerSection>
            <BannerCard>
                <BannerBgGrid aria-hidden="true" />
                <BannerContent>
                    <PromptLine>{copy.prompt}</PromptLine>
                    <BannerTitle>
                        <TitleLine>{copy.titleLine1}</TitleLine>
                        <TitleLine $highlight>
                            {copy.titleLine2}
                            <Cursor>_</Cursor>
                        </TitleLine>
                    </BannerTitle>
                </BannerContent>
            </BannerCard>
        </BannerSection>
    );
}

const BannerSection = styled.section`
    position: relative;
    z-index: 1;
    margin-bottom: 1.5rem;

    @media (max-width: 640px) {
        margin-bottom: 1rem;
    }
`;

const BannerCard = styled.div`
    ${retroBorder}
    ${boxGlow}
    position: relative;
    overflow: hidden;
    padding: 1rem 1.25rem;
    background: rgba(42, 42, 42, 0.55);

    @media (min-width: 640px) {
        padding: 1.25rem 2rem;
    }
`;

const BannerBgGrid = styled.div`
    position: absolute;
    inset: 0;
    opacity: 0.08;
    background-image:
        linear-gradient(var(--beige) 1px, transparent 1px),
        linear-gradient(90deg, var(--beige) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
`;

const BannerContent = styled.div`
    position: relative;
    z-index: 1;
`;

const PromptLine = styled.p`
    ${terminalChrome}
    opacity: 0.7;
    margin-bottom: 0.5rem;
    font-size: clamp(0.35rem, 1vw, 0.5rem);

    @media (max-width: 640px) {
        margin-bottom: 0.35rem;
        font-size: 0.35rem;
    }
`;

const BannerTitle = styled.h2`
    margin: 0;
    line-height: 1.05;
    letter-spacing: -0.02em;
`;

const TitleLine = styled.span`
    display: block;
    margin-bottom: 0.5rem;
    font-size: clamp(0.875rem, 3vw, 2.25rem);
    font-weight: 700;
    ${textGlow}
    color: ${({ $highlight }) => ($highlight ? "#ffffff" : "var(--beige)")};
    font-family: var(--font-geist-sans), var(--font-geist-mono), ui-sans-serif, system-ui, sans-serif;
    letter-spacing: ${({ $highlight }) => ($highlight ? "0.04em" : "-0.02em")};

    @media (max-width: 640px) {
        margin-bottom: 0.35rem;
        font-size: clamp(0.675rem, 3.5vw, 0.925rem);
    }

    ${({ $highlight }) =>
        $highlight &&
        css`
            font-size: clamp(0.4375rem, 1.5vw, 1.125rem);

            @media (max-width: 640px) {
                font-size: clamp(0.35rem, 1.6vw, 0.475rem);
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
