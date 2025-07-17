"use client"
import styled from "styled-components"
import Link from "next/link";
import FeedbackButton from "./FeedbackButton"

export default function Footer() {
    return (
        <StyledFooter>
            <FooterAbout>
                    <h3>
                        About Force Field
                    </h3>
                    <p>
                        Welcome to Force Field — a collection of short stories born from a lifelong love of science fiction in all its chaotic, beautiful, and bizarre forms. <br></br>
                        Force Field is the result of all that—my small tribute to the genre that shaped my brain, inspired my art, and still keeps me up at night wondering what’s out there.
                        <br></br>
                        Nothing fancy. No grand statements. Just weird ideas, told for the fun of it.
                    </p>
                    <Link href="/about">
                        <button> More</button>
                    </Link>
            </FooterAbout>
            <FooterLinks>
                <Link href="https://whatsapp.com/channel/0029Vb6b7z3Gk1FoIvxkTz3v">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                    &nbsp;  Never miss an Update - Join the whatsapp Channel
                </Link>
                <Link href="https://open.spotify.com/playlist/2bSO3P9jssmmK2rS7iKuaN?si=263539ff2f80417d">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
                    </svg>
                    &nbsp;  Listen and collaborate on the Force Field playlist
                </Link>
                <FeedbackButton/>
                <FooterCopyright>
                <p>
                    All rights reserved. © Skeletron - 2025
                </p>
                </FooterCopyright>
            </FooterLinks> 
        </StyledFooter>
    )
}
const StyledFooter = styled.footer `
    width: 100%;
    border: 2px solid var(--beige);
    border-radius: 7px;
    margin-top: 20px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    font-size: 0.8rem;
    color: var(--beige);
    padding: 40px;
    flex-wrap: wrap;
    gap: 10px;
`;
const FooterAbout = styled.div`
    fill: var(--beige);
    max-width: 50%;

    @media (max-width: 900px) {
    max-width: 100%;
    }

    h3 {
        font-size: 20px;
        margin-bottom: 10px;
    }
    p {
        font-weight: normal;
    }
    button {
        padding: 6px 12px;
        margin-top: 7px;
        background: transparent;
        border: 2px solid var(--beige);
        color: var(--beige);
        border-radius: 4px;
        
        &:hover {
            background: var(--beige);
            color: var(--black);
        }
    }
`;
const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap:16px;

    a {
        display: flex;
    }
`;
const FooterCopyright = styled.div`
    color: var(--beige);
    min-height: 20px;
    font-family: poppins;
`;
