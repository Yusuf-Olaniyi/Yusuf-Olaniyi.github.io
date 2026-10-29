# Yusuf Olaniyi: research portfolio

Static site with no framework and no build step. Deploys as-is to GitHub Pages.

**Structure:** one long home page (hero, About, Research, Publications, Experience, Updates, Contact)
whose header tabs scroll to each section, plus two deeper pages: `research.html` and `experience.html`.

## Run it locally

ES modules do not load from `file://`, so use any static server:

    npx serve .
    # or
    python3 -m http.server 8000


## How the modules fit together

Each page holds empty placeholders such as
`<section id="research" data-component="research" data-featured="true" data-title="Featured {research}">`.
`assets/js/main.js` finds them and fills each with the matching component, passing your
`config.js` data and the element's `data-*` attributes (eyebrow, title, lead, and so on).

- **Header tabs** come from `nav` in `config.js`. On Home they scroll to the section with the same `id`; the tab for the section you are reading is highlighted (`scrollspy.js`).
- **Add a section:** create `components/<name>.js` that returns an HTML string, register it in `main.js`, then add `<section id="<id>" data-component="<name>"></section>` to a page (and a `nav` entry if it should be a tab).
- **Add a page:** copy `research.html`, change `data-page`, `<title>` and the components.
- **Tags:** research entries use `kind: "research"` or `"course"`; the badge style is `.badge--research` in `components.css`.

## Deploy to GitHub Pages

Create a repo named `<username>.github.io`, push these files to `main`, and enable
Pages (Settings > Pages > Deploy from branch). Your site will be at `https://<username>.github.io`.

## Known trade-off

Content is rendered by JavaScript, so the raw HTML contains no text. Search engines
run JavaScript and generally index it, and readers see it normally, but if search
visibility matters later, move to a static site generator (Eleventy or Astro) and keep
the same components and CSS.
