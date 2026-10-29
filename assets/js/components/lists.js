import { esc, sectionHead } from "../util.js";

export function honors(site, ds = {}) {
  return `
    <div class="container">
      ${sectionHead(ds)}
      <ul class="honors">${site.honors.map((h) => `<li><span class="honors__year">${esc(h.year)}</span><span>${esc(h.text)}</span></li>`).join("")}</ul>
    </div>`;
}

export function skills(site, ds = {}) {
  return `
    <div class="container">
      ${sectionHead(ds)}
      <dl class="skills">${site.skills.map((s) => `<div><dt>${esc(s.group)}</dt><dd>${esc(s.items)}</dd></div>`).join("")}</dl>
    </div>`;
}
