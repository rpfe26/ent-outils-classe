/* ============================================================
   Espace de classe — logique de la page
   ============================================================ */

/* ---------- Catégories ---------- */
const CATEGORIES = [
  { id: "organisation",  label: "Organisation",          color: "var(--c-organisation)",   icon: "calendar" },
  { id: "travail",       label: "Travail de classe",     color: "var(--c-travail)",        icon: "book" },
  { id: "communication", label: "Communication",         color: "var(--c-communication)",  icon: "chat" },
  { id: "sciences",      label: "Sciences & maths",      color: "var(--c-sciences)",       icon: "flask" },
  { id: "langues",       label: "Langues & lettres",     color: "var(--c-langues)",        icon: "translate" },
  { id: "creativite",    label: "Créativité",            color: "var(--c-creativite)",     icon: "palette" },
  { id: "code",          label: "Code & numérique",      color: "var(--c-code)",           icon: "code" },
  { id: "evaluation",    label: "Évaluation & révisions",color: "var(--c-evaluation)",     icon: "check" },
  { id: "ressources",    label: "Ressources & culture",  color: "var(--c-ressources)",     icon: "compass" },
];

/* ---------- Outils ----------
   `url` : remplacer par les liens réels de l'établissement si besoin. */
const TOOLS = [
  // Organisation
  { n: "Pronote", c: "organisation", d: "Notes, emploi du temps, devoirs à faire et absences.", u: "https://www.index-education.com/fr/logiciel-gestion-vie-scolaire.php" },
  { n: "Agenda partagé", c: "organisation", d: "Dates des contrôles et échéances communes de la classe.", u: "https://calendar.google.com" },
  { n: "E-sidoc · CDI", c: "organisation", d: "Catalogue du CDI : chercher, réserver un livre, noter une lecture.", u: "https://www.reseau-canope.fr" },

  // Travail de classe
  { n: "Moodle", c: "travail", d: "Cours en ligne, dépôt des devoirs et exercices autocorrectifs.", u: "https://moodle.org" },
  { n: "Éléa", c: "travail", d: "Plateforme de cours de l'Éducation nationale, accessible avec l'ENT.", u: "https://elea.education" },
  { n: "Cahier de textes", c: "travail", d: "Le travail donné en cours, séance par séance.", u: "https://www.index-education.com" },

  // Communication
  { n: "Messagerie ENT", c: "communication", d: "Écrire à un professeur ou à la vie scolaire, en toute sécurité.", u: "#" },
  { n: "Classe virtuelle", c: "communication", d: "Cours à distance et rendez-vous en visioconférence.", u: "https://www.cned.fr" },
  { n: "Padlet", c: "communication", d: "Mur collaboratif pour partager idées, liens et documents.", u: "https://padlet.com" },

  // Sciences & maths
  { n: "GeoGebra", c: "sciences", d: "Géométrie dynamique, fonctions et statistiques.", u: "https://www.geogebra.org" },
  { n: "PhET", c: "sciences", d: "Simulations interactives de physique, chimie et SVT.", u: "https://phet.colorado.edu/fr/" },
  { n: "Mathigon", c: "sciences", d: "Manipuler fractions, aires et solides à l'écran.", u: "https://mathigon.org/fr" },
  { n: "Desmos", c: "sciences", d: "Calculatrice graphique en ligne pour tracer et comparer des courbes.", u: "https://www.desmos.com/calculator" },

  // Langues & lettres
  { n: "Quizlet", c: "langues", d: "Cartes mémo pour mémoriser vocabulaire et définitions.", u: "https://quizlet.com/fr" },
  { n: "Le Robert", c: "langues", d: "Dictionnaire en ligne : sens, synonymes, conjugaison.", u: "https://dictionnaire.lerobert.com" },
  { n: "Duolingo", c: "langues", d: "S'entraîner dans une langue vivante, à son rythme.", u: "https://fr.duolingo.com" },

  // Créativité
  { n: "Canva Éducation", c: "creativite", d: "Affiches, diaporamas et illustrations pour les exposés.", u: "https://www.canva.com/fr_fr/education/" },
  { n: "Framapad", c: "creativite", d: "Écrire à plusieurs en direct, sans créer de compte.", u: "https://framapad.org" },
  { n: "La Digitale", c: "creativite", d: "Boîte à outils libres et sans publicité pour la classe.", u: "https://ladigitale.dev" },

  // Code & numérique
  { n: "Scratch", c: "code", d: "Programmer des histoires et des jeux avec des blocs.", u: "https://scratch.mit.edu" },
  { n: "Capytale", c: "code", d: "Écrire du Python en classe, accessible avec l'ENT.", u: "https://capytale2.ac-paris.fr" },
  { n: "Pix", c: "code", d: "Développer et certifier ses compétences numériques.", u: "https://pix.fr" },

  // Évaluation & révisions
  { n: "Kahoot", c: "evaluation", d: "Quiz interactifs pour réviser en s'amusant.", u: "https://kahoot.com" },
  { n: "Wooclap", c: "evaluation", d: "Poser des questions en direct et voir les réponses de la classe.", u: "https://www.wooclap.com/fr" },
  { n: "Plickers", c: "evaluation", d: "Répondre avec des cartons scannés par le professeur.", u: "https://www.plickers.com" },

  // Ressources & culture
  { n: "Lumni", c: "ressources", d: "Vidéos et dossiers pédagogiques pour toutes les matières.", u: "https://www.lumni.fr" },
  { n: "Éduthèque", c: "ressources", d: "Ressources des grands établissements culturels et scientifiques.", u: "https://www.edutheque.fr" },
  { n: "Gallica · BnF", c: "ressources", d: "Bibliothèque numérique : livres, images et manuscrits anciens.", u: "https://gallica.bnf.fr" },
];

