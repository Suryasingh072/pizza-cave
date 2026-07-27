/* ============================================================
   PIZZA CAVE — main.js  (Bootstrap 5 site)
   ============================================================ */

const WHATSAPP_NUMBER = (typeof BUSINESS !== "undefined" && BUSINESS.whatsappNumber) || "919026990995";
const CALL_NUMBER = "+919026990995";

/* ---------- LOADER ---------- */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) setTimeout(() => loader.classList.add("hidden"), 400);
  if (window.AOS) AOS.init({ duration: 750, once: true, offset: 60, easing: "ease-out-cubic" });
});

/* ---------- NAVBAR SCROLL STATE ---------- */
const navbar = document.querySelector(".custom-navbar");
function onScrollNav() {
  if (!navbar) return;
  navbar.classList.toggle("scrolled", window.scrollY > 30);
}
window.addEventListener("scroll", onScrollNav, { passive: true });
onScrollNav();

/* Collapse the Bootstrap mobile menu after a link is tapped */
document.querySelectorAll(".navbar-collapse .nav-link, .navbar-collapse .btn").forEach(el => {
  el.addEventListener("click", () => {
    const collapseEl = document.querySelector(".navbar-collapse.show");
    if (collapseEl && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
  });
});

/* ---------- MOUSE GLOW ---------- */
const glow = document.getElementById("mouse-glow");
if (glow && window.matchMedia("(pointer:fine)").matches) {
  let raf = null;
  window.addEventListener("mousemove", e => {
    glow.style.opacity = "1";
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => { glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`; });
  });
  document.addEventListener("mouseleave", () => (glow.style.opacity = "0"));
}

/* ---------- BACK TO TOP ---------- */
const backTop = document.getElementById("back-to-top");
if (backTop) {
  window.addEventListener("scroll", () => backTop.classList.toggle("show", window.scrollY > 500), { passive: true });
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- FLOATING WHATSAPP / CALL LINKS ---------- */
document.querySelectorAll(".fab-whatsapp").forEach(btn => {
  btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Pizza Cave 👋 I'd like to know more about your menu.")}`;
  btn.target = "_blank"; btn.rel = "noopener";
});
document.querySelectorAll(".fab-call").forEach(btn => { btn.href = `tel:${CALL_NUMBER}`; });

/* ---------- ANIMATED COUNTERS ---------- */
function animateCounter(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  const duration = 1500;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString("en-IN") + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString("en-IN") + suffix;
  }
  requestAnimationFrame(step);
}
const counterEls = document.querySelectorAll("[data-count]");
if (counterEls.length) {
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(entry => { if (entry.isIntersecting) { animateCounter(entry.target); o.unobserve(entry.target); } });
  }, { threshold: 0.5 });
  counterEls.forEach(el => obs.observe(el));
}

/* ============================================================
   WHATSAPP ORDERING
   ============================================================ */
function orderOnWhatsApp(name, price) {
  const message = `Hello Pizza Cave 👋\nI want to order:\n${name}\nPrice: ₹${price}\nMy Name:\nPhone:\nAddress:`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}
window.orderOnWhatsApp = orderOnWhatsApp;

/* Delegated click handler — works for every order button rendered anywhere on the page,
   including pizza cards where price depends on the currently selected size. */
document.addEventListener("click", e => {
  const btn = e.target.closest(".order-btn");
  if (!btn) return;
  const card = btn.closest(".menu-card");
  const select = card ? card.querySelector(".size-select") : null;
  let name = btn.dataset.name;
  let price = btn.dataset.price;
  if (select) {
    const opt = select.selectedOptions[0];
    price = opt.dataset.price;
    name = `${name} (${opt.value}" size)`;
  }
  orderOnWhatsApp(name, price);
});

/* ============================================================
   CARD RENDERERS
   ============================================================ */
function vegPill() { return `<span class="veg-pill">100% VEG</span>`; }

/* Pizza card — includes a size selector (7"/10"/12") since pricing is size-based */
function pizzaCardHTML(item, category, aosDelay = 0) {
  const svg = CARTOON.pizza;
  return `
  <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="${aosDelay}">
    <div class="card menu-card h-100">
      <div class="card-cartoon">${svg}<span class="price-tag">₹${category.price7}+</span></div>
      <div class="card-body d-flex flex-column">
        <div class="d-flex justify-content-between align-items-start gap-2 mb-1">
          <h5 class="card-title mb-0">${item.name}</h5>
          ${vegPill()}
        </div>
        <p class="card-text flex-grow-1">${item.desc || category.title}</p>
        <label class="form-label mb-1">Select Size</label>
        <select class="form-select form-select-sm size-select mb-3">
          <option value="7" data-price="${category.price7}">7" — ₹${category.price7}</option>
          <option value="10" data-price="${category.price10}">10" — ₹${category.price10}</option>
          <option value="12" data-price="${category.price12}">12" — ₹${category.price12}</option>
        </select>
        <button class="btn btn-primary w-100 order-btn" data-name="${item.name.replace(/"/g, "&quot;")}">Order on WhatsApp</button>
      </div>
    </div>
  </div>`;
}

