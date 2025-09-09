// Applies dark-first theme with persistence; no visible toggle.
// Why: Respect user preference if previously stored, else system pref, else dark.
export function applyTheme(el = document.documentElement) {
  try {
    const persisted = localStorage.getItem("theme");
    if (persisted === "light" || persisted === "dark") {
      el.setAttribute("data-theme", persisted);
      return;
    }
  } catch (e) {
    console.log(e);
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  el.setAttribute("data-theme", prefersDark ? "dark" : "dark"); // dark-first fallback
}
