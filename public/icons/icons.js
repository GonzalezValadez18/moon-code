import { html } from "lit";

export const icons = {
  menu: html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" aria-hidden="true">
      <path d="M4 7H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M7 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
  `,
  close: html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" aria-hidden="true">
      <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
  `,
  arrowRight: html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" aria-hidden="true">
      <path d="M6 12H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M11 9L14 12L11 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,
};
