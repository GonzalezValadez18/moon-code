import { LitElement, css, html } from "lit";

import { homePageStyles } from "./home-page.css";

import "../../sections/hero-section/hero-section";
import "../../sections/text-section/text-section";

import "../../components/app-title/app-title";
import "../../components/app-cards-link/app-card-link";
import "../../components/app-timeline/app-timeline";

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
      <app-title line-color="#5f15b3" line-align="right" text="Más que desarrollo, construimos experiencias digitales"></app-title>
      <text-section>
        Cada proyecto se desarrolla con un enfoque en rendimiento, escalabilidad y diseño moderno. Creamos sitios web rápidos, aplicaciones móviles intuitivas, plataformas personalizadas y videojuegos básicos que ayudan a empresas y emprendedores a destacar en el entorno digital.
      </text-section>
      <app-title line-color="#00aef0" line-align="left" text="Lo más popular"></app-title>
      <app-card-link data="/public/data/cards-servicios.json"></app-card-link>
      <app-title line-color="#048872" line-align="right" text="Asi creamos la magia"></app-title>
      <app-timeline data="/public/data/timeline.json"></app-timeline>
    `;
  }
}

customElements.define(HomePage.is, HomePage);
