// src/styles/reset.css.js
import { css } from "lit";

export const resetStyles = css`
  :host {
    box-sizing: border-box;
    font-family: sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    width: 100vw;
    overflow-x: hidden;
  }
`;
