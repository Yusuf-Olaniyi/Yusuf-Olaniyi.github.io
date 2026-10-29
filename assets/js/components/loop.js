import { esc } from "../util.js";

/* The closed loop: sense → assess → update twin → decide → sense.
   Pure SVG, coloured by theme tokens. Pulses travel the ring; a halo lights each node in turn. */
const RING = "M280 70 A140 110 0 0 1 420 180 A140 110 0 0 1 280 290 A140 110 0 0 1 140 180 A140 110 0 0 1 280 70Z";
const NODES = [
  { x: 280, y: 70, lx: 280, ly: 46, anchor: "middle" },
  { x: 420, y: 180, lx: 440, ly: 187, anchor: "start" },
  { x: 280, y: 290, lx: 280, ly: 328, anchor: "middle" },
  { x: 140, y: 180, lx: 120, ly: 187, anchor: "end" },
];
const DURATION = 14;

export function loop(site) {
  const steps = site.loop;
  const nodes = NODES.map(
    (n, i) => `
      <circle class="loop__halo" cx="${n.x}" cy="${n.y}" r="7" style="--d:${(i * DURATION) / 4}s"/>
      <circle class="loop__node" cx="${n.x}" cy="${n.y}" r="7"/>
      <text class="loop__label" x="${n.lx}" y="${n.ly}" text-anchor="${n.anchor}">${esc(steps[i].label)}</text>`
  ).join("");

  const pulse = (r, begin, cls) =>
    `<circle class="loop__pulse ${cls}" r="${r}"><animateMotion dur="${DURATION}s" begin="${begin}s" repeatCount="indefinite" path="${RING}"/></circle>`;

  const legend = steps.map((s) => `<li><strong>${esc(s.label)}</strong> <span>${esc(s.text)}</span></li>`).join("");

  return `
    <figure class="loop">
      <svg viewBox="0 0 560 360" role="img" aria-label="A closed loop: ${steps.map((s) => esc(s.label)).join(", ")}, then back to the start.">
        <path class="loop__ring" d="${RING}"/>
        ${nodes}
        ${pulse(5, 0, "")}
        ${pulse(3, -DURATION / 3, "loop__pulse--faint")}
        ${pulse(3, (-2 * DURATION) / 3, "loop__pulse--faint")}
      </svg>
      <figcaption><ol class="loop__legend">${legend}</ol></figcaption>
    </figure>`;
}

// With reduced motion the pulses are removed and the ring stays as a still diagram.
export function initLoop() {
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".loop__pulse").forEach((el) => el.remove());
}
