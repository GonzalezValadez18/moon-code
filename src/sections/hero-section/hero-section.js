import { LitElement, html } from "lit";

import { icons } from "/public/icons/icons.js";

import { sectionHeroStyles } from "./hero-section.css";

import { observeVisibility } from "../../global/observe-visibility.js";

export class HeroSection extends LitElement {
  static styles = sectionHeroStyles;

  static get is() {
    return "hero-section";
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  firstUpdated() {
    observeVisibility(this.renderRoot.querySelectorAll(".hero-overlay, .hero-background"), "is-into");
  }

  render() {
    return html`
      <section class="hero-section">
        <video class="hero-background" autoplay loop muted playsinline>
          <source src="/img/banners/banner-hero-main.webm" type="video/webm" />
          <source src="/public/videos/impulso-tu-negocio-L.mp4" type="video/mp4" />
          Tu navegador no soporta videos
        </video>
        <article class="hero-overlay">
          <div class="hero-text">
            <p class="hero-title">Te urge la presencia online</p>
            <p class="hero-description">No esperes mas cotiza hoy y recibe tu web en tres dias.</p>
          </div>
          <div class="hero-cta">
            <a href="/conocenos" class="primary-button">Conocer Mas</a>
            <a href="/contact" class="secondary-button">Contactanos</a>
          </div>
        </article>
      </section>
    `;
  }
}

customElements.define(HeroSection.is, HeroSection);
