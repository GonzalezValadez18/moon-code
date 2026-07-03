import { css } from "lit";

import "../../index.css";

import { resetStyles } from "../../styles/reset.css.js";

export const sectionHeroStyles = [
  resetStyles,
  css`
    .hero-section {
      position: relative;
      width: 100vw;
      height: calc(100vh - 80px);

      @media screen and (min-width: 768px) {
        height: calc(100vh - 110px);
      }
      @media screen and (min-width: 999px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 70px;
      }

      .hero-background {
        position: absolute;
        top: 0;
        left: 0;
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
          width: 50%;
          height: 80%;
          order: 1;
          object-fit: cover;

          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);

          -webkit-mask-composite: source-in;
          mask-composite: intersect;
        }
      }

      .hero-overlay {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.7);
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60%;
        overflow: hidden;
        padding: 20px;
        opacity: 0;
        transition: opacity 1s ease-in-out;

        &.is-into {
          opacity: 1;
        }

        @media screen and (min-width: 768px) {
          padding: 20px 70px;
        }
        @media screen and (min-width: 999px) {
          position: unset;
          width: 40%;
          height: auto;
          background-color: transparent;
          padding: 0;
        }

        .hero-text {
          width: 100%;

          .hero-title {
            font-size: 9vw;
            font-weight: 700;
            margin: 0;

            @media screen and (min-width: 768px) {
              font-size: 7vw;
            }
            @media screen and (min-width: 999px) {
              font-size: 5.5vw;
            }
          }
          .hero-description {
            font-size: 5vw;
            font-weight: 600;
            @media screen and (min-width: 768px) {
              font-size: 3vw;
            }
            @media screen and (min-width: 999px) {
              font-size: 2rem;
            }
          }
        }
      }
      .hero-cta {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        @media screen and (min-width: 768px) {
          font-size: 3vw;
          margin-top: 30px;
        }
        @media screen and (min-width: 999px) {
          font-size: 1.5vw;
        }

        .primary-button {
          overflow: hidden;
          position: relative;
          text-decoration: none;
          width: 45%;
          height: auto;
          padding: 10px;
          border: 2px solid #6820ac;
          color: white;
          text-align: center;
          z-index: 1;

          @media screen and (min-width: 768px) {
            width: 45%;
            padding: 20px;
          }

          @media screen and (min-width: 999px) {
            cursor: pointer;
            transition: all 0.4s ease;

            &::before {
              content: "";
              position: absolute;
              top: -100%;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: #00aef0;
              z-index: -1;
              transition: top 0.4s ease;
            }

            &:hover {
              color: black;
              &::before {
                top: 0;
              }
            }
          }
        }

        .secondary-button {
          overflow: hidden;
          position: relative;
          text-decoration: none;
          width: 45%;
          height: auto;
          padding: 10px;
          border: 2px solid #6820ac;
          background-color: #6820ac;
          color: white;
          text-align: center;
          z-index: 1;

          @media screen and (min-width: 768px) {
            width: 45%;
            padding: 20px;
          }

          @media screen and (min-width: 999px) {
            cursor: pointer;
            transition: transform 0.2s ease;
            background-color: #00aef0;
            transition: all 0.4s ease;

            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: #6820ac;
              z-index: -1;
              transition: all 0.4s ease;
            }

            &:hover {
              color: black;
              &::before {
                top: 100%;
              }
            }
          }
        }
      }
    }
  `,
];
