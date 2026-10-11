(function () {
  "use strict";

  var cfg = window.MH_CONFIG || {};
  var SVC = {
    web: "una página web",
    equipos: "mantención de computadores",
    ti: "correos y consultoría TI",
    seguridad: "seguridad para mi empresa",
    otro: "otra consulta"
  };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function waUrl(text) {
    return "https://wa.me/" + cfg.whatsapp + "?text=" + encodeURIComponent(text);
  }

  // ---------- Contact links ----------
  document.querySelectorAll(".js-wa").forEach(function (a) {
    a.href = waUrl(a.dataset.msg || "Hola MH Digital Studio");
    a.target = "_blank";
    a.rel = "noopener";
  });
  document.querySelectorAll(".js-mail").forEach(function (a) {
    a.href = "mailto:" + cfg.email + "?subject=" + encodeURIComponent("Consulta desde el sitio web");
  });
  document.querySelectorAll(".js-ig").forEach(function (a) {
    a.href = "https://instagram.com/" + cfg.instagram;
  });
  var fmtPhone = String(cfg.whatsapp).replace(/^56(9)(\d{4})(\d{4})$/, "+56 $1 $2 $3");
  document.querySelectorAll(".js-wa-label").forEach(function (el) { el.textContent = fmtPhone; });
  document.querySelectorAll(".js-mail-label").forEach(function (el) { el.textContent = cfg.email; });
  document.querySelectorAll(".js-ig-label").forEach(function (el) { el.textContent = "@" + cfg.instagram; });
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ---------- Mobile nav ----------
  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("nav-links");
  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    links.classList.toggle("is-open", !open);
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      toggle.setAttribute("aria-expanded", "false");
      links.classList.remove("is-open");
    }
  });

  // ---------- Vista explotada: las piezas llegan a su lugar una vez ----------
  var kit = document.getElementById("kit");
  if (!reduceMotion) {
    kit.classList.add("is-apart");
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { kit.classList.remove("is-apart"); });
    });
  }

  // ---------- Selector de pieza (firma: la pieza elegida entra a su lugar) ----------
  var heroWa = document.querySelector(".js-hero-wa");
  var heroLabel = document.querySelector(".js-hero-label");
  var chips = document.querySelectorAll(".chip");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var already = chip.getAttribute("aria-pressed") === "true";
      chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
      if (already) {
        kit.removeAttribute("data-active");
        heroWa.href = waUrl("Hola MH Digital Studio, quiero cotizar un servicio.");
        heroLabel.textContent = "Cotizar por WhatsApp";
        return;
      }
      var svc = chip.dataset.svc;
      chip.setAttribute("aria-pressed", "true");
      kit.setAttribute("data-active", svc);
      heroWa.href = waUrl("Hola MH Digital Studio, quiero cotizar " + SVC[svc] + ".");
      heroLabel.textContent = "Cotizar " + chip.dataset.label;
      var sel = document.getElementById("f-svc");
      if (sel) sel.value = svc;
    });
  });

  // ---------- Formulario → WhatsApp ----------
  var form = document.getElementById("contact-form");
  var err = document.getElementById("f-error");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements;
    var name = f.name.value.trim();
    var msg = f.msg.value.trim();
    var missing = [];
    if (!name) missing.push("tu nombre");
    if (!msg) missing.push("qué necesitas");
    f.name.setAttribute("aria-invalid", String(!name));
    f.msg.setAttribute("aria-invalid", String(!msg));
    if (missing.length) {
      err.textContent = "Falta " + missing.join(" y ") + " para armar el mensaje.";
      err.hidden = false;
      (name ? f.msg : f.name).focus();
      return;
    }
    err.hidden = true;
    var text = "Hola MH Digital Studio, soy " + name + ". Te escribo por " + SVC[f.svc.value] + ".\n\n" + msg;
    window.open(waUrl(text), "_blank", "noopener");
  });

  // ---------- Pasos: se trazan las flechas al entrar en pantalla ----------
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -15% 0px" });
    document.querySelectorAll(".steps__list").forEach(function (n) { io.observe(n); });
  }
})();