/* ---------- Icônes (SVG en ligne, monochromes) ---------- */
const SVG = (p) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ` +
  `stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;

const ICONS = {
  calendar:   SVG('<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M8 3v4M16 3v4M3.5 10.5h17"/>'),
  book:       SVG('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/>'),
  chat:       SVG('<path d="M20.5 12a8.5 8.5 0 0 1-12.3 7.6L3.5 20.5l1-4.4A8.5 8.5 0 1 1 20.5 12z"/>'),
  flask:      SVG('<path d="M9.5 3h5"/><path d="M10.5 3v6.2L5.4 17.6A1.8 1.8 0 0 0 7 20.5h10a1.8 1.8 0 0 0 1.6-2.9L13.5 9.2V3"/><path d="M8 14.5h8"/>'),
  translate:  SVG('<path d="M4 5.5h8"/><path d="M8 3.5v2c0 4-2 7-5 8.5"/><path d="M5.5 9c.8 2.6 3 4.3 5.5 5"/><path d="M12.5 21l3.5-8 3.5 8"/><path d="M13.8 17.6h4.4"/>'),
  palette:    SVG('<path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.6 0 2.2-1.1 2.2-2.2 0-1.6-2.2-1.7-2.2-3.2 0-1.5 1.5-2.3 3.1-2.3h2.6A3.3 3.3 0 0 0 21 9.5C20.4 6 16.6 3.5 12 3.5z"/><circle cx="8" cy="9" r="1.1" fill="currentColor" stroke="none"/><circle cx="12" cy="7.5" r="1.1" fill="currentColor" stroke="none"/><circle cx="7.5" cy="13.5" r="1.1" fill="currentColor" stroke="none"/>'),
  code:       SVG('<path d="M9 7.5 4.5 12 9 16.5"/><path d="M15 7.5 19.5 12 15 16.5"/><path d="M13.5 5l-3 14"/>'),
  check:      SVG('<circle cx="12" cy="12" r="8.5"/><path d="M8 12.3l2.7 2.7L16 9.7"/>'),
  compass:    SVG('<circle cx="12" cy="12" r="8.5"/><path d="M15.6 8.4l-2.1 5.1-5.1 2.1 2.1-5.1z"/>'),
  search:     SVG('<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/>'),
  external:   SVG('<path d="M14 4h6v6"/><path d="M20 4l-8 8"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'),
  theme:      SVG('<path d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z"/>'),
  contrast:   SVG('<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor" stroke="none"/>'),
  reading:    SVG('<path d="M12 6.5C10.5 5.2 8.5 4.5 6 4.5H4v13h2.5c2.5 0 4.5.8 5.5 2 1-1.2 3-2 5.5-2H20v-13h-2c-2.5 0-4.5.7-6 2z"/><path d="M12 6.5v13"/>'),
  reset:      SVG('<path d="M4 9.5V5h4.5"/><path d="M4.6 9.2a7.5 7.5 0 1 1 1.3 7.6"/>'),
};

/* ---------- Utilitaires ---------- */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const normalize = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const catById = (id) => CATEGORIES.find((c) => c.id === id);

/* ---------- États ---------- */
const state = { q: "", cat: "all" };
let firstRender = true;

/* ---------- Construction des cartes ---------- */
function cardMarkup(tool, index) {
  const cat = catById(tool.c);
  return `
    <li class="card${firstRender ? " reveal" : ""}" style="--dot:${cat.color};--i:${index}">
      <div class="card__head">
        <span class="card__icon" aria-hidden="true">${ICONS[cat.icon]}</span>
        <h3 class="card__title">${tool.n}</h3>
      </div>
      <p class="card__desc">${tool.d}</p>
      <div class="card__foot">
        <span class="card__tag">${cat.label}</span>
        <a class="card__link" href="${tool.u}" target="_blank" rel="noopener noreferrer">
          Ouvrir${ICONS.external}
          <span class="visually-hidden">&nbsp;: ${tool.n} (nouvel onglet)</span>
        </a>
      </div>
    </li>`;
}

