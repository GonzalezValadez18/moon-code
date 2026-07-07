import { css } from "lit";

import "../../index.css";

import { resetStyles } from "../../styles/reset.css.js";

export const sectionTextStyles = [
  resetStyles,
  css`
    .text-section {
      font-size: 1.2rem;
      width: 100%;
      padding: 20px;
      line-height: 1.5;
      transform: translateX(-10%);
      opacity: 0;
      transition: all 1s ease-in-out;
      transition-delay: 0.5s;

      @media screen and (min-width: 768px) {
        padding: 20px 70px;
        font-size: 1.8rem;
      }
      @media screen and (min-width: 999px) {
        font-size: 2rem;
      }

      &.is-into {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `,
];
