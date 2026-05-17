import { keyframes, styled } from "styled-components";
import { retroBorder, terminalChrome } from "../lib/terminalStyles";
import { useLocale } from "../lib/LocaleContext";

export default function AnnouncerTxt() {
    const { t } = useLocale();
    const text = `${t.announcer.marquee} `;

    return (
        <a href="https://open.spotify.com/playlist/2bSO3P9jssmmK2rS7iKuaN?si=263539ff2f80417d">
            <Wrapper>
                <MarqueeLabel>{t.announcer.label}</MarqueeLabel>
                <MarqueeTrack>
                    <Marquee>
                        <p>{text}</p>
                        <p aria-hidden="true">{text}</p>
                    </Marquee>
                </MarqueeTrack>
            </Wrapper>
        </a>
    );
}

const rotateslide = keyframes`
    0% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(-50%, 0, 0);
    }
`;

const Wrapper = styled.div`
    max-width: 100%;
    overflow: hidden;
    ${retroBorder}
    border-radius: 2px;
    color: var(--beige);
    display: flex;
    align-items: stretch;
    transition: box-shadow 0.25s;

    &:hover {
        box-shadow:
            0 0 14px rgba(236, 232, 215, 0.15),
            inset 0 0 20px rgba(180, 27, 6, 0.08);
    }
`;

const MarqueeLabel = styled.div`
    ${terminalChrome}
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 10px 12px;
    background: var(--beige);
    color: var(--black);
    font-weight: 700;
    border-right: 1px solid var(--ff-border);
`;

const MarqueeTrack = styled.div`
    flex: 1;
    overflow: hidden;
    padding: 10px 10px 1px 10px;
    min-width: 0;
`;

const Marquee = styled.div`
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    animation: ${rotateslide} 60s linear infinite;

    p {
        display: inline-block;
        font-weight: normal;
        font-family: var(--font-geist-mono), ui-monospace, monospace;
        font-size: 0.85rem;
        letter-spacing: 0.02em;
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;
