import { esc, sectionHead, moreLink } from "../util.js";

// Expandable rows built on <details>, so they work with the keyboard and without extra JavaScript.
const CHEVRON = `<svg class="row__chevron" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="m7 4 5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function accordion(entries, ds) {
  if (!entries.length) return "";
  const rows = entries
    .map(
      (e, i) => `
      <li>
        <details class="row"${ds.open === "first" && i === 0 ? " open" : ""}>
          <summary>
            <span class="row__period">${esc(e.period)}</span>
            <span class="row__title">${esc(e.title)} <span class="row__org">· ${esc(e.org)}</span></span>
            ${CHEVRON}
          </summary>
          <div class="row__panel">
            ${e.summary ? `<p>${esc(e.summary)}</p>` : ""}
            ${e.highlights ? `<ul class="row__highlights">${e.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
            ${e.tags ? `<ul class="tags">${e.tags.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>` : ""}
          </div>
        </details>
      </li>`
    )
    .join("");
  return `
    <div class="container">
      ${sectionHead(ds)}
      <ul class="accordion">${rows}</ul>
      ${ds.more === "true" ? moreLink("experience.html", "Full experience and education") : ""}
    </div>`;
}

// data-featured="true" shows only entries marked featured (Home). data-open="first" opens the first row.
export const experience = (site, ds = {}) => accordion(ds.featured === "true" ? site.experience.filter((e) => e.featured) : site.experience, ds);
export const education = (site, ds = {}) => accordion(site.education, ds);
export const leadership = (site, ds = {}) => accordion(site.leadership, ds);
