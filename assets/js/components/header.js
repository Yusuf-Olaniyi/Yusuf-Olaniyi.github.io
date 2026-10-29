import { esc } from "../util.js";

/* Tabs scroll to home-page sections. On the Research and Experience pages the matching
   tab is the current page, and the other tabs link back to the home sections. */
export function header(site) {
  const page = document.body.dataset.page;
  const onHome = page === "home";
  const tabHref = (id) => (page === id ? `${id}.html` : onHome ? `#${id}` : `index.html#${id}`);
  const initials = site.name.split(" ").map((w) => w[0]).join("").slice(0, 2);

  const tabs = site.nav
    .map((n) => `<a href="${esc(tabHref(n.id))}"${page === n.id ? ' aria-current="page"' : ""}>${esc(n.label)}</a>`)
    .join("");

  return `
    <div class="container site-header__inner">
      <a class="brand" href="${onHome ? "#top" : "index.html"}">
        <span class="brand__mark" aria-hidden="true">${esc(initials)}</span>
        <span>${esc(site.name)}</span>
      </a>
      <nav class="nav__tabs" aria-label="Sections">${tabs}</nav>
      <div class="nav__actions">
        <button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch between light and dark theme">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor"/>
          </svg>
        </button>
        <a class="button button--ghost button--small" href="${esc(site.cv)}" download>CV</a>
        <a class="button button--small" href="#contact">Contact</a>
      </div>
    </div>`;
}
