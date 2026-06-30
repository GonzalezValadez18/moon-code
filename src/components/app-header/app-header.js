import { LitElement, html } from "lit";
import { appHeaderStyles } from "./app-header.css";

export class AppHeader extends LitElement {
  static styles = appHeaderStyles;
  static get is() {
    return "app-header";
  }
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html` <h2>Hola</h2>`;
  }
}

customElements.define(AppHeader.is, AppHeader);
