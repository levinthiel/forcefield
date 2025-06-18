"use client"
import styles from "./page.module.css";
import styled from "styled-components";
import Main from "../app/components/Main"

export default function Home() {
  return (
    <StyledContainer>     
      <Main>
      </Main>
    </StyledContainer>
  );
}

const StyledContainer = styled.div `
 display: block;
`;