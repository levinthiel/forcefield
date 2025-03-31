"use client"
import styles from "./page.module.css";
import styled from "styled-components";


export default function Home() {
  return (
    <StyledContainer>
      <main className={styles.main}>
        
      </main>
      <footer className={styles.footer}>
       
      </footer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div `
 background: red;
 height: 100%;
 width: 100%;
 padding: 40px;
 display: block;
`;