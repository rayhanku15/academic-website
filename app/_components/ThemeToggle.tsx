"use client";

// Light and dark switch in the header. The site follows the visitor's device
// setting until they press this; their choice is then remembered in the browser.
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const current =
      root.getAttribute("data-theme") ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private windows can block storage. The switch still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      title="Light or dark theme"
      className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {/* Moon, shown in the light theme */}
      <svg className="only-light" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      {/* Sun, shown in the dark theme */}
      <svg className="only-dark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
