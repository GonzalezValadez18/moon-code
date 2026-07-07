import { LitElement, html } from "lit";

import { icons } from "/public/icons/icons.js";

import { sectionTextStyles } from "./text-section.css.js";

import { observeVisibility } from "../../global/observe-visibility.js";

export class TextSection extends LitElement {
  static styles = sectionTextStyles;

  static get is() {
    return "text-section";
  }

  static get properties() {
      return {
        text: { type: String, attribute: "text" },
    };
  }

  constructor() {
    super();
  }

  firstUpdated() {
    observeVisibility(this.renderRoot.querySelectorAll(".text-section"), "is-into");
  }

  render() {
    return html`
      <section class="text-section">
        <slot></slot>
      </section>
    `;
  }
}

customElements.define(TextSection.is, TextSection);
