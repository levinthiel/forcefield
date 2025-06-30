"use client"
import styled from "styled-components"
import Link from "next/link";

export default function Footer() {
    return (
        <StyledFooter>
            <FooterAbout>
                <Link href="/about">
                    &#8505; &nbsp; About Force Field
                </Link>
            </FooterAbout>
            <div>
                <Link href="https://whatsapp.com/channel/0029Vb6b7z3Gk1FoIvxkTz3v">
                    &#128488; &nbsp;  Never miss an Update - Join the whatsapp Channel
                </Link>
            </div>
            <div>
                <Link href="https://open.spotify.com/playlist/2bSO3P9jssmmK2rS7iKuaN?si=263539ff2f80417d">
                    &#9835; &nbsp;  Listen and collaborate on the Force Field playlist
                </Link>
            </div>
            <FooterCopyright>
                <p>
                    All rights reserved. © Skeletron - 2025
                </p>
            </FooterCopyright>
        </StyledFooter>
    )
}
const StyledFooter = styled.footer `
    width: 100%;
    border: 2px solid var(--beige);
    border-radius: 7px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.7rem;
    color: var(--beige);
    padding: 10px;
    flex-wrap: wrap;
    gap: 10px;
`;
const FooterAbout = styled.div`
    fill: var(--beige);
`;
const FooterCopyright = styled.div`
    color: var(--beige);
    min-height: 20px;
    font-family: poppins;
    font-weight: 200;

`;
