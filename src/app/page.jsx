"use client"
import styles from "./page.module.css";
import styled from "styled-components";
import Main from "../app/components/Main"
import Footer from "../app/components/Footer"

export default function Home() {
  return (
    <StyledContainer>
      
      <Main>
        
      </Main>
      <Footer>
       
      </Footer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div `
/*  background: var(--black) url(/screenbg.png);
 height: 100%;
 width: 100%; */

 display: block;
 

 @media (max-width: 530px) {
      padding: 16px;
    }
`;