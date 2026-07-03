import { LitElement, css, html } from "lit";

import { homePageStyles } from "./home-page.css";

import "../../sections/hero-section/hero-section";
import "../../components/app-title/app-title";

import "../../components/app-cards-link/app-card-link";

export class HomePage extends LitElement {
  static styles = homePageStyles;

  static get is() {
    return "home-page";
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <hero-section></hero-section>
      <app-title line-color="#00aef0" line-align="left"></app-title>
      <app-card-link data="/public/data/cards-servicios.json"></app-card-link>
    `;
  }
}

customElements.define(HomePage.is, HomePage);
