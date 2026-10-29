import { esc, link } from "../util.js";

export function footer(site) {
  const links = [{ label: "Email", href: `mailto:${site.email}` }, ...site.social.filter((s) => s.href)]
    .map((s) => `<li>${link(s.href, s.label)}</li>`)
    .join("");
  return `
    <div class="container site-footer__inner">
      <span>© ${new Date().getFullYear()} ${esc(site.name)}</span>
      <ul>${links}</ul>
    </div>`;
}
