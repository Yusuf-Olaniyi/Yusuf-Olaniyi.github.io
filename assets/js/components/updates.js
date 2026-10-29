import { esc, link, sectionHead } from "../util.js";

const KIND = { news: "News", note: "Note" };
const fmt = new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" });
const parse = (d) => new Date(d.length === 7 ? `${d}-01` : d);

// <section id="updates" data-component="updates" data-eyebrow="05 · Updates" data-title="News and notes">
export function updates(site, ds = {}) {
  const items = [...site.updates].sort((a, b) => parse(b.date) - parse(a.date));
  if (!items.length) return "";
  const rows = items
    .map(
      (u) => `
      <li class="entry entry--compact">
        <div class="entry__meta"><span class="entry__period">${esc(fmt.format(parse(u.date)))}</span></div>
        <div class="entry__body">
          <span class="badge badge--${esc(u.kind)}">${esc(KIND[u.kind] || u.kind)}</span>
          <h3 class="entry__title entry__title--small">${u.href ? link(u.href, u.title) : esc(u.title)}</h3>
          <p class="entry__summary">${esc(u.text)}</p>
        </div>
      </li>`
    )
    .join("");
  return `<div class="container">${sectionHead(ds)}<ul class="entries">${rows}</ul></div>`;
}
