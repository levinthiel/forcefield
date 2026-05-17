"use client";

import styled from "styled-components";
import { retroBorder, terminalChrome, bracketButton } from "../lib/terminalStyles";
import { useLocale } from "../lib/LocaleContext";

const LANGUAGES = ["EN", "DE", "FR"];

const HeaderShell = styled.div`
    position: sticky;
    top: 0;
    z-index: 50;
    margin-bottom: 1.5rem;
    background: rgba(32, 32, 32, 0.92);
    backdrop-filter: blur(6px);
    ${retroBorder}
    border-radius: 0;
    margin-left: -2px;
    margin-right: -2px;

    @media (max-width: 803px) {
        margin-bottom: 24px;
    }
`;

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px 12px;
    min-height: 48px;
    padding: 6px 10px;

    @media (max-width: 900px) {
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 530px) {
        padding: 6px 8px;
    }
`;

const HeaderScanline = styled.div`
    height: 1px;
    width: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(236, 232, 215, 0.35),
        transparent
    );
`;

const LinkHome = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    text-decoration: none;

    @media (max-width: 900px) {
        width: 100%;
        justify-content: center;
    }
`;

const LogoIcon = styled.div`
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    background: url(/logo-icon.svg) center center / contain no-repeat;
`;

const LogoWordmark = styled.span`
    font-family: "Mentra", sans-serif;
    font-weight: normal;
    font-size: 30px;
    margin-top: 5px;
    display: inline-block;
    color: var(--beige);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    white-space: nowrap;
`;

const StatusBar = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px 10px;
    flex: 1;
    min-width: 0;
    margin-left: 3.5rem;
    ${terminalChrome}
    font-size: 0.6rem;
    opacity: 0.9;

    @media (max-width: 900px) {
        display: none;
    }
`;

const StatusItem = styled.span`
    white-space: nowrap;

    &[data-variant="accent"] {
        color: var(--red);
    }
`;

const StatusSep = styled.span`
    color: rgba(236, 232, 215, 0.25);
    user-select: none;
`;

const LangGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    margin-left: auto;

    @media (max-width: 900px) {
        flex-basis: 100%;
        width: 100%;
        margin-left: 0;
        justify-content: center;
    }
`;

const LangGlobeIcon = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--beige);
    opacity: 0.85;
    margin-right: 2px;

    svg {
        width: 15px;
        height: 15px;
    }
`;

const LangButton = styled.button`
    ${bracketButton}
    padding: 3px 8px;
    font-size: 0.65rem;
    font-weight: 700;
    min-width: 2.5rem;

    & > span {
        font-weight: 700;
    }

    &[data-active="true"] {
        border-color: var(--red);
        box-shadow: 0 0 6px rgba(180, 27, 6, 0.35);

        & > span {
            color: var(--red);
        }
    }

    &[data-active="false"] {
        opacity: 0.65;

        &:hover {
            opacity: 1;
        }
    }
`;

export default function Header() {
    const { locale, setLocale, t } = useLocale();
    const h = t.header;

    return (
        <HeaderShell>
            <StyledHeader>
                <LinkHome href="/">
                    <LogoIcon aria-hidden="true" />
                    <LogoWordmark>Force Field</LogoWordmark>
                </LinkHome>

                <StatusBar aria-label={h.statusAria}>
                    <StatusItem data-variant="accent">{h.sysOnline}</StatusItem>
                    <StatusSep>|</StatusSep>
                    <StatusItem>{h.storyIndexReady}</StatusItem>
                    <StatusSep>|</StatusSep>
                    <StatusItem>{h.sessionGuest}</StatusItem>
                    <StatusSep>|</StatusSep>
                    <StatusItem>{h.loc}</StatusItem>
                </StatusBar>

                <LangGroup role="group" aria-label={h.langGroupAria}>
                    <LangGlobeIcon aria-hidden="true">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                    </LangGlobeIcon>
                    {LANGUAGES.map((code) => (
                        <LangButton
                            key={code}
                            type="button"
                            data-active={locale === code}
                            aria-pressed={locale === code}
                            onClick={() => setLocale(code)}
                        >
                            <span>{code}</span>
                        </LangButton>
                    ))}
                </LangGroup>
            </StyledHeader>
            <HeaderScanline aria-hidden="true" />
        </HeaderShell>
    );
}
