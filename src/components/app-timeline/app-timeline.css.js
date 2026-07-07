import { css } from "lit";

import { resetStyles } from "../../styles/reset.css.js";

export const appTimeLineStyles = [
  resetStyles,
  css`
    .app-timeline {
      position: relative;
      width: 100%;
      padding: 0 20px;

      @media screen and (min-width: 768px) {
        padding: 0 70px;
      }

      .line {
        top: 0;
        left: 35px;
        position: absolute;
        height: 100%;
        width: 5px;
        background-color: #6d0cdb;
        z-index: -1;
        @media screen and (min-width: 768px) {
          left: 90px;
        }
      }
      .items {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0;
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
            }
            .content {
              font-size: 1.3rem;
              margin: 0;
              margin-top: 20px;
              @media screen and (min-width: 768px) {
                font-size: 1.5rem;
              }
            }
          }
        }
      }
    }
  `,
];
