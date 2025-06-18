"use client"
import styled from "styled-components"
import Link from "next/link";

export default function Footer() {
    return (
        <StyledFooter>
            <FooterAbout>
                <Link href="/about">
                    About Force Field
                </Link>
            </FooterAbout>
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
    border: 4px solid var(--beige);
    opacity: 0.7;
    border-radius: 7px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 0.7rem;
    color: var(--beige);
`;
const FooterAbout = styled.div`
    min-width: 50%;
`;
const FooterCopyright = styled.div`
    color: var(--beige);
    min-height: 20px;
    font-family: poppins;
    font-weight: 200;
    padding: 10px;
`;
