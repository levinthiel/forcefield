"use client"
import styles from "./page.module.css";
import styled from "styled-components";
import Header from "../app/components/Header"
import Main from "../app/components/Main"
import Footer from "../app/components/Footer"

export default function Home() {
  return (
    <StyledContainer>
      <Header/>
      <Main>
        
      </Main>
      <Footer>
       
      </Footer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div `
 background: var(--black) url(/screenbg.png);
 height: 100%;
 width: 100%;
 padding: 40px;
 display: block;
 

 @media (max-width: 400px) {
      padding: 10px;
    }
`;