import { css } from "lit";

import { resetStyles } from "../../styles/reset.css.js";

export const appTimeLineStyles = [
  resetStyles,
  css`
    .app-timeline {
      width: 100%;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 50px;

      @media screen and (min-width: 768px) {
        padding: 0 70px;
      }

      @media screen and (min-width: 999px) {
        flex-direction: row;
      }

      .items {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0;
        order: 2;
        @media screen and (min-width: 999px) {
          order: unset;
          width: 60%;
        }

        .line {
          top: 0;
          left: 15px;
          position: absolute;
          height: 100%;
          width: 5px;
          background-color: #6d0cdb;
          z-index: -1;
          @media screen and (min-width: 768px) {
            left: 20px;
          }
        }
        .item {
          display: flex;
          flex-direction: row;
          gap: 10px;
          width: 100%;
          margin-bottom: 20px;
          @media screen and (min-width: 768px) {
            margin-bottom: 30px;
          }

          .dot {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #6d0cdb;
            font-size: 30px;
            margin: 0px;
            @media screen and (min-width: 768px) {
              width: 50px;
              height: 50px;
            }
          }
          .info {
            width: calc(100% - 50px);
            display: flex;
            flex-direction: column;
            margin: 0;
            margin-top: 5px;
            .title {
              font-size: 1.5rem;
              font-weight: 600;
              margin: 0;
              @media screen and (min-width: 768px) {
                font-size: 1.8rem;
              }
              @media screen and (min-width: 999px) {
                font-size: 1.5rem;
              }
            }
            .content {
              font-size: 1.3rem;
              margin: 0;
              margin-top: 20px;
              @media screen and (min-width: 768px) {
                font-size: 1.5rem;
              }
              @media screen and (min-width: 999px) {
                font-size: 1.3rem;
              }
            }
          }
        }
      }
      .hero-background {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 60%;

        opacity: 0;
        transition: opacity 1s ease-in-out;
        transition-delay: 0.2s;

        &.is-into {
          opacity: 1;
        }

        -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%);
        mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%);

        @media screen and (min-width: 999px) {
          position: unset;
          width: 40%;
          order: 1;
          object-fit: cover;

          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);

          -webkit-mask-composite: source-in;
          mask-composite: intersect;
        }
      }
    }
  `,
];
