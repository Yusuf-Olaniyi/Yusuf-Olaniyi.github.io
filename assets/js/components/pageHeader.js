import { esc, accent } from "../util.js";

// <section data-component="page-header" data-eyebrow="Research" data-title="Ongoing {work}" data-lead="…">
export function pageHeader(_site, { eyebrow = "", title = "", lead = "" } = {}) {
  return `
    <div class="container page-header">
      <a class="page-header__back" href="index.html">← Home</a>
      ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}
      <h1 class="page-header__title">${accent(title)}</h1>
      ${lead ? `<p class="page-header__lead">${esc(lead)}</p>` : ""}
    </div>`;
}
