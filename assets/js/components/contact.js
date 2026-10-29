import { esc, accent, link } from "../util.js";

export function contact(site) {
  const c = site.contact;
  const pills = [
    `<a class="button" href="mailto:${esc(site.email)}">Email me</a>`,
    `<a class="button button--ghost" href="${esc(site.cv)}" download>Download CV</a>`,
    ...site.social.filter((s) => s.href).map((s) => link(s.href, s.label, "button button--ghost")),
  ].join("");
  return `
    <div class="container contact">
      <p class="eyebrow eyebrow--center">${esc(c.eyebrow)}</p>
      <h2 class="contact__title">${accent(c.title)}</h2>
      <p class="contact__text">${esc(c.text)}</p>
      <div class="pills pills--center">${pills}</div>
    </div>`;
}
