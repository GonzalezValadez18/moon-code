import { LitElement, html } from "lit";

import { icons } from "/public/icons/icons.js";

import { appTimeLineStyles } from "./app-timeline.css";

import { observeVisibility } from "../../global/observe-visibility.js";

export class AppTimeLine extends LitElement {
  static styles = appTimeLineStyles;
  static get is() {
    return "app-timeline";
  }
  static get properties() {
    return {
      data: { type: String },
      items: { state: true },
    };
  }

  constructor() {
    super();
    this.data = "";
    this.items = [];
  }

  async updated(changedProps) {
    if (changedProps.has("data") && this.data) {
      try {
        const response = await fetch(this.data);
        this.items = await response.json();
      } catch (error) {
        console.error("Error cargando timeline:", error);
        this.items = [];
      }
    }
  }
  firstUpdated() {
    observeVisibility(this.renderRoot.querySelectorAll(".line, video"), "is-into");
  }
  render() {
    return html`
      <section class="app-timeline">
        <div class="items">
          <span class="line"></span>
          ${this.items.map(
            (item) => html`
              <div class="item">
                <span class="dot">${icons[item.icon]}</span>

                <section class="info">
                  <p class="title">${item.subtitle}</p>
                  <p class="content">${item.content}</p>
                </section>
              </div>
            `,
          )}
        </div>
        <video class="hero-background" autoplay loop muted playsinline>
          <source src="/img/banners/banner-hero-main.webm" type="video/webm" />
          <source src="/public/videos/scrum-2.mp4" type="video/mp4" />
          Tu navegador no soporta videos
        </video>
      </section>
    `;
  }
}

customElements.define(AppTimeLine.is, AppTimeLine);
