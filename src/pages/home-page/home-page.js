import { LitElement, css, html } from "lit";

import { homePageStyles } from "./home-page.css";
import litLogo from "../../assets/lit.svg";
import viteLogo from "../../assets/vite.svg";
import heroImg from "../../assets/hero.png";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class HomePage extends LitElement {
  static get properties() {
    return {
      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`
      <section id="center">
        <div class="hero">
          <img src=${heroImg} class="base" width="170" height="179" alt="" />
          <img src=${litLogo} class="framework" alt="Lit logo" />
          <img src=${viteLogo} class="vite" alt="Vite logo" />
        </div>
        <div>
          <slot></slot>
          <p>
            Edit <code>src/my-element.js</code> and save to test
            <code>HMR</code>
          </p>
        </div>
        <button type="button" class="counter" @click=${this._onClick} part="button">Count is ${this.count}</button>
      </section>

      <div class="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg class="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img class="logo" src=${viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://lit.dev/" target="_blank">
                <img class="button-icon" src=${litLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg class="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg class="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg class="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg class="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg class="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div class="ticks"></div>
      <section id="spacer"></section>
    `;
  }

  _onClick() {
    this.count++;
  }

  static styles = homePageStyles;

  static get is() {
    return "home-page";
  }
}

customElements.define(HomePage.is, HomePage);
