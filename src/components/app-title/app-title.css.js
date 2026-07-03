import { css } from "lit";

import { resetStyles } from "../../styles/reset.css.js";

export const appTitleStyles = [
  resetStyles,
  css`
    .app-title {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0px;
      .line {
        width: 50%;
        height: 15px;
        align-self: flex-start;
        transform: translateX(-10%);
        opacity: 0;
        transition: all 1s ease-in-out;

        &.is-into {
          transform: translateX(0);
          opacity: 1;
        }

        @media screen and (min-width: 768px) {
          height: 20px;
        }

        @media screen and (min-width: 999px) {
          width: 60%;
          height: 30px;
        }
      }

      .line.right {
        align-self: flex-end;
      }

      .line.left {
        align-self: flex-start;
      }

      h3 {
        width: 100%;
        padding: 0 20px;
        font-size: 2rem;
        font-weight: normal;
        transform: translateX(-10%);
        opacity: 0;
        transition: all 1s ease-in-out;

        &.is-into {
          transform: translateX(0);
          opacity: 1;
        }
        @media screen and (min-width: 768px) {
          font-size: 3rem;
          padding: 0 70px;
        }
        @media screen and (min-width: 999px) {
          font-size: 4rem;
        }
      }
    }
  `,
];
