"use client"
import styled from "styled-components"
import Image from 'next/image';

export default function Header() {
    return(
        <StyledHeader>
            <LogoIcon>
           {/*      <Image
                    src="/logo-icon.svg"
                    alt="forcefield-icon"
                    width={181}  // Set the width
                    height={140} // Set the height
                    layout="responsive"
                /> */}
            </LogoIcon>
            <LogoText>
                <Image
                    src="/logo-font.svg"
                    alt="forcefield-font"
                    width={251}  // Set the width
                    height={140} // Set the height
                />
            </LogoText>
            <Subline>
                <p>Chronicles from the Edge<br/>
                    Science fiction short stories
                </p>
            </Subline>
            <LinesFiller>
            </LinesFiller>

            
        </StyledHeader>
    )
}

const StyledHeader = styled.header `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 140px;
    gap: 16px;
    margin-bottom: 70px;

    @media (max-width: 803px) {
        margin-bottom: 140px;
    } 
`;
const LogoIcon = styled.div`
    width: 180px;
    height: -webkit-fill-available;
    border-radius: 7px;
    border: 2px solid var(--beige);
    max-width: 181px;
    background: url(/logo-icon.svg) center center;
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
const LogoText = styled.div `
    background-color: var(--beige);
    height: -webkit-fill-available;
    border-radius: 7px;
    
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
    border: 2px solid var(--beige);
    color: var(--beige);
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    font-size: 24px;
    line-height: 26px;
    height: -webkit-fill-available;
    width: 33%;
    @media (max-width: 900px) {
        width: 28%;
        font-size: 18px;
    }
    @media (max-width: 803px) {
        width: 100%;
        height: auto;
    } 
    @media (max-width: 400px) {
        font-size: 16px;
    } 
`;
const LinesFiller = styled.div`
    border: 2px solid var(--beige);
    height: -webkit-fill-available;
    border-radius: 7px;
    flex-grow: 2;
    background: url(/lines.svg) center center;
    background-size: cover;

    @media (max-width: 900px) {
        display: none;
    } 
`;
