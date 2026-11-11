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
    title: "How simple and practical ideas can still be of great use in the era of AI",
    url: "Programming/nvimpp.html",
    desc: "nvimpp is a program I worked on, a wrapper for Neovim (nvim). Some basic statistics can make a coder's life easier, and that is still useful in the era of AI.",
    tags: ["C++", "Programming"],
    date: "2026-11-11"
  },
  {
    title: "A Seemengly Impossible Integral Solved with Residue Theorem",
    url: "Math/integral24.html",
    desc: "Some integrals seem to be solvable only with numerical methods, but complex analysis can help us solve them analytically.",
    tags: ["Complex Analysis"],
    date: "2026-08-12"
  },

  {
    title: "On Learning by Teaching and by Doing.",
    url: "Philo/learning-by-teaching-and-doing.html",
    desc: "A short note on why explaining a thing is the fastest way to find the holes in your own understanding.",
    tags: ["Philosophy & Society"],
    date: "2026-07-05"
  }
];

/*Exagon hand cursor*/

for (const el of document.querySelectorAll("*")) {
  if (getComputedStyle(el).cursor === "pointer") {
    el.style.cursor = "url('/.github.io/mouse/hand.png') 26 25, pointer";
  }
}
//////////////////////
/////// NOTE META
/////////////////////
const ARROW = '<i class="fa-solid fa-arrow-right"></i>'; // \uf061
const WPM = 200; // reading speed, words per minute

const fmt_date = (d) => new Date(d + "T12:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

const meta_html = (e, min, sep = "<br>") => [`Published ${ARROW} ${fmt_date(e.date)}`, `Reading time ${ARROW} ${min} min`, `Topics ${ARROW} ${e.tags.join(", ")}`].join(sep);
// prose words only: math (rendered or raw TeX), scripts and figures don't count
function reading_min(el) {

  const c = el.cloneNode(true);
  c.querySelectorAll("script, style, svg, mjx-container").forEach(n => n.remove());
  const text = c.textContent.replace(/\$\$[\s\S]*?\$\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\$[^$]*\$/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.round(words / WPM));
}

// preview: fetch each article once, same count as on the article page
const minutes = {};
const get_min = (url) => minutes[url] ??= fetch(url).then(r => r.text()).then(h => {

  const doc = new DOMParser().parseFromString(h, "text/html");

  return reading_min(doc.querySelector(".content") || doc.body);
});

// article page: fill <p id="article-meta"> from this page's entry
const article_meta = document.getElementById("article-meta");
const this_entry = entries.find(e => location.pathname.endsWith("/" + e.url));
if(article_meta && this_entry) article_meta.innerHTML = meta_html(this_entry, reading_min(document.querySelector(".content")));
/* --- render --- */
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
      <div class="note-tags" data-url="${e.url}">${meta_html(e, "...", "&nbsp;&nbsp;&middot;&nbsp;&nbsp;")}</div>
    </article>`).join("");

  shown.forEach(e => get_min(e.url).then(m => {

    const el = list.querySelector(`[data-url="${e.url}"]`);
    if(el) el.innerHTML = meta_html(e, m, "&nbsp;&nbsp;&middot;&nbsp;&nbsp;");
  }));
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

///////////////////////////////////////////////
//////////////////SCROLL GRAB 
///////////////////////////////////////////////
// click or drag on the top progress bar to scroll the page
(() => {

  const bar = document.getElementById("scroll-progress");
  if(!bar) return;

  const root = document.documentElement;

  // the bar is 4px, too thin to hit: invisible taller strip on top of it
  const strip = document.createElement("div");
  strip.style.cssText = "position:fixed; top:0; left:0; width:100%; height:12px; z-index:10000; touch-action:none; cursor:url('/.github.io/mouse/hand.png') 26 25, pointer;";
  document.body.appendChild(strip);

  const jump = (x) => {

    const f = Math.min(Math.max(x / root.clientWidth, 0), 1);
    window.scrollTo({ top: f * (root.scrollHeight - root.clientHeight), behavior: "instant" });
  };

  strip.addEventListener("mouseenter", () => bar.style.height = "8px");
  strip.addEventListener("mouseleave", () => { if(!root.classList.contains("grabbing")) bar.style.height = ""; });

  strip.addEventListener("pointerdown", (e) => {

    if(e.button !== 0) return;
    e.preventDefault(); // no text selection while dragging
    strip.setPointerCapture(e.pointerId);
    root.classList.add("grabbing");
    root.style.scrollBehavior = "auto"; // smooth scroll would lag behind the pointer
    jump(e.clientX);
  });

  strip.addEventListener("pointermove", (e) => {
    if(strip.hasPointerCapture(e.pointerId)) jump(e.clientX);
  });

  const release = () => {

    root.classList.remove("grabbing");
    root.style.scrollBehavior = "";
    bar.style.height = "";
  };
  strip.addEventListener("pointerup", release);
  strip.addEventListener("pointercancel", release);
})();

