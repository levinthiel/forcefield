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
                    <div>
                    <WarningText>
                        WARNING
                    </WarningText>
                    <Image
                        src="/fake-text.svg"
                        alt="Fake text"
                        width={198}  // Set the width
                        height={138} // Set the height
                        layout="responsive"
                    />
                    </div>
                    <Image
                        src="/alert-icon.svg"
                        alt="alert-icon"
                        width={137}  // Set the width
                        height={121} // Set the height
                        layout="responsive"
                    />
                </SubtitleDeco>
                <Subtitle>
                    <p>Force Field: Chronicles from the Edge</p>
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
    padding: 20px;
    min-height: 80px;
    background: var(--orange);
    color: var(--black);
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
`;
const LogoTextBars = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const LogoTextBar1 = styled.div`
    width: 100%;
    height: 5px;
    border-radius: 7px;
    background: var(--orange);
`;
const LogoTextBar2 = styled.div`
    width: 100%;
    height: 9px;
    border-radius: 3px;
    background: var(--orange);
`;
const LogoTextBar3 = styled.div`
    width: 100%;
    height: 18px;
    border-radius: 5px;
    background: var(--orange);
`;
const LogoTextBar4 = styled.div`
    width: 100%;
    height: 38px;
    border-radius: 7px;
    background: var(--orange);
`;
const LogoTextBar5 = styled.div`
    width: 100%;
    height: 66px;
    border-radius: 7px;
    background: var(--orange);
`;
const LogoIcon = styled.div`
    width: 20%;
    border-right: 4px solid var(--orange);
    padding: 40px;
`;
const SubTitleContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const SubtitleDeco = styled.div`
    padding: 10px;
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
`;
