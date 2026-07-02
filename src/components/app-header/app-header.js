import { LitElement, html } from "lit";

import { icons } from "/public/icons/icons.js";

import { appHeaderStyles } from "./app-header.css";

export class AppHeader extends LitElement {
  static styles = appHeaderStyles;
  static get is() {
    return "app-header";
  }
  static get properties() {
    return {
      _hamburguerOpen: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this._hamburguerOpen = false;
  }

  _toggleHamburguer() {
    this._hamburguerOpen = !this._hamburguerOpen;
  }

  render() {
    return html`
      <div class="header-space"></div>
      <header>
        <div class="logo-container">
          <a href="/" aria-label="Ir al inicio">
            <picture>
              <source media="(max-width: 999px)" srcset="/logos/moon-code-logotipo-w.webp" />
              <img src="/logos/moon-code-imagotipo-w.webp" alt="Moon Code - Transformando necesidades en soluciones tecnológicas" />
            </picture>
          </a>
        </div>

        <nav class="main-menu ${this._hamburguerOpen ? "open" : ""}">
          <ul>
            <li><a href="">Tu Web en 3 dias</a></li>
            <li><a href="">Servicios</a></li>
            <li><a href="">Contacto</a></li>
            <li><a href="">Conocenos</a></li>
            <li><a href="">Blog</a></li>
          </ul>
        </nav>

        <div class="hamburguer-container">
          <button aria-label=${this._hamburguerOpen ? "Cerrar menú" : "Abrir menú"} @click=${this._toggleHamburguer} class=${this._hamburguerOpen ? "open" : ""}>
            <span class="icono-menu">${icons.menu}</span>
            <span class="icono-close">${icons.close}</span>
          </button>
        </div>
      </header>
    `;
  }
}

customElements.define(AppHeader.is, AppHeader);
