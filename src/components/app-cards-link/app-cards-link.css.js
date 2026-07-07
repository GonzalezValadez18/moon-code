import { css } from "lit";

import { resetStyles } from "../../styles/reset.css.js";

export const appCardLinkStyles = [
  resetStyles,
  css`
    .cards-link {
      width: calc(100vw - 40px);
      padding-top: 30px;
      padding-bottom: 30px;
      display: flex;
      justify-content: start;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: row;
      margin: auto;
      overflow: scroll;
      overflow-y: hidden;
      scrollbar-width: none;
      -ms-overflow-style: none;
      opacity: 0;
      transition: opacity 1s ease-in-out;
      transition-delay: 0.2s;

      &.is-into {
        opacity: 1;
      }

      &::-webkit-scrollbar {
        display: none;
      }

      @media (min-width: 768px) {
        width: calc(100vw - 140px);
      }

      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: fit-content;

        .card {
          width: calc(100vw - 40px);
          background-color: #070a15;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.09);
          overflow: hidden;
          @media (min-width: 768px) {
            width: calc((100vw - 160px) / 2);
          }

          @media (min-width: 999px) {
            width: calc((100vw - 200px) / 4);
            transition: all 0.3s ease-in-out;
            &:hover {
              box-shadow: 0 0 60px rgba(255, 255, 255, 0.09);
              img {
                transform: scale(1.1);
              }
            }
          }
          img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            @media (min-width: 999px) {
              height: auto;
              transition: all 1s ease-in-out;
            }
          }
          .card-content {
            padding: 15px;
            padding-bottom: 30px;
            .tag {
              width: fit-content;
              font-size: 15px;
              color: #00aef0;
              margin-bottom: 5px;
              border: 2px solid #00aef0;
              padding: 5px 10px;
              @media (min-width: 999px) {
                font-size: 20px;
              }
            }
            .title {
              font-size: 18px;
              color: #f6eefc;
              margin-bottom: 10px;
              @media (min-width: 999px) {
                font-size: 23px;
              }
            }
            .description {
              font-size: 15px;
              color: #f6eefc;
              margin-bottom: 15px;
              @media (min-width: 999px) {
                font-size: 19px;
              }
            }
            .link {
              display: flex;
              align-items: center;
              text-decoration: none;
              color: #b365fc;

              @media (min-width: 999px) {
                transition: all 0.3s ease-in-out;
                width: fit-content;
                &:hover {
                  color: #8136c7;
                  .link-icon {
                    transform: translateX(5px);
                  }
                }
              }

              .link-text {
                margin-right: 5px;
                font-size: 15px;
                font-weight: bold;
                margin-bottom: 10px;
                margin-top: 10px;
                @media (min-width: 999px) {
                  font-size: 20px;
                }
              }
              .link-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 26px;
                @media (min-width: 999px) {
                  font-size: 34px;
                  transition: all 0.3s ease-in-out;
                }
              }
            }
          }
        }
      }
    }
  `,
];
