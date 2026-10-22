/* Naresh Bouquet — main behaviour. Content comes from js/config.js */
(function () {
  "use strict";
  var S = window.SHOP || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) { var d = document.createElement("div"); d.textContent = t == null ? "" : String(t); return d.innerHTML; };
  var FALLBACK_IMG = "images/bouquet.jpg";

  /* ---------- WhatsApp helper ---------- */
  function waUrl(msg) {
    var num = String(S.whatsapp || "").replace(/\D/g, "");
    return "https://wa.me/" + num + "?text=" + encodeURIComponent(msg);
  }
  var DEFAULT_MSG = "Hi " + S.name + "! I'd like to order a chocolate bouquet.";
  function bindWhatsApp(root) {
    $$("[data-wa]", root).forEach(function (a) {
      a.href = waUrl(a.getAttribute("data-msg") || DEFAULT_MSG);
    });
  }

  /* ---------- image fallbacks ---------- */
  function imgFallback(img) {
    img.addEventListener("error", function () {
      if (img.src.indexOf(FALLBACK_IMG) === -1) { img.src = FALLBACK_IMG; return; }
      var host = img.closest(".bouquet-3d, .card-img, .story-bouquet");
      if (host) host.classList.add("noimg");
      img.style.display = "none";
    });
  }

  /* ---------- renderers ---------- */
  function productCard(p) {
    var hasPrice = p.price && String(p.price).trim();
    var msg = "Hi " + S.name + "! I'm interested in the " + p.name + ". Could you share the price and availability?";
    var el = document.createElement("article");
    el.className = "card reveal";
    el.innerHTML =
      '<div class="card-img">' +
        (p.bestSeller ? '<span class="tag">Best Seller</span>' : "") +
        '<img src="' + esc(p.image || FALLBACK_IMG) + '" alt="' + esc(p.name) + '" loading="lazy" width="600" height="750">' +
      "</div>" +
      '<div class="card-body">' +
        "<h3>" + esc(p.name) + "</h3>" +
        "<p>" + esc(p.desc) + "</p>" +
        '<div class="price' + (hasPrice ? "" : " ask") + '">' + (hasPrice ? esc(p.price) : "Price on request") + "</div>" +
        '<a class="btn btn-primary" data-wa data-msg="' + esc(msg) + '" href="#" target="_blank" rel="noopener">Order Now</a>' +
      "</div>";
    imgFallback($("img", el));
    return el;
  }

  function renderProducts() {
    var grid = $("#productGrid"), best = $("#bestRow");
    (S.products || []).forEach(function (p) { grid.appendChild(productCard(p)); });
    var bs = (S.products || []).filter(function (p) { return p.bestSeller; });
    if (!bs.length) { $("#best").hidden = true; }
    bs.forEach(function (p) { best.appendChild(productCard(p)); });
  }

  function renderOccasions() {
    var g = $("#occGrid");
    (S.occasions || []).forEach(function (o) {
      var msg = "Hi " + S.name + "! I'm looking for a chocolate bouquet for " + o.name + ".";
      var d = document.createElement("div");
      d.className = "occ reveal";
      d.innerHTML = '<span class="ico" aria-hidden="true">' + esc(o.icon) + "</span><h3>" + esc(o.name) + "</h3><p>" + esc(o.note) +
        '</p><a data-wa data-msg="' + esc(msg) + '" href="#" target="_blank" rel="noopener">Plan this gift</a>';
      g.appendChild(d);
    });
  }

  function renderSteps() {
    var l = $("#stepList");
    (S.steps || []).forEach(function (s) {
      var li = document.createElement("li");
      li.className = "reveal";
      li.innerHTML = "<h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p>";
      l.appendChild(li);
    });
  }

  function renderReviews() {
    var rs = (S.reviews || []).filter(function (r) { return r && r.text; });
    if (!rs.length) { $("#reviews").hidden = true; var n = $('[data-nav="reviews"]'); if (n) n.remove(); return; }
    $("#reviews").hidden = false;
    var g = $("#revGrid");
    rs.forEach(function (r) {
      var d = document.createElement("figure");
      d.className = "rev reveal";
      d.innerHTML = "<blockquote><p>“" + esc(r.text) + "”</p></blockquote><figcaption><cite>" + esc(r.name || "Customer") + (r.source ? " · " + esc(r.source) : "") + "</cite></figcaption>";
      g.appendChild(d);
    });
  }

  function renderFaq() {
    var l = $("#faqList");
    (S.faqs || []).forEach(function (f, i) {
      var d = document.createElement("details");
      d.className = "reveal";
      if (i === 0) d.open = true;
      d.innerHTML = "<summary>" + esc(f.q) + "</summary><p>" + esc(f.a) + "</p>";
      l.appendChild(d);
    });
  }

  function renderContact() {
    var l = $("#contactList"), rows = [];
    if (S.address) rows.push(["Address", esc(S.address)]);
    if (S.hours) rows.push(["Hours", esc(S.hours)]);
    if (S.phone) rows.push(["Phone", '<a href="tel:' + esc(String(S.phone).replace(/[^\d+]/g, "")) + '">' + esc(S.phone) + "</a>"]);
    if (S.email) rows.push(["Email", '<a href="mailto:' + esc(S.email) + '">' + esc(S.email) + "</a>"]);
    if (S.mapsLink) rows.push(["Map", '<a href="' + esc(S.mapsLink) + '" target="_blank" rel="noopener">Open in Google Maps</a>']);
    rows.push(["WhatsApp", '<a data-wa href="#" target="_blank" rel="noopener">Message us to confirm your order</a>']);
    l.innerHTML = rows.map(function (r) { return "<li><b>" + r[0] + "</b><span>" + r[1] + "</span></li>"; }).join("");
    if (S.mapsEmbed) {
      var f = document.createElement("iframe");
      f.src = S.mapsEmbed; f.loading = "lazy"; f.title = "Naresh Bouquet location map";
      f.referrerPolicy = "no-referrer-when-downgrade";
      $("#mapCard").appendChild(f);
    }
    var shop = $("#shopImg");
    shop.addEventListener("error", function () { shop.closest(".shop-photo").classList.add("noimg"); });
  }

  function renderSocial() {
    var l = $("#socialList"), names = { instagram: "Instagram", facebook: "Facebook", youtube: "YouTube" }, any = false;
    Object.keys(names).forEach(function (k) {
      var u = S.social && S.social[k];
      if (!u) return; any = true;
      var li = document.createElement("li");
      li.innerHTML = '<a href="' + esc(u) + '" target="_blank" rel="noopener">' + names[k] + "</a>";
      l.appendChild(li);
    });
    if (!any) l.remove();
  }

  function injectSchema() {
    var o = { "@context": "https://schema.org", "@type": "Store", name: S.name };
    if (S.phone) o.telephone = S.phone;
    if (S.email) o.email = S.email;
    if (S.address) o.address = { "@type": "PostalAddress", streetAddress: S.address };
    if (S.hours) o.openingHours = S.hours;
    var sameAs = Object.keys(S.social || {}).map(function (k) { return S.social[k]; }).filter(Boolean);
    if (sameAs.length) o.sameAs = sameAs;
    var s = document.createElement("script");
    s.type = "application/ld+json"; s.textContent = JSON.stringify(o);
    document.head.appendChild(s);
  }

  /* ---------- custom bouquet form ---------- */
  function buildMessage(form) {
    var fd = new FormData(form);
    var choc = fd.getAll("choc");
    var lines = [
      "Hi " + S.name + "! I'd like to enquire about a customised chocolate bouquet.",
      "",
      "Chocolates: " + (choc.length ? choc.join(", ") : "Not decided yet"),
      "Wrapping: " + fd.get("wrap"),
      "Ribbon: " + fd.get("ribbon"),
      "Occasion: " + fd.get("occasion")
    ];
    if (fd.get("date")) lines.push("Needed by: " + fd.get("date"));
    if (fd.get("budget")) lines.push("Budget: " + String(fd.get("budget")).trim());
    if (fd.get("notes")) lines.push("Message / notes: " + String(fd.get("notes")).trim());
    if (fd.get("name")) lines.push("", "Name: " + String(fd.get("name")).trim());
    return lines.join("\n");
  }

  function initForm() {
    var form = $("#customForm"), err = $("#formError"), cone = $("#cone");
    form.addEventListener("change", function (e) {
      if (e.target.name === "wrap") cone.style.setProperty("--wrap", e.target.dataset.c);
      if (e.target.name === "ribbon") cone.style.setProperty("--rib", e.target.dataset.c);
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements.name.value.trim();
      if (!name) { err.hidden = false; err.textContent = "Please enter your name so we know who to reply to."; form.elements.name.focus(); return; }
      err.hidden = true;
      window.open(waUrl(buildMessage(form)), "_blank", "noopener");
    });
    $("#copyMsg").addEventListener("click", function (e) {
      var b = e.currentTarget, text = buildMessage(form);
      var done = function () { b.textContent = "Copied ✓"; setTimeout(function () { b.textContent = "Copy message"; }, 1800); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () { window.prompt("Copy your message:", text); });
      else window.prompt("Copy your message:", text);
    });
  }

  /* ---------- nav ---------- */
  function initNav() {
    var t = $("#navToggle"), nav = $("#mainNav"), h = $("#siteHeader");
    function set(open) {
      nav.classList.toggle("open", open);
      t.setAttribute("aria-expanded", open ? "true" : "false");
      t.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    t.addEventListener("click", function () { set(!nav.classList.contains("open")); });
    nav.addEventListener("click", function (e) { if (e.target.tagName === "A") set(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") set(false); });
    var onScroll = function () { h.classList.toggle("scrolled", window.scrollY > 30); };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- animation ---------- */
  function initAnimation() {
    if (!window.gsap || !window.ScrollTrigger) { document.documentElement.classList.add("no-anim"); return; }
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { document.documentElement.classList.add("no-anim"); return; }
    gsap.registerPlugin(ScrollTrigger);
    var mobile = window.matchMedia("(max-width: 900px)").matches;

    /* hero intro */
    gsap.from(".hero-copy > *", { y: 40, opacity: 0, duration: 1, stagger: .12, ease: "power3.out", delay: .1 });
    gsap.from(".bouquet-3d", { y: 60, opacity: 0, scale: .9, rotationY: -25, duration: 1.4, ease: "power3.out", delay: .2 });

    /* hero mouse / pointer 3D tilt */
    var stage = $("#heroStage"), b = $("#heroBouquet");
    if (stage && b && !mobile) {
      var rx = gsap.quickTo(b, "rotationX", { duration: .7, ease: "power3" });
      var ry = gsap.quickTo(b, "rotationY", { duration: .7, ease: "power3" });
      var gl = gsap.quickTo(".stage-glow", "x", { duration: 1, ease: "power3" });
      $(".hero").addEventListener("pointermove", function (e) {
        var x = e.clientX / window.innerWidth - .5, y = e.clientY / window.innerHeight - .5;
        ry(x * 22); rx(-y * 16); gl(x * -40);
      });
    } else if (b) {
      gsap.to(b, { rotationY: 10, rotationX: -4, duration: 3.2, yoyo: true, repeat: -1, ease: "sine.inOut" });
    }
    gsap.to(".piece", { y: "+=14", duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut", stagger: .4 });

    /* hero parallax on scroll */
    gsap.to(".hero-bg .orb", { yPercent: -25, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.to("#heroBouquet", { yPercent: -6, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

    /* pinned scroll story: bouquet rotates & moves toward camera, chocolates float into place */
    var tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: { trigger: ".story", start: "top top", end: mobile ? "+=130%" : "+=190%", scrub: .7, pin: ".story-stage", anticipatePin: 1 }
    });
    tl.fromTo(".story-bouquet", { scale: .72, rotationY: -28, z: -240, opacity: .4 }, { scale: 1.12, rotationY: 24, z: 140, opacity: 1, duration: 1 }, 0);
    $$(".chip").forEach(function (c, i) {
      var dir = i % 2 ? 1 : -1;
      tl.from(c, { x: dir * (120 + i * 30), y: (i % 3 - 1) * 160, rotation: dir * 140, scale: .2, opacity: 0, duration: .45, ease: "power2.out" }, .05 + i * .07);
      tl.to(c, { y: "-=18", rotation: "+=10", duration: .4 }, .6 + i * .05);
    });
    tl.fromTo(".cap1", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .15 }, .05)
      .to(".cap1", { opacity: 0, y: -20, duration: .12 }, .33)
      .fromTo(".cap2", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .15 }, .38)
      .to(".cap2", { opacity: 0, y: -20, duration: .12 }, .66)
      .fromTo(".cap3", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .15 }, .7);
    gsap.to(".story-bg", { xPercent: 8, ease: "none", scrollTrigger: { trigger: ".story", start: "top bottom", end: "bottom top", scrub: true } });

    /* reveals */
    ScrollTrigger.batch(".reveal", {
      start: "top 88%", once: true,
      onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: .9, stagger: .1, ease: "power3.out", overwrite: true }); }
    });

    /* ribbon-like section dividers: gentle parallax on blush sections */
    gsap.utils.toArray(".section-blush, .section-dark").forEach(function (s) {
      gsap.fromTo(s, { backgroundPositionY: "0%" }, { backgroundPositionY: "30%", ease: "none", scrollTrigger: { trigger: s, scrub: true } });
    });

    window.addEventListener("load", function () { ScrollTrigger.refresh(); });
  }

  /* ---------- boot ---------- */
  function boot() {
    document.title = S.name + " | Premium Chocolate Bouquets & Gifts";
    renderProducts(); renderOccasions(); renderSteps(); renderReviews(); renderFaq(); renderContact(); renderSocial();
    injectSchema(); initForm(); initNav();
    $$("#heroImg, #storyImg").forEach(imgFallback);
    bindWhatsApp(document);
    $("#year").textContent = new Date().getFullYear();
    initAnimation();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
