import { esc } from "../util.js";

// A slow marquee of institutions. Text names by default; set `logo` in config to show a logo.
export function affiliations(site) {
  const chip = (a) => `<li class="affiliation">${a.logo ? `<img src="${esc(a.logo)}" alt="${esc(a.name)}">` : esc(a.name)}</li>`;
  const set = site.affiliations.map(chip).join("");
  return `
    <div class="container"><p class="affiliations__label">Affiliated with</p></div>
    <div class="marquee">
      <div class="marquee__track">
        <ul>${set}</ul>
        <ul aria-hidden="true">${set}</ul>
        <ul aria-hidden="true">${set}</ul>
        <ul aria-hidden="true">${set}</ul>
      </div>
    </div>`;
}
