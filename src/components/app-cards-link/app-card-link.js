import { LitElement, html } from "lit";

import { icons } from "/public/icons/icons.js";
import { appCardLinkStyles } from "./app-cards-link.css.js";

import { observeVisibility } from "../../global/observe-visibility.js";

export class AppCardLink extends LitElement {
  static styles = appCardLinkStyles;

  static get is() {
    return "app-card-link";
  }

  static get properties() {
    return {
      data: { type: String },
      cards: { type: Array, state: true },
    };
  }

  constructor() {
    super();
    this.data = "";
    this.cards = [];
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.data) {
      this._loadCards();
    }
  }

  updated(changedProperties) {
    if (changedProperties.has("data") && this.data) {
      this._loadCards();
    }
  }

  async _loadCards() {
    try {
      const response = await fetch(this.data);

      if (!response.ok) {
        throw new Error(`Error al cargar el JSON: ${response.status}`);
      }

      this.cards = await response.json();
    } catch (error) {
      console.error(error);
      this.cards = [];
    }
  }
  firstUpdated() {
    observeVisibility(this.renderRoot.querySelectorAll(".cards-link"), "is-into");
  }
  render() {
    return html`
      <div class="cards-link">
        <div class="wrapper">
          ${this.cards.map(
            (card) => html`
              <article class="card">
                <img src="${card.image}" alt="${card.alt || card.title}" />

                <div class="card-content">
                  <p class="tag">${card.tag}</p>
                  <h3 class="title">${card.title}</h3>
                  <p class="description">${card.description}</p>

                  <a href="${card.url}" class="link">
                    <span class="link-text">${card.buttonText}</span>
                    <span class="link-icon">${icons.arrowRight}</span>
                  </a>
                </div>
              </article>
            `,
          )}
        </div>
      </div>
    `;
  }
}

customElements.define(AppCardLink.is, AppCardLink);
