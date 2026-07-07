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
  meeting: html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" aria-hidden="true">
      <path d="M4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 4v-4H6a2 2 0 0 1-2-2V6Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
      <path d="M18 8h2a2 2 0 0 1 2 2v8l-3-2h-1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,
  planning: html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" stroke-width="2" />
      <path d="M8 3V7M16 3V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M4 9H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M9 13H11M13 13H15M9 17H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
  `,
  design: html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" aria-hidden="true">
      <path d="M4 20L8 19L18 9L15 6L5 16L4 20Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
      <path d="M13 5L16 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M19 3L21 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
  `,
  development: html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" aria-hidden="true">
      <path d="M9 8L5 12L9 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15 8L19 12L15 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M13 5L11 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
  `,
  testing: html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" aria-hidden="true">
      <path d="M10 3H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M12 3V9L17.5 18.5A1.5 1.5 0 0 1 16.2 21H7.8A1.5 1.5 0 0 1 6.5 18.5L12 9" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
      <path d="M9 14H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
  `,
  launch: html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" aria-hidden="true">
      <path d="M12 3C15.5 4.5 18 8 18 12.5C18 16 16 19 12 21C8 19 6 16 6 12.5C6 8 8.5 4.5 12 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
      <circle cx="12" cy="10" r="2" stroke="currentColor" stroke-width="2" />
      <path d="M8 15L4 18V13L7 12" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
      <path d="M16 15L20 18V13L17 12" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
      <path d="M10 20L9 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M14 20L15 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
  `,
};
