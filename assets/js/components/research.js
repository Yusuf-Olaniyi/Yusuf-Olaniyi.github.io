import { esc, sectionHead, linkList, moreLink } from "../util.js";

const KIND = { research: "Research", course: "Course project" };
const tags = (list = []) => `<ul class="tags">${list.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>`;
const figure = (f) => {
  if (!f) return "";
  const vars = [f.width && `--figure-width:${esc(f.width)}`, f.ratio && `--figure-ratio:${esc(f.ratio)}`].filter(Boolean).join(";");
  return `<figure class="figure"${vars ? ` style="${vars}"` : ""}><img src="${esc(f.src)}" alt="${esc(f.alt)}" loading="lazy">${f.caption ? `<figcaption>${esc(f.caption)}</figcaption>` : ""}</figure>`;
};
// Featured layout: one tall card (with its figure) beside stacked cards.
function cards(items) {
  return `<div class="cards">${items
    .map(
      (r, i) => `
      <article class="card${i === 0 ? " card--tall" : ""}">
        <p class="card__label">${esc(KIND[r.kind] || r.kind)} · ${esc(r.period)}</p>
        <h3 class="card__title">${esc(r.title)}</h3>
        <p class="card__people">${esc(r.role)}</p>
        <p class="card__summary">${esc(r.summary)}</p>
        ${tags(r.tags)}
        ${linkList(r.links, "arrow-links")}
        ${i === 0 ? figure(r.figure) : ""}
      </article>`
    )
    .join("")}</div>`;
}

// List layout (Research page): every entry with its figure.
function list(items) {
  return `<ul class="entries">${items
    .map(
      (r) => `
      <li class="entry">
        <div class="entry__meta">
          <span class="badge badge--${esc(r.kind)}">${esc(KIND[r.kind] || r.kind)}</span>
          <span class="entry__period">${esc(r.period)}</span>
          <span class="entry__where">${esc(r.where)}</span>
        </div>
        <div class="entry__body">
          <h3 class="entry__title">${esc(r.title)}</h3>
          <p class="entry__role">${esc(r.role)}</p>
          <p class="entry__summary">${esc(r.summary)}</p>
          ${figure(r.figure)}
          ${tags(r.tags)}
          ${linkList(r.links)}
        </div>
      </li>`
    )
    .join("")}</ul>`;
}

// Home:     <section id="research" data-component="research" data-featured="true" data-eyebrow="…" data-title="…" data-more="true">
// Research: <section data-component="research" data-status="ongoing" data-title="Ongoing">
export function research(site, ds = {}) {
  let items = site.research;
  if (ds.status) items = items.filter((i) => i.status === ds.status);
  if (ds.featured === "true") items = items.filter((i) => i.featured);
  if (!items.length) return "";
  return `
    <div class="container">
      ${sectionHead(ds)}
      ${ds.featured === "true" ? cards(items) : list(items)}
      ${ds.more === "true" ? moreLink("research.html", "All research and projects") : ""}
    </div>`;
}
