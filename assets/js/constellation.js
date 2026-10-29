// Drifting network behind the hero. Two node colours (--accent, --accent-2) follow the theme.
export function initConstellation(canvas) {
  const ctx = canvas.getContext("2d");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const LINK = 150;

  let w = 0, h = 0, nodes = [], edges = [], pulses = [];
  let c1 = "#8ab4ff", c2 = "#5fd3c4", raf = 0, visible = false;

  function readColors() {
    const s = getComputedStyle(document.documentElement);
    c1 = s.getPropertyValue("--accent").trim() || c1;
    c2 = s.getPropertyValue("--accent-2").trim() || c2;
    if (!raf) draw();
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(24, Math.min(80, Math.round((w * h) / 16000)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
      alt: Math.random() < 0.3, r: 1.2 + Math.random() * 1.6,
    }));
    pulses = [];
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = c1; ctx.lineWidth = 1;
    edges = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
        if (d >= LINK) continue;
        ctx.globalAlpha = (1 - d / LINK) * 0.28;
        ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke();
        edges.push([i, j]);
      }
    }
    for (const n of nodes) {
      ctx.globalAlpha = 0.7; ctx.fillStyle = n.alt ? c2 : c1;
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = c2;
    for (const p of pulses) {
      const a = nodes[p.a], b = nodes[p.b];
      ctx.globalAlpha = 1 - Math.abs(p.t - 0.5);
      ctx.beginPath(); ctx.arc(a.x + (b.x - a.x) * p.t, a.y + (b.y - a.y) * p.t, 2.6, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function step() {
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }
    if (edges.length && pulses.length < 7 && Math.random() < 0.04) {
      const [a, b] = edges[Math.floor(Math.random() * edges.length)];
      pulses.push({ a, b, t: 0 });
    }
    pulses.forEach((p) => (p.t += 0.014));
    pulses = pulses.filter((p) => p.t < 1);
    draw();
    raf = requestAnimationFrame(step);
  }

  const start = () => { if (!raf && visible && !reduced && !document.hidden) raf = requestAnimationFrame(step); };
  const stop = () => { cancelAnimationFrame(raf); raf = 0; };

  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? start() : stop(); }).observe(canvas);
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  new MutationObserver(readColors).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  matchMedia("(prefers-color-scheme: light)").addEventListener("change", readColors);
  readColors();
}
