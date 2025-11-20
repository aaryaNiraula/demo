// Smooth scrolling for navbar links
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact Form Alert
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message Sent Successfully!");
});

// Project Box Click (optional)
document.querySelectorAll(".project-boxes .box").forEach((box, index) => {
  box.addEventListener("click", () => {
    alert("Project " + (index + 1) + " Clicked!");
  });
});

/* THEME TOGGLE: append this to script.js */

// id of button you added in HTML
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = themeToggleBtn?.querySelector("i");

const THEME_KEY = "theme-preference"; // localStorage key

// apply theme: either 'dark' or 'light'
function applyTheme(theme) {
  const root = document.documentElement; // <html>
  if (theme === "dark") {
    root.classList.add("dark");
    if (themeIcon) {
      themeIcon.className = "ri-sun-line"; // show sun when dark (to switch back)
      themeToggleBtn.setAttribute("aria-pressed", "true");
      themeToggleBtn.title = "Switch to light mode";
    }
  } else {
    root.classList.remove("dark");
    if (themeIcon) {
      themeIcon.className = "ri-moon-line"; // show moon when light
      themeToggleBtn.setAttribute("aria-pressed", "false");
      themeToggleBtn.title = "Switch to dark mode";
    }
  }
}

// determine initial theme:
// 1. user preference saved in localStorage
// 2. else system preference (prefers-color-scheme)
// 3. else default to light
function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "dark" || saved === "light") return saved;

  // respect system preference
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

// toggle and persist
function toggleTheme() {
  const current = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
}

// initialize on load
document.addEventListener("DOMContentLoaded", () => {
  // set initial
  const initial = getInitialTheme();
  applyTheme(initial);

  // attach handler
  themeToggleBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    toggleTheme();
  });

  // optional: listen for system changes if user hasn't explicitly saved preference
  window.matchMedia &&
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved !== "dark" && saved !== "light") {
          applyTheme(e.matches ? "dark" : "light");
        }
      });
});
