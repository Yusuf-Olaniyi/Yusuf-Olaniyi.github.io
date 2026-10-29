// Escape any text before putting it into an HTML string.
export const esc = (value = "") =>
  String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Light markup for content strings:  **bold**  and  {italic accent word}
export const rich = (text = "") => esc(text).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
export const accent = (text = "") => esc(text).replace(/\{(.+?)\}/g, '<em class="accent">$1</em>');

const isExternal = (href) => /^https?:\/\//.test(href);

// Build an <a>; external links open safely in a new tab.
export const link = (href, label, cls = "") =>
  `<a${cls ? ` class="${esc(cls)}"` : ""} href="${esc(href)}"${
    isExternal(href) ? ' target="_blank" rel="noopener noreferrer"' : ""
  }>${esc(label)}</a>`;

// A row of links; entries with an empty href are skipped, so unfinished links never show.
export const linkList = (links = [], cls = "inline-links") => {
  const live = links.filter((l) => l.href);
  return live.length ? `<ul class="${cls}">${live.map((l) => `<li>${link(l.href, l.label)}</li>`).join("")}</ul>` : "";
};

// Pill button under a section.
export const moreLink = (href, label) =>
  `<p class="section__more"><a class="button button--ghost" href="${esc(href)}">${esc(label)} <span aria-hidden="true">→</span></a></p>`;

// Eyebrow + title + lead used at the top of every section. Pass via data-eyebrow, data-title, data-lead.
export const sectionHead = ({ eyebrow, title, lead } = {}) =>
  `${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}${title ? `<h2 class="section__title">${accent(title)}</h2>` : ""}${
    lead ? `<p class="section__lead">${esc(lead)}</p>` : ""
  }`;
