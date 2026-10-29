// Theme follows the system by default; the header toggle saves the visitor's choice.
const KEY = "theme";
const root = document.documentElement;
const systemTheme = () => (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

export function initTheme() {
  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-theme-toggle]")) return;
    const next = (root.dataset.theme || systemTheme()) === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem(KEY, next); } catch { /* storage unavailable: ignore */ }
  });
}
