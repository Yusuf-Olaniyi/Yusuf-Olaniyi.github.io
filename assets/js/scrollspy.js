// Highlights the header tab for the section you are reading (home page only).
export function initScrollSpy() {
  const tabs = [...document.querySelectorAll('.nav__tabs a[href^="#"]')];
  if (!tabs.length) return;
  const byId = new Map(tabs.map((a) => [a.getAttribute("href").slice(1), a]));

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        tabs.forEach((a) => a.removeAttribute("aria-current"));
        byId.get(entry.target.id)?.setAttribute("aria-current", "true");
      }
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));
}
