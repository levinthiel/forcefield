"use client";
import styled from "styled-components";
import Image from "next/image";
import { retroBorder, terminalChrome } from "../lib/terminalStyles";

const HeaderShell = styled.div`
    position: sticky;
    top: 0;
    z-index: 50;
    margin-bottom: 1.5rem;
    background: rgba(32, 32, 32, 0.92);
    backdrop-filter: blur(6px);
    ${retroBorder}
    border-radius: 4px;
    margin-left: -2px;
    margin-right: -2px;

    @media (max-width: 803px) {
        margin-bottom: 24px;
    }
`;

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 140px;
    gap: 16px;
    padding: 8px;

    @media (max-width: 803px) {
        margin-bottom: 0;
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
    display: contents;
`;

const LogoIcon = styled.div`
    width: 180px;
    height: -webkit-fill-available;
    border-radius: 2px;
    border: 1px solid var(--ff-border);
    max-width: 181px;
    background: url(/logo-icon.svg) center center;
    box-shadow: inset 0 0 16px rgba(180, 27, 6, 0.12);

    @media (max-width: 606px) {
        width: 100px;
    }
    @media (max-width: 530px) {
        width: 28%;
    }
    @media (max-width: 400px) {
        width: 20%;
    }
`;

const LogoText = styled.div`
    background-color: var(--beige);
    height: -webkit-fill-available;
    border-radius: 2px;
    border: 1px solid var(--beige);
    box-shadow: 0 0 12px rgba(236, 232, 215, 0.2);

    @media (max-width: 803px) {
        flex-grow: 1;
        justify-content: center;
        display: flex;
    }
    @media (max-width: 530px) {
        width: 40%;
    }
`;

const Subline = styled.div`
    border: 1px solid var(--ff-border);
    color: var(--beige);
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 8px 16px;
    font-size: 15px;
    line-height: 26px;
    height: -webkit-fill-available;
    width: 33%;
    box-shadow: inset 0 0 24px rgba(180, 27, 6, 0.06);

    @media (max-width: 900px) {
        width: 28%;
        font-size: 10px;
        line-height: 1.3;
        padding: 5px 10px;
    }
    @media (max-width: 803px) {
        width: 100%;
        height: auto;
    }
    @media (max-width: 400px) {
        font-size: 10px;
    }
`;

const StatusLine = styled.span`
    ${terminalChrome}
    opacity: 0.65;
    margin-bottom: 4px;
    color: var(--red);
`;

const StatusMeta = styled.span`
    ${terminalChrome}
    opacity: 0.85;
    font-size: 0.85em;
`;

const LinesFiller = styled.div`
    border: 1px solid var(--ff-border);
    height: -webkit-fill-available;
    border-radius: 2px;
    flex-grow: 2;
    background: url(/lines.svg) center center;
    background-size: cover;
    opacity: 0.9;
    box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.4);

    @media (max-width: 900px) {
        display: none;
    }
`;

export default function Header() {
    return (
        <HeaderShell>
            <StyledHeader>
                <LinkHome href="/">
                    <LogoIcon />
                    <LogoText>
                        <Image
                            src="/logo-font.svg"
                            alt="forcefield-font"
                            width={215}
                            height={120}
                        />
                    </LogoText>
                </LinkHome>
                <Subline>
                    <StatusLine>SYS_ONLINE //</StatusLine>
                    <StatusMeta>STORY_INDEX // READY</StatusMeta>
                </Subline>
                <LinesFiller />
            </StyledHeader>
            <HeaderScanline aria-hidden="true" />
        </HeaderShell>
    );
}
