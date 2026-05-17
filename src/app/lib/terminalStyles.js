import { css } from "styled-components";

export const retroBorder = css`
  border: 1px solid var(--ff-border, rgba(236, 232, 215, 0.5));
  position: relative;
  box-shadow:
    0 0 10px rgba(236, 232, 215, 0.08),
    inset 0 0 20px rgba(236, 232, 215, 0.04);
`;

export const boxGlow = css`
  box-shadow:
    0 0 10px rgba(236, 232, 215, 0.1),
    inset 0 0 20px rgba(180, 27, 6, 0.05);
`;

export const textGlow = css`
  text-shadow: 0 0 4px rgba(236, 232, 215, 0.45);
`;

export const terminalChrome = css`
  font-family: var(--font-geist-mono), ui-monospace, monospace;
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

/** Corner-bracket hover (https://codepen.io/Sherpa23/pen/rKvJXg) */
export const cornerBracketHover = css`
  position: relative;
  z-index: 0;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    background: var(--black);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 0;
    opacity: 1;
  }

  &::before {
    width: calc(100% + 2px);
    height: 100%;
    transition: height 1s ease, opacity 0.8s ease;
  }

  &::after {
    height: calc(100% + 2px);
    width: 100%;
    transition: width 1s ease, opacity 0.8s ease;
  }

  &:hover {
    z-index: 10;
  }

  &:hover::before {
    height: 85%;
    opacity: 0.7;
    transition: height 0.2s ease, opacity 0.3s ease;
  }

  &:hover::after {
    width: 85%;
    opacity: 0.8;
    transition: width 0.2s ease, opacity 0.3s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover::before {
      height: 100%;
      opacity: 1;
    }

    &:hover::after {
      width: 100%;
      opacity: 1;
    }
  }
`;

export const bracketButton = css`
  ${cornerBracketHover}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background: transparent;
  border: 1px solid var(--beige);
  color: var(--beige);
  border-radius: 0;
  font-family: var(--font-geist-mono), ui-monospace, monospace;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;

  &::before,
  &::after {
    background: var(--black);
  }

  & > span {
    position: relative;
    z-index: 2;
    color: var(--beige);
    line-height: 1.2;
    transition: color 0.2s ease;
  }

  &:hover,
  &:focus-visible {
    background: transparent;
    outline: none;
  }

  &:hover > span,
  &:focus-visible > span {
    color: var(--beige);
  }
`;
