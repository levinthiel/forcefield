import styled from "styled-components";
import { cornerBracketHover, retroBorder, terminalChrome } from "../lib/terminalStyles";

const ReadHint = styled.span`
    opacity: 0;
    transition: opacity 0.25s;
    color: var(--red);
`;

const CoverImage = styled.img`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.5s ease;
    transform: scale(1);
`;

export default function Card({ storytitle, storyReadingTime, storyTags, storyCoverPath }) {
    return (
        <CardWrapper>
            {storyCoverPath && (
                <CoverFrame>
                    <CoverTitleBar>
                        <span>STORY_ARCHIVE.EXE</span>
                        <ReadHint>[ READ ]</ReadHint>
                    </CoverTitleBar>
                    <CardCover>
                        <CoverImage src={storyCoverPath} alt="" />
                        <ImageOverlayGradient />
                    </CardCover>
                </CoverFrame>
            )}

            <CardBodyWrapper>
                <CardTitle>{storytitle}</CardTitle>
                <CardBody>
                    <CardTags>
                        <p>{storyTags}</p>
                    </CardTags>
                    <CardReadingTime>reading time: {storyReadingTime}</CardReadingTime>
                    <CardMetaData>
                        <small>V1.0.0</small>
                        <small>18112025</small>
                        <small>Skltrn</small>
                    </CardMetaData>
                </CardBody>
            </CardBodyWrapper>
        </CardWrapper>
    );
}

const CardWrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: var(--beige);
    cursor: pointer;
    border: 1px solid var(--ff-border);
    border-radius: 2px;
    ${cornerBracketHover}

    & > * {
        position: relative;
        z-index: 2;
    }

    &:hover ${ReadHint} {
        opacity: 1;
    }

    &:hover ${CoverImage} {
        transform: scale(1.04);
    }
`;

const CoverFrame = styled.div`
    ${retroBorder}
    border-radius: 0;
    border-top: none;
    border-left: none;
    border-right: none;
    overflow: hidden;
    background: var(--ff-surface);
    width: 100%;
    flex-shrink: 0;
`;

const CoverTitleBar = styled.div`
    ${terminalChrome}
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem 0.5rem;
    background: rgba(236, 232, 215, 0.12);
    border-bottom: 1px solid var(--ff-border);
    color: var(--beige);
`;

const CardCover = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 2 / 3;
    overflow: hidden;

    @media (max-width: 640px) {
        aspect-ratio: 3 / 2;
        max-height: 200px;
    }
`;

const ImageOverlayGradient = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(180, 27, 6, 0.1) 0%, rgba(17, 17, 17, 0) 100%);
    pointer-events: none;
    z-index: 1;
`;

const CardBodyWrapper = styled.div`
    width: 100%;
    flex: 1 1 auto;
    border-radius: 0;
    border: none;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    background: rgba(42, 42, 42, 0.65);
    min-height: 0;
`;

const CardBody = styled.div`
    padding: 6px 10px 8px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1 1 auto;
`;

const CardTitle = styled.h2`
    text-transform: uppercase;
    font-weight: normal;
    font-family: "Mentra", sans-serif;
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    color: var(--beige);
    padding: 8px 10px 4px;
    letter-spacing: 1px;
    line-height: 1.1;
    min-height: 2.4em;

    @media (max-width: 640px) {
        font-size: 1rem;
        padding: 6px 10px 4px;
        min-height: auto;
        -webkit-line-clamp: 2;
    }
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-shadow: none;
    border-bottom: 1px solid rgba(236, 232, 215, 0.15);
`;

const CardTags = styled.div`
    font-family: var(--font-geist-mono), ui-monospace, monospace;
    display: flex;
    gap: 5px;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    line-height: 1.3;

    p {
        margin: 0;
    }
`;

const CardReadingTime = styled.p`
    margin: 0;
    text-align: left;
    font-size: 0.7rem;
    font-style: italic;
    font-family: var(--font-geist-mono), ui-monospace, monospace;
    opacity: 0.85;
    line-height: 1.3;
`;

const CardMetaData = styled.div`
    display: flex;
    justify-content: start;
    font-weight: 400;
    font-size: 0.65rem;
    gap: 8px;
    margin-top: auto;
    padding-top: 4px;
    opacity: 0.55;
    font-family: var(--font-geist-mono), ui-monospace, monospace;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`;
