import { LitElement, html } from "lit";

import { icons } from "/public/icons/icons.js";

import { appTitleStyles } from "./app-title.css";

import { observeVisibility } from "../../global/observe-visibility.js";

export class AppTitle extends LitElement {
  static styles = appTitleStyles;
  static get is() {
    return "app-title";
  }
  static get properties() {
    return {
      lineColor: { type: String, attribute: "line-color" },
      lineAlign: { type: String, attribute: "line-align" },
    };
  }

  constructor() {
    super();
    this.lineColor = "#00aef0";
    this.lineAlign = "left";
  }
  firstUpdated() {
    observeVisibility(this.renderRoot.querySelectorAll(".line, h3"), "is-into");
  }
  render() {
    const alignment = this.lineAlign === "right" ? "right" : "left";
    const lineStyle = `background-color: ${this.lineColor};`;

    return html`
      <div class="app-title">
        <i class="line ${alignment}" style="${lineStyle}"></i>
        <h3>Lo más popular</h3>
      </div>
    `;
  }
}

customElements.define(AppTitle.is, AppTitle);
