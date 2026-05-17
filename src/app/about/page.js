"use client"
import styled from "styled-components";
import { retroBorder, terminalChrome, textGlow } from "../lib/terminalStyles";
import { useLocale } from "../lib/LocaleContext";

export default function AboutPage() {
    const { t } = useLocale();
    const a = t.about;

    return (
        <StyledPage>
            <DocHeader>
                <DocLabel>{a.docLabel}</DocLabel>
                <StyledH1>{a.title}</StyledH1>
            </DocHeader>
            <p>{a.p1}</p>
            <p>{a.p2}</p>
            <p>{a.p3}</p>
            <p>{a.p4}</p>
            <p>{a.p5}</p>
            <p>{a.p6}</p>
            <p>{a.p7}</p>
            <SectionDivider />
            <DocHeader>
                <StyledH2>{a.thanksTitle}</StyledH2>
            </DocHeader>
            <p>{a.thanksP1}</p>
            <p>{a.thanksP2}</p>
            <p>{a.thanksP3}</p>
            <p>{a.thanksP4}</p>
            <p>{a.thanksP5}</p>
        </StyledPage>
    )
}
const StyledPage = styled.article`
  margin: 2rem auto;
  padding: 3rem;
  ${retroBorder}
  border-radius: 2px;
  color: var(--beige);
  width: 100%;
  font-weight: normal;
  max-width: 800px;
  background: rgba(42, 42, 42, 0.55);
  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.35);

  p {
    margin: 10px 0;
    line-height: 1.65;
  }

  em {
    font-style: italic;
    color: var(--beige);
  }

  @media (max-width: 530px) {
    padding: 1rem;
  }
`;

const DocHeader = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(236, 232, 215, 0.25);
`;

const DocLabel = styled.span`
  ${terminalChrome}
  display: block;
  color: var(--red);
  opacity: 0.85;
  margin-bottom: 0.5rem;
`;

const SectionDivider = styled.hr`
  border: none;
  border-top: 1px dashed rgba(236, 232, 215, 0.25);
  margin: 2rem 0;
`;

const StyledH1 = styled.h1`
    ${textGlow}
    font-family: "Mentra", sans-serif;
    font-weight: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
`;

const StyledH2 = styled.h2`
    ${textGlow}
    font-family: "Mentra", sans-serif;
    font-weight: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0;
`;
