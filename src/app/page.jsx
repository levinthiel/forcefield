"use client"
import styles from "./page.module.css";
import styled from "styled-components";
import Header from "../app/components/Header"
import Main from "../app/components/Main"

export default function Home() {
  return (
    <StyledContainer>
      <Header/>
      <Main>
        
      </Main>
      <footer className={styles.footer}>
       
      </footer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div `
 background: var(--black);
 height: 100%;
 width: 100%;
 padding: 40px;
 display: block;
 opacity: 0.6;

 @media (max-width: 400px) {
      padding: 10px;
    }
`;