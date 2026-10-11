(function () {
  "use strict";

  var cfg = window.MH_CONFIG || {};
  var SVC = {
    web: "una página web",
    equipos: "mantención de mi computador",
    ti: "correos y equipos para mi empresa",
    seguridad: "proteger la información de mi empresa",
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

  // ---------- Skyline ----------
  var NS = "http://www.w3.org/2000/svg";
  var W = 1600, H = 460, GROUND = H;
  var CATS = ["web", "equipos", "ti", "seguridad"];
  var seed = 7;
  function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
  function el(name, attrs, parent) {
    var n = document.createElementNS(NS, name);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }

  function buildSkyline() {
    var svg = el("svg", { viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "xMidYMax slice", class: "city" });

    // Cordillera: cresta irregular con macizos grandes y quiebres finos
    var line = "";
    for (var rx = 0; rx <= W; rx += 16) {
      var ry = 205
        - 70 * Math.sin(rx / 260 + 0.6) * Math.sin(rx / 610 + 1.2)
        - 45 * Math.pow(Math.max(0, Math.sin(rx / 180)), 3)
        + (rnd() - 0.5) * 22;
      line += (line ? " L" : "M") + rx + " " + ry.toFixed(1);
    }
    var ridge = "M0 460 L" + line.slice(1) + " L" + W + " 460Z";
    var defs = el("defs", {}, svg);
    var cp = el("clipPath", { id: "snowline" }, defs);
    el("rect", { x: 0, y: 0, width: W, height: 160 }, cp);
    var haze = el("linearGradient", { id: "haze", x1: 0, y1: 0, x2: 0, y2: 1 }, defs);
    el("stop", { offset: "0", "stop-color": "#3560B8", "stop-opacity": "0" }, haze);
    el("stop", { offset: "1", "stop-color": "#4A73C8", "stop-opacity": "0.55" }, haze);
    el("path", { class: "andes", d: ridge }, svg);
    el("path", { class: "snow", d: line, "clip-path": "url(#snowline)" }, svg);

    var far = el("g", { class: "far" }, svg);
    el("rect", { x: 0, y: 200, width: W, height: 260, fill: "url(#haze)" }, svg);
    var near = el("g", { class: "near" }, svg);
    var winLayer = el("g", { class: "wins" }, svg);
    var windows = [];

    function tower(x, w, h, layer, opts) {
      opts = opts || {};
      var top = GROUND - h;
      if (opts.shape === "costanera") {
        // Torre tipo Costanera: se adelgaza hacia arriba y termina en corona abierta
        el("path", { d: "M" + x + " " + GROUND + " L" + (x + 6) + " " + top + " L" + (x + w - 6) + " " + top + " L" + (x + w) + " " + GROUND + "Z" }, layer);
        el("path", { class: "crown", d: "M" + (x + 6) + " " + top + " L" + (x + 2) + " " + (top - 34) + " M" + (x + w / 2) + " " + top + " L" + (x + w / 2) + " " + (top - 40) + " M" + (x + w - 6) + " " + top + " L" + (x + w - 2) + " " + (top - 34) }, layer);
      } else if (opts.shape === "entel") {
        // Torre tipo Entel: fuste, disco y antena
        el("rect", { x: x, y: top, width: w, height: h }, layer);
        el("rect", { x: x - 6, y: top - 22, width: w + 12, height: 22, rx: 4 }, layer);
        el("rect", { x: x + w / 2 - 2, y: top - 92, width: 4, height: 70 }, layer);
        var beacon = el("circle", { class: "beacon", cx: x + w / 2, cy: top - 94, r: 3.5 }, svg);
        beacon.style.animationDelay = "1.2s";
      } else {
        el("rect", { x: x, y: top, width: w, height: h }, layer);
        if (opts.antenna) el("rect", { x: x + w * 0.7, y: top - 26, width: 3, height: 26 }, layer);
      }
      if (layer !== near) return;
      var inset = opts.shape === "costanera" ? 12 : 7;
      var cols = Math.max(1, Math.floor((w - inset * 2 + 6) / 13));
      var rows = Math.floor((h - 16) / 17);
      var gx = (w - cols * 13 + 6) / 2;
      for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
          if (rnd() < 0.18) continue;
          var wx = x + gx + c * 13, wy = top + 12 + r * 17;
          windows.push({ x: wx, y: wy, cat: CATS[Math.floor(rnd() * 4)], lit: rnd() < 0.42 });
        }
      }
    }

    // Edificios lejanos (sin ventanas)
    var fx = -20;
    while (fx < W) { var fw = 40 + rnd() * 70; tower(fx, fw, 90 + rnd() * 130, far); fx += fw + 4 + rnd() * 10; }

    // Primer plano
    var plan = [
      [10, 70, 150], [86, 52, 210, { antenna: true }], [146, 90, 120], [244, 60, 260], [312, 84, 175],
      [404, 34, 280, { shape: "entel" }], [450, 96, 200], [556, 58, 150], [622, 76, 230, { antenna: true }],
      [706, 64, 140], [776, 92, 190], [876, 54, 250], [938, 80, 160],
      [1026, 70, 390, { shape: "costanera" }], [1104, 62, 210], [1174, 86, 280], [1268, 58, 170, { antenna: true }],
      [1334, 94, 230], [1436, 66, 150], [1510, 88, 200]
    ];
    plan.forEach(function (p) { tower(p[0], p[1], p[2], near, p[3]); });

    windows.forEach(function (wd) {
      wd.node = el("rect", { x: wd.x.toFixed(1), y: wd.y, width: 7, height: 10, class: "w w-" + wd.cat }, winLayer);
    });
    return { svg: svg, windows: windows };
  }

  var host = document.getElementById("skyline");
  var city = buildSkyline();
  host.appendChild(city.svg);

  // Encendido inicial: las ventanas se prenden en oleadas, una sola vez
  var toLight = city.windows.filter(function (w) { return w.lit; });
  if (reduceMotion) {
    toLight.forEach(function (w) { w.node.classList.add("on"); });
  } else {
    toLight.sort(function () { return rnd() - 0.5; });
    var i = 0, start = performance.now(), DUR = 2200;
    (function step(t) {
      var target = Math.min(toLight.length, Math.floor(toLight.length * Math.pow((t - start) / DUR, 0.7)));
      for (; i < target; i++) toLight[i].node.classList.add("on");
      if (i < toLight.length) requestAnimationFrame(step);
    })(start);
  }

  // Reflejo en el río (sección contacto)
  var refl = document.getElementById("reflection");
  if (refl) {
    var copy = city.svg.cloneNode(true);
    var copyWins = copy.querySelectorAll(".w");
    city.windows.forEach(function (w, n) { if (w.lit) copyWins[n].classList.add("on"); });
    refl.appendChild(copy);
  }

  // Ventanas en cada "piso" de servicios
  document.querySelectorAll(".floor__lights").forEach(function (box) {
    var s = el("svg", { viewBox: "0 0 120 40", preserveAspectRatio: "none" });
    for (var r = 0; r < 3; r++) for (var c = 0; c < 9; c++) {
      el("rect", { x: 3 + c * 13, y: 3 + r * 13, width: 8, height: 9, class: "w" + (rnd() < 0.55 ? " on" : "") }, s);
    }
    box.appendChild(s);
  });

  // ---------- Selector de servicio (firma: enciende sus ventanas) ----------
  var heroSection = document.querySelector(".hero");
  var heroWa = document.querySelector(".js-hero-wa");
  var heroLabel = document.querySelector(".js-hero-label");
  var chips = document.querySelectorAll(".chip");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var already = chip.getAttribute("aria-pressed") === "true";
      chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
      if (already) {
        heroSection.removeAttribute("data-active");
        heroWa.href = waUrl("Hola MH Digital Studio, quiero cotizar un servicio.");
        heroLabel.textContent = "Escribir por WhatsApp";
        return;
      }
      chip.setAttribute("aria-pressed", "true");
      heroSection.setAttribute("data-active", chip.dataset.svc);
      heroWa.href = waUrl("Hola MH Digital Studio, quiero cotizar " + SVC[chip.dataset.svc] + ".");
      heroLabel.textContent = "Cotizar " + chip.textContent.toLowerCase();
      var sel = document.getElementById("f-svc");
      if (sel) sel.value = chip.dataset.svc;
    });
  });

  // ---------- Formulario → WhatsApp ----------
  var form = document.getElementById("contact-form");
  var err = document.getElementById("f-error");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.elements.name.value.trim();
    var msg = form.elements.msg.value.trim();
    var missing = [];
    if (!name) missing.push("tu nombre");
    if (!msg) missing.push("qué necesitas");
    form.elements.name.setAttribute("aria-invalid", String(!name));
    form.elements.msg.setAttribute("aria-invalid", String(!msg));
    if (missing.length) {
      err.textContent = "Falta " + missing.join(" y ") + " para armar el mensaje.";
      err.hidden = false;
      (name ? form.elements.msg : form.elements.name).focus();
      return;
    }
    err.hidden = true;
    var text = "Hola MH Digital Studio, soy " + name + ". Te escribo por " + SVC[form.elements.svc.value] + ".\n\n" + msg;
    window.open(waUrl(text), "_blank", "noopener");
  });

  // ---------- Revelado de secciones ----------
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    document.querySelectorAll(".floor, .line").forEach(function (n) { io.observe(n); });
  }
})();
