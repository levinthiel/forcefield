"use client";

import Image from "next/image";
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

export default function ClusterBanner({
    copy,
    coverImage,
    clusterId,
    sortLabels,
    sortOrder,
    onSortChange,
}) {
    return (
        <BannerSection>
            <BannerCard>
                <BannerBgGrid aria-hidden="true" />
                <BannerLayout>
                    <BannerMain>
                        {coverImage && (
                            <CoverWrap>
                                <CoverImage
                                    src={coverImage}
                                    alt={copy.coverAlt ?? ""}
                                    width={220}
                                    height={330}
                                />
                            </CoverWrap>
                        )}
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
                    </BannerMain>
                    {sortLabels && onSortChange && (
                        <SortControl>
                            <SortLabel htmlFor={`cluster-sort-${clusterId}`}>
                                {sortLabels.label}
                            </SortLabel>
                            <SortSelect
                                id={`cluster-sort-${clusterId}`}
                                value={sortOrder}
                                onChange={onSortChange}
                                aria-label={sortLabels.ariaLabel}
                            >
                                <option value="newest">{sortLabels.newest}</option>
                                <option value="oldest">{sortLabels.oldest}</option>
                            </SortSelect>
                        </SortControl>
                    )}
                </BannerLayout>
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

const CoverWrap = styled.div`
    flex-shrink: 0;
    width: 90px;
    border: 1px solid var(--ff-border);
    border-radius: 2px;
    box-shadow: 0 0 12px rgba(180, 27, 6, 0.15);
    overflow: hidden;

    @media (min-width: 640px) {
        width: 120px;
    }
`;

const CoverImage = styled(Image)`
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
    transform: scale(1);
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

    &:hover ${CoverImage} {
        transform: scale(1.1);
    }

    @media (prefers-reduced-motion: reduce) {
        &:hover ${CoverImage} {
            transform: scale(1);
        }
    }
`;

const BannerLayout = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.25rem;
    width: 100%;

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: stretch;
        gap: 0.75rem;
    }
`;

const BannerMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.25rem;
    flex: 1;
    min-width: 0;

    @media (max-width: 640px) {
        gap: 0.75rem;
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
    text-align: left;
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

const SortControl = styled.div`
    ${terminalChrome}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-left: auto;
    flex-shrink: 0;
    font-size: clamp(0.45rem, 1.2vw, 0.65rem);
    opacity: 0.85;

    @media (max-width: 640px) {
        margin-left: 0;
        justify-content: flex-end;
        flex-wrap: wrap;
    }
`;

const SortLabel = styled.label`
    color: var(--beige);
    white-space: nowrap;
`;

const SortSelect = styled.select`
    background: rgba(17, 17, 17, 0.85);
    color: var(--beige);
    border: 1px solid var(--ff-border);
    border-radius: 0;
    padding: 0.2rem 0.4rem;
    font-family: var(--font-geist-mono), ui-monospace, monospace;
    font-size: inherit;
    cursor: pointer;

    &:focus {
        outline: 1px solid var(--red);
        outline-offset: 1px;
    }
`;
