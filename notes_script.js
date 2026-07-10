/* ==========================================================================
   notes_script.js  —  topic-filtered index for notes.html

   To add a note: drop another object into the `entries` array below.
   Tags are free text; any new tag automatically becomes a pill.
   ========================================================================== */

/* PLACEHOLDER entries — replace url/title/desc with your real notes. Each note lives in its own file (e.g. notes/black-scholes.html)
 where the KaTeX-rendered writing goes. */
const entries = [
  /*{
    title: "The Cellar Effect: Why even with intense heat some places are cooler.",
    url: "Physics/cellar-effect.html",
    desc: "Why is a cellar colder than the outside during summer? Physical modeling can help us answer this seemingly simple question.",
    tags: ["Physics"]
  },*/
  {
    title: "A Seemengly Impossible Integral Solved with Residue Theorem",
    url: "Math/integral24.html",
    desc: "Some integrals seem to be solvable only with numerical methods, but complex analysis can help us solve them analytically.",
    tags: ["Complex Analysis"]
  },

  {
    title: "On Learning by Teaching and by Doing.",
    url: "Philo/learning-by-teaching-and-doing.html",
    desc: "A short note on why explaining a thing is the fastest way to find the holes in your own understanding.",
    tags: ["Philosophy & Society"]
  }
];

/* --------------------------------------------------------------- render --- */
const list = document.getElementById("entry-list");
const bar  = document.getElementById("topics");

// unique tags, alphabetical, with "All" prepended
const topics = ["All", ...new Set(entries.flatMap(e => e.tags))].sort((a, b) =>
  a === "All" ? -1 : b === "All" ? 1 : a.localeCompare(b)
);

let activeTopic = "All";

function render(active) {
  activeTopic = active;
  const shown = entries.filter(e => active === "All" || e.tags.includes(active));

  if (shown.length === 0) {
    list.innerHTML = `<p class="notes-empty">Nothing here yet under “${active}”.</p>`;
    return;
  }

  list.innerHTML = shown.map((e, i) => `
    <article class="note-entry" style="--i:${i}">
      <a href="${e.url}" class="note-title">${e.title}</a>
      <p class="note-desc">${e.desc}</p>
      <div class="note-tags">${e.tags.join("&nbsp;&middot;&nbsp;")}</div>
    </article>`).join("");
}

function buildBar() {
  topics.forEach(t => {
    const b = document.createElement("button");
    b.className = "topic-pill";
    b.type = "button";
    b.textContent = t;
    b.setAttribute("aria-pressed", t === "All" ? "true" : "false");
    b.addEventListener("click", () => {
      // clicking the active non-"All" pill again resets to All
      const next = (t === activeTopic && t !== "All") ? "All" : t;
      document.querySelectorAll(".topic-pill").forEach(p => {
        const on = p.textContent === next;
        p.classList.toggle("active", on);
        p.setAttribute("aria-pressed", on ? "true" : "false");
      });
      render(next);
    });
    bar.appendChild(b);
  });
  bar.firstChild.classList.add("active"); // "All" lit by default
}

if (list && bar) {

  buildBar();
  render("All");
}

/*  theme + progress  */
/* Honour the dark/light choice saved by the portfolio (same localStorage key)
   so the Notes page matches whatever mode the visitor last picked. */
(function syncTheme() {
  const dark = localStorage.getItem("darkMode") === "enabled";
  const root = document.documentElement.style;
  if (dark) {
    document.body.classList.add("dark-mode");
    root.setProperty("--dark-modeBkg", "white");
    root.setProperty("--text-color", "black");
    root.setProperty("--shadow-color", "rgba(0,0,0,0.7)");
  } else {
    root.setProperty("--dark-modeBkg", "black");
    root.setProperty("--text-color", "white");
    root.setProperty("--shadow-color", "rgba(255,255,255,0.7)");
  }
})();

(function themeToggle() {
  const toggle = document.getElementById("modeToggle");
  const slider = document.querySelector(".slider");
  if (!toggle) return;

  const root = document.documentElement.style;
  let isDarkMode = localStorage.getItem("darkMode") === "enabled";

  // reflect the saved state on the (hidden) checkbox and the tooltip label
  toggle.checked = isDarkMode;
  if (slider) slider.setAttribute("data-tooltip", isDarkMode ? "Dark Mode" : "Light Mode");

  toggle.addEventListener("change", () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark-mode", isDarkMode);
    if (slider) slider.setAttribute("data-tooltip", isDarkMode ? "Dark Mode" : "Light Mode");
    if (isDarkMode) {
      localStorage.setItem("darkMode", "enabled");
      root.setProperty("--dark-modeBkg", "white");
      root.setProperty("--text-color", "black");
      root.setProperty("--shadow-color", "rgba(0,0,0,0.7)");
    } else {
      localStorage.setItem("darkMode", "disabled");
      root.setProperty("--dark-modeBkg", "black");
      root.setProperty("--text-color", "white");
      root.setProperty("--shadow-color", "rgba(255,255,255,0.7)");
    }
  });
})();
// scroll progress bar
const progressBar = document.getElementById("scroll-progress");
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progressBar.style.width = (scrollHeight ? (scrollTop / scrollHeight) * 100 : 0) + "%";
});

/////////////////////////////////////////////
////////////MOVING TITLE
/////////////////////////////////////////////

let titleText = "Riccardo Martelli's Notes ";
let position = 0;
let interval;

function moveTitle() {
    document.title = titleText.substring(position) + titleText.substring(0, position);
    position = (position + 1) % titleText.length;
}

function startMoving() {
  interval = setInterval(moveTitle, 200); //Set vel
  setTimeout(stopMoving, 15400); // Moves for 5 sec
  position = 0;
}

function stopMoving() {
  clearInterval(interval);
  setTimeout(startMoving, 5000); // Stops for 5 sec, then starts again
}

startMoving();

/////////////////////////////////////////////
////////////READING TIME
/////////////////////////////////////////////
/*Reading time found using 200-250 words/min estimate*/
(function readingTime() {
  
  const article = document.querySelector("article.content");
  const title = document.getElementById("article-title");
  if (!article || !title) return; // skips notes.html

  const words = (article.textContent.trim().match(/\S+/g) || []).length;
  const fast = Math.ceil(words / 250); // lower bound faster reading
  const slow = Math.ceil(words / 200); // upper bound slower reading

  const span = fast === slow ? `${fast} min read` : `${fast}-${slow} min read`;

  const el = document.createElement("p");
  el.className = "article-meta reading-time";
  el.textContent = span;
  title.insertAdjacentElement("afterend", el);

})();
