import { esc, accent } from "../util.js";

export function hero(site) {
  const { headline, aside, intro } = site.hero;
  return `
    <canvas class="hero__canvas" aria-hidden="true"></canvas>
    <div class="container hero__inner">
      <h1 class="hero__title">${accent(headline)}${aside ? `<span class="hero__aside">(${esc(aside)})</span>` : ""}</h1>
      <p class="hero__intro">${esc(intro)}</p>
      <div class="hero__actions">
        <a class="button button--large" href="#research">Explore research <span aria-hidden="true">→</span></a>
        <a class="button button--ghost button--large" href="${esc(site.cv)}" download>Download CV</a>
      </div>
      <a class="hero__scroll" href="#about">Scroll</a>
    </div>`;
}
