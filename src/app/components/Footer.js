import styled from "styled-components"

export default function Footer() {
    return (
        <StyledFooter>
            <FooterTop>
                <p>
                    All rights reserved © Levin Thiel - 2025
                </p>
            </FooterTop>
        </StyledFooter>
    )
}
const StyledFooter = styled.footer `
    width: 100%;
    border: 4px solid var(--orange);
    opacity: 0.7;
    border-radius: 7px;
    margin-top: 20px;
`;

const FooterTop = styled.div`
    background: var(--orange);
    color: var(--black);
    min-height: 20px;
    font-family: poppins;
    font-weight: 400;
    padding: 10px;
`;