/* Simple single-price card — used for sides, drinks, and combos */
function simpleCardHTML(item, iconKey, aosDelay = 0) {
  const svg = CARTOON[iconKey] || CARTOON.pizza;
  return `
  <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="${aosDelay}">
    <div class="card menu-card h-100">
      <div class="card-cartoon">${svg}<span class="price-tag">₹${item.price}</span></div>
      <div class="card-body d-flex flex-column">
        <div class="d-flex justify-content-between align-items-start gap-2 mb-1">
          <h5 class="card-title mb-0">${item.name}</h5>
          ${vegPill()}
        </div>
        <p class="card-text flex-grow-1">${item.desc || ""}</p>
        <button class="btn btn-primary w-100 order-btn mt-2" data-name="${item.name.replace(/"/g, "&quot;")}" data-price="${item.price}">Order on WhatsApp</button>
      </div>
    </div>
  </div>`;
}

function comboCardHTML(item, aosDelay = 0) {
  return `
  <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="${aosDelay}">
    <div class="card menu-card h-100 position-relative">
      ${item.tag ? `<span class="ribbon">${item.tag}</span>` : ""}
      <div class="card-cartoon">${CARTOON.comboBox}</div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text flex-grow-1">${item.desc}</p>
        <div class="mb-3"><span class="combo-price-now">₹${item.price}</span></div>
        <button class="btn btn-gold w-100 order-btn" data-name="${item.name.replace(/"/g, "&quot;")}" data-price="${item.price}">Order on WhatsApp</button>
      </div>
    </div>
  </div>`;
}

function iconForSide(item) {
  if (item.icon === "pastaRed") return CARTOON.pasta("#d81324");
  if (item.icon === "pastaWhite") return CARTOON.pasta("#f2e2b6");
  if (item.icon === "burger") return CARTOON.burger;
  if (item.icon === "garlicBread") return CARTOON.garlicBread;
  if (item.icon === "cake") return CARTOON.cake;
  return CARTOON.pizza;
}
function iconForDrink(item) {
  if (item.icon === "water") return CARTOON.water;
  if (item.icon === "coffee") return CARTOON.coffee;
  if (item.icon === "drinkCoffee") return CARTOON.drink("#6b4226");
  return CARTOON.drink("#8a1420");
}

/* ============================================================
   PAGE-LEVEL RENDER HELPERS
   ============================================================ */
function renderPizzaGrid(containerId, categories, limitIds = null) {
  const el = document.getElementById(containerId);
  if (!el) return;
  let html = "";
  let i = 0;
  categories.forEach(cat => {
    cat.items.forEach(item => {
      if (limitIds && !limitIds.includes(item.id)) return;
      html += pizzaCardHTML(item, cat, (i % 4) * 60);
      i++;
    });
  });
  el.innerHTML = html;
}
window.renderPizzaGrid = renderPizzaGrid;

function renderPizzaCategorySection(containerId, category) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = category.items.map((item, i) => pizzaCardHTML(item, category, (i % 4) * 60)).join("");
}
window.renderPizzaCategorySection = renderPizzaCategorySection;

function renderSimpleGrid(containerId, items, iconResolver) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map((item, i) => simpleCardHTML(item, iconResolver(item), (i % 4) * 60)).join("");
}
window.renderSimpleGrid = renderSimpleGrid;

function renderCombos(containerId, combos) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = combos.map((c, i) => comboCardHTML(c, i * 70)).join("");
}
window.renderCombos = renderCombos;

/* ============================================================
   GALLERY — Bootstrap modal preview
   ============================================================ */
function initGalleryModal() {
  const tiles = document.querySelectorAll(".gallery-tile");
  const modalBody = document.getElementById("galleryModalBody");
  const modalTitle = document.getElementById("galleryModalLabel");
  if (!tiles.length || !modalBody || !window.bootstrap) return;
  const modalEl = document.getElementById("galleryModal");
  const modal = new bootstrap.Modal(modalEl);
  tiles.forEach(tile => {
    tile.addEventListener("click", () => {
      modalBody.innerHTML = tile.querySelector("svg").outerHTML;
      modalTitle.textContent = tile.dataset.label || "Pizza Cave";
      modal.show();
    });
  });
}
window.initGalleryModal = initGalleryModal;

/* ============================================================
   CONTACT FORM → WhatsApp
   ============================================================ */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.querySelector("#c-name").value.trim();
    const phone = form.querySelector("#c-phone").value.trim();
    const msg = form.querySelector("#c-message").value.trim();
    const message = `Hello Pizza Cave 👋\nName: ${name}\nPhone: ${phone}\nMessage: ${msg}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    const note = document.getElementById("form-note");
    if (note) note.textContent = "Opening WhatsApp… see you soon! 🍕";
    form.reset();
  });
}
window.initContactForm = initContactForm;

/* ---------- active nav link based on current page ---------- */
(function highlightActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar .nav-link").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
})();

/* ---------- inject business info where data-biz-* placeholders are used ---------- */
(function injectBusinessInfo() {
  if (typeof BUSINESS === "undefined") return;
  document.querySelectorAll("[data-biz='address']").forEach(el => (el.textContent = BUSINESS.address));
  document.querySelectorAll("[data-biz='timings']").forEach(el => (el.textContent = BUSINESS.timings));
  document.querySelectorAll("[data-biz='phones']").forEach(el => (el.innerHTML = BUSINESS.phones.join(" &nbsp;|&nbsp; ")));
})();
