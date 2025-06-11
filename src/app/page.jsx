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
 display: block;
`;