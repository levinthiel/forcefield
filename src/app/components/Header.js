import { useState, useEffect } from 'react';
import styled from "styled-components"
import Image from 'next/image';

export default function Header() {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedDate = `${currentDate.toLocaleString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })}.${currentDate.getMilliseconds().toString().padStart(3, '0')}`;





    return(
        <StyledHeader>
            <TopBar>
                <p>Welcome to:</p>
                <p>{formattedDate}</p>
            </TopBar>
            <LogoText>
                <h1>FORCE FIELD</h1>
                <LogoTextBars>
                    <LogoTextBar1></LogoTextBar1>
                    <LogoTextBar2></LogoTextBar2>
                    <LogoTextBar3></LogoTextBar3>
                    <LogoTextBar4></LogoTextBar4>
                    <LogoTextBar5></LogoTextBar5>
                </LogoTextBars>
            </LogoText>
            <LogoIcon>
                <Image
                            src="/forcefield-icon.svg"
                            alt="forcefield-icon"
                            width={132}  // Set the width
                            height={152} // Set the height
                            layout="responsive"
                />
            </LogoIcon>
            <SubTitleContainer>
                <SubtitleDeco>
                    <WarningTextContainer>
                    <WarningText>
                        WARNING
                    </WarningText>
                        <Image
                            src="/fake-text.svg"
                            alt="Fake text"
                            width={146}  // Set the width
                            height={167} // Set the height
                            layout="responsive"
                        />
                    </WarningTextContainer>
                    <WarningIconContainer>
                        <Image
                            src="/alert-icon.svg"
                            alt="alert-icon"
                            width={137}  // Set the width
                            height={121} // Set the height
                            layout="responsive"
                        />
                    </WarningIconContainer>
                </SubtitleDeco>
                <Subtitle>
                    <p>Chronicles from the Edge</p>
                    <p>Science fiction short stories</p>
                </Subtitle>
            </SubTitleContainer>
        </StyledHeader>
    )
}

const StyledHeader = styled.header `
    width: 100%;
    border: 4px solid var(--orange);
    border-radius: 7px;
    display: flex;
    flex-wrap: wrap;
    font-family: poppins;
    font-weight: 400;
`;
const TopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 0px 0 10px 0 ;
    min-height: 60px;
    background: var(--orange);
    color: var(--black);

    @media (max-width: 1000px) {
        display: none;
    }
`;
const LogoText = styled.div `
    background: transparent;
    padding: 20px;
    color: var(--orange);
    border-right: 4px solid var(--orange);
    width: 60%;
    font-size: 54px;
    font-weight: 900;
    font-family: outfit;

    @media (max-width: 1335px) {
        font-size: 40px;
    }
    @media (max-width: 1000px) {
        font-size: 30px;
        width: 100%;
    }
    @media (max-width: 400px) {
        font-size: 18px;
        width: 100%;
        padding: 10px;
    }
`;
const LogoTextBars = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 400px) {
        gap: 3px ;
    }
`;
const LogoTextBar1 = styled.div`
    width: 100%;
    height: 2px;
    background: var(--orange);

    @media (max-width: 400px) {
        height: 1px;
    }
`;
const LogoTextBar2 = styled.div`
    width: 100%;
    height: 5px;
    background: var(--orange);

    @media (max-width: 400px) {
        height: 2px;
    }
`;
const LogoTextBar3 = styled.div`
    width: 100%;
    height: 14px;
    background: var(--orange);

    @media (max-width: 400px) {
        height: 4px;
    }
`;
const LogoTextBar4 = styled.div`
    width: 100%;
    height: 23px;
    background: var(--orange);
    @media (max-width: 400px) {
        height: 10px;
    }
`;
const LogoTextBar5 = styled.div`
    width: 100%;
    height: 45px;
    background: var(--orange);
    @media (max-width: 400px) {
        height: 17px;
    }
`;
const LogoIcon = styled.div`
    width: 20%;
    border-right: 4px solid var(--orange);
    padding: 10px 60px;
    max-height: 305px;

    @media (max-width: 1000px) {
        display: none;
    }
`;
const SubTitleContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1000px) {
        width: auto;
        display: block;
        height: 100%;
        flex-grow: 1;
    }
`;
const SubtitleDeco = styled.div`
    padding: 10px;
    display: flex;
    gap: 10px;

    @media (max-width: 1335px) {
       display: none;
    }
`;
const WarningTextContainer = styled.div`
    width: 50%;
`;
const WarningIconContainer = styled.div`
    width: 50%;
`;
const WarningText = styled.p `
    font-weight: 900;
    font-family: outfit;
    color: var(--orange);
    border: solid 4px var(--orange) ;
    padding: 4px;
    border-radius: 7px;
    width: 50%;
    min-width: 96px;
`;
const Subtitle = styled.div `
    background: var(--orange);
    color: var(--black);
    padding: 10px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
