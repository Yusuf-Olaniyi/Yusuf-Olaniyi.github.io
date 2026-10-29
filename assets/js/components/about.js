import { esc, rich, accent, sectionHead } from "../util.js";
import { loop } from "./loop.js";

// Portrait + bio on top; below, a panel with your guiding questions beside the closed-loop graphic.
export function about(site, ds = {}) {
  const a = site.about;
  const links = [
    `<a class="button button--ghost" href="${esc(site.cv)}" download>Download CV</a>`,
    ...site.social.filter((s) => s.href).map((s) => `<a class="button button--ghost" href="${esc(s.href)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a>`),
  ].join("");

  const portrait = a.portrait
    ? `<figure class="portrait">
         <img src="${esc(a.portrait.src)}" alt="${esc(a.portrait.alt)}">
         <figcaption><span>${esc(site.name)}</span><span>${esc(site.location)}</span></figcaption>
       </figure>`
    : "";

  return `
    <div class="container">
      <div class="about${a.portrait ? "" : " about--solo"}">
        ${portrait}
        <div>
          <p class="eyebrow">${esc(ds.eyebrow || "01 · About")}</p>
          <h2 class="about__title">${accent(a.headline)}</h2>
          <div class="about__bio">${a.bio.map((p) => `<p>${rich(p)}</p>`).join("")}</div>
          <div class="pills">${links}</div>
        </div>
      </div>
    </div>
  `;
}
