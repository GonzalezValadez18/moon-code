import { css } from "lit";

import { resetStyles } from "../../styles/reset.css.js";

export const appHeaderStyles = [
  resetStyles,
  css`
    .header-space {
      height: 80px;
      width: 100vw;

      @media screen and (min-width: 768px) {
        height: 110px;
      }
    }
    header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      top: 0;
      background-color: rgba(17, 1, 31, 0.8);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      width: 100vw;
      height: 80px;
      padding: 15px;
      z-index: 100;

      @media screen and (min-width: 768px) {
        height: 110px;
        padding: 20px 70px;
      }

      .logo-container {
        height: 100%;

        a {
          height: 100%;

          img {
            height: 100%;
            transition: all 0.4s ease-in-out;
          }
        }
      }
      .hamburguer-container {
        height: fit-content;
        aspect-ratio: 1 / 1;
        display: flex;
        align-items: center;
        @media screen and (min-width: 999px) {
          display: none;
        }

        button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 35px;
          color: white;
          background-color: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          width: 1em;
          height: 1em;

          @media screen and (min-width: 768px) {
            font-size: 45px;
          }

          span {
            position: absolute;
            display: flex;
            transition: opacity 0.4s ease-in-out;
          }

          .icono-menu {
            opacity: 1;
          }
          .icono-close {
            opacity: 0;
          }

          &.open {
            .icono-menu {
              opacity: 0;
            }
            .icono-close {
              opacity: 1;
            }
          }
        }
      }

      .main-menu {
        display: flex;
        align-items: center;
        position: absolute;
        top: 80px;
        left: 200vw;
        width: 100vw;
        height: calc(100vh - 90px);
        transition: all 0.4s ease-in-out;
        background-color: rgba(17, 1, 31, 0.9);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        padding: none;
        &.open {
          left: 0;
        }
        @media screen and (min-width: 768px) {
          height: calc(100vh - 110px);
          top: 110px;
          width: 50vw;
          &.open {
            left: 50vw;
          }
        }

        @media screen and (min-width: 999px) {
          position: unset;
          top: unset;
          left: unset;
          width: 60vw;
          height: 100%;
          background-color: transparent;
          backdrop-filter: unset;
          -webkit-backdrop-filter: unset;
        }

        ul {
          width: 100%;
          height: 90%;
          list-style: none;
          padding: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          margin: 0;
          @media screen and (min-width: 768px) {
            height: 70%;
          }
          @media screen and (min-width: 999px) {
            flex-direction: row;
          }
          li {
            width: auto;
            text-align: center;
            a {
              text-decoration: none;
              color: white;
              font-size: 20px;
              font-weight: 600;
              @media screen and (min-width: 768px) {
                font-size: 25px;
              }
              @media screen and (min-width: 999px) {
                font-size: 1.2vw;
                transition: all 0.4s ease-in-out;
                border-bottom: 2px solid transparent;

                &:hover {
                  border-bottom: 4px solid #51158c;
                  padding-bottom: 4px;
                  color: #e5cffa;
                }
              }
            }
          }
        }
      }
    }
  `,
];
