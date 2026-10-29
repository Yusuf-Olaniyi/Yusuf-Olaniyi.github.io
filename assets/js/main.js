/* ==========================================================
   MAIN — finds every [data-component="name"] on the page and
   fills it with the matching component. To add a component:
   1. create assets/js/components/<name>.js (returns an HTML string)
   2. import it below and add it to `registry`
   3. drop <section data-component="<name>"></section> into any page
   Extra data-* attributes on the element are passed to the component.
   ========================================================== */
import { site } from "./config.js";
import { initTheme } from "./theme.js";
import { initConstellation } from "./constellation.js";
import { initScrollSpy } from "./scrollspy.js";

import { header } from "./components/header.js";
import { footer } from "./components/footer.js";
import { hero } from "./components/hero.js";
import { affiliations } from "./components/affiliations.js";
import { about } from "./components/about.js";
import { initLoop } from "./components/loop.js";
import { research } from "./components/research.js";
import { publications } from "./components/publications.js";
import { updates } from "./components/updates.js";
import { experience, education, leadership } from "./components/accordion.js";
import { honors, skills } from "./components/lists.js";
import { contact } from "./components/contact.js";
import { pageHeader } from "./components/pageHeader.js";

const registry = {
  header, footer, hero, affiliations, about, research, publications, updates,
  experience, education, leadership, honors, skills, contact, "page-header": pageHeader,
};

initTheme();

document.querySelectorAll("[data-component]").forEach((el) => {
  const render = registry[el.dataset.component];
  if (!render) return console.warn(`Unknown component: ${el.dataset.component}`);
  el.innerHTML = render(site, el.dataset);
});

const canvas = document.querySelector(".hero__canvas");
if (canvas) initConstellation(canvas);
initLoop();
initScrollSpy();

// If the page was opened with #section, jump there now that content exists.
if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