/* ---------- Filtres ---------- */
function renderFilters() {
  const counts = TOOLS.reduce((acc, t) => ((acc[t.c] = (acc[t.c] || 0) + 1), acc), {});
  const items = [
    { id: "all", label: "Tous", color: "var(--ink)", icon: null, count: TOOLS.length },
    ...CATEGORIES.map((c) => ({ ...c, count: counts[c.id] || 0 })),
  ].filter((c) => c.id === "all" || c.count > 0);

  $("#filters").innerHTML = items
    .map(
      (c) => `
      <button type="button" class="chip" data-cat="${c.id}"
              aria-pressed="${state.cat === c.id}">
        <span class="chip__dot" style="--dot:${c.color}"></span>
        ${c.label} <span aria-hidden="true">·&nbsp;${c.count}</span>
      </button>`
    )
    .join("");
}

/* ---------- Rendu ---------- */
function render() {
  const q = normalize(state.q.trim());
  const list = TOOLS.filter((t) => {
    const okCat = state.cat === "all" || t.c === state.cat;
    const hay = normalize(`${t.n} ${t.d} ${catById(t.c).label}`);
    return okCat && (!q || hay.includes(q));
  });

  $("#outils").innerHTML = list.map(cardMarkup).join("");

  const empty = $("#empty");
  empty.hidden = list.length > 0;

  const n = list.length;
  $("#count").textContent =
    n === TOOLS.length
      ? `${TOOLS.length} outils référencés`
      : `${n} outil${n > 1 ? "s" : ""} sur ${TOOLS.length}`;

  firstRender = false;
}

/* ---------- Recherche ---------- */
function bindSearch() {
  const input = $("#q");
  const clear = $('[data-action="clear-search"]');

  input.addEventListener("input", () => {
    state.q = input.value;
    clear.hidden = input.value === "";
    render();
  });

  clear.addEventListener("click", () => {
    input.value = "";
    state.q = "";
    clear.hidden = true;
    input.focus();
    render();
  });

  // Touche Échap : vider la recherche
  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && input.value) {
      e.preventDefault();
      clear.click();
    }
  });
}

/* ---------- Filtres (délégation d'événement) ---------- */
function bindFilters() {
  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    state.cat = state.cat === btn.dataset.cat ? "all" : btn.dataset.cat;
    renderFilters();
    render();
  });
}

/* ---------- Réglages d'affichage ---------- */
const PREFS_KEY = "espace-classe.prefs";
const DEFAULT_PREFS = { theme: "paper", scale: 1, contrast: false, reading: false };

function loadPrefs() {
  try {
    return { ...DEFAULT_PREFS, ...JSON.parse(localStorage.getItem(PREFS_KEY) || "{}") };
  } catch {
    return { ...DEFAULT_PREFS };
  }
}

let prefs = loadPrefs();

function applyPrefs() {
  const root = document.documentElement;
  root.dataset.theme = prefs.theme;
  root.style.setProperty("--scale", prefs.scale);
  document.body.classList.toggle("contrast", prefs.contrast);
  document.body.classList.toggle("reading", prefs.reading);

  const pressed = (action, on) => {
    const el = $(`[data-action="${action}"]`);
    if (el) el.setAttribute("aria-pressed", String(on));
  };
  pressed("theme", prefs.theme === "night");
  pressed("contrast", prefs.contrast);
  pressed("reading", prefs.reading);

  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch {
    /* stockage indisponible : on continue sans persistance */
  }
}

function bindPrefs() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    switch (btn.dataset.action) {
      case "theme":
        prefs.theme = prefs.theme === "night" ? "paper" : "night";
        break;
      case "contrast":
        prefs.contrast = !prefs.contrast;
        break;
      case "reading":
        prefs.reading = !prefs.reading;
        break;
      case "font-up":
        prefs.scale = Math.min(1.4, Math.round((prefs.scale + 0.05) * 100) / 100);
        break;
      case "font-down":
        prefs.scale = Math.max(0.85, Math.round((prefs.scale - 0.05) * 100) / 100);
        break;
      case "reset":
        prefs = { ...DEFAULT_PREFS };
        break;
      default:
        return;
    }
    applyPrefs();
  });

  // Le thème suit le système tant que l'utilisateur n'a rien choisi
  if (!localStorage.getItem(PREFS_KEY)) {
    prefs.theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "night" : "paper";
  }
}

/* ---------- Date et statistiques ---------- */
function initHeader() {
  const now = new Date();
  const txt = now.toLocaleDateString("fr-FR", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });
  $("#today").textContent = txt.charAt(0).toUpperCase() + txt.slice(1);
  $("#stat-tools").textContent = TOOLS.length;
  $("#stat-cats").textContent = new Set(TOOLS.map((t) => t.c)).size;
}

/* ---------- Icônes statiques de l'interface ---------- */
function paintIcons() {
  $$("[data-icon]").forEach((el) => {
    const icon = ICONS[el.dataset.icon];
    if (icon) el.innerHTML = icon;
  });
}

/* ---------- Démarrage ---------- */
function init() {
  paintIcons();
  bindPrefs();
  applyPrefs();
  initHeader();
  renderFilters();
  bindFilters();
  bindSearch();
  render();
}

document.addEventListener("DOMContentLoaded", init);
