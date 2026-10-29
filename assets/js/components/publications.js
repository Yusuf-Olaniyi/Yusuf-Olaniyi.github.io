import { esc, sectionHead, linkList } from "../util.js";

// <section id="publications" data-component="publications" data-eyebrow="03 · Publications" data-title="Publications and talks">
export function publications(site, ds = {}) {
  if (!site.publications.length) return "";
  const rows = site.publications
    .map(
      (p) => `
      <li class="entry entry--compact">
        <div class="entry__meta"><span class="entry__period">${esc(p.year)}</span></div>
        <div class="entry__body">
          <span class="badge">${esc(p.label)}</span>
          <h3 class="entry__title entry__title--small">${esc(p.title)}</h3>
          <p class="entry__role">${esc(p.venue)}${p.note ? ` · ${esc(p.note)}` : ""}</p>
          ${linkList(p.links)}
        </div>
      </li>`
    )
    .join("");
  return `<div class="container">${sectionHead(ds)}<ul class="entries">${rows}</ul></div>`;
}
