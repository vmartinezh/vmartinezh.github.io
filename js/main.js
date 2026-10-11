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
  // Canales sin dato configurado no se muestran
  if (!cfg.email) document.querySelectorAll(".js-mail").forEach(function (a) { a.closest("li").remove(); });
  if (!cfg.instagram) document.querySelectorAll(".js-ig").forEach(function (a) { a.closest("li").remove(); });

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

  // ---------- Tema: claro, oscuro (plano azul) o según el sistema ----------
  var root = document.documentElement;
  var themeBtns = document.querySelectorAll("[data-theme-set]");
  function applyTheme(mode) {
    if (mode === "light" || mode === "dark") root.setAttribute("data-theme", mode);
    else root.removeAttribute("data-theme");
    themeBtns.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.themeSet === mode)); });
  }
  var savedTheme = "system";
  try { savedTheme = localStorage.getItem("mh-theme") || "system"; } catch (e) {}
  applyTheme(savedTheme);
  themeBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      var mode = b.dataset.themeSet;
      applyTheme(mode);
      try { if (mode === "system") localStorage.removeItem("mh-theme"); else localStorage.setItem("mh-theme", mode); } catch (e) {}
    });
  });

  // Pestañas accesibles con flechas (sirve para módulos y pasos)
  function tabKeys(tabs, onSelect, vertical) {
    tabs.forEach(function (t, i) {
      t.addEventListener("keydown", function (e) {
        var next = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (e.key === "Home") next = -i;
        if (e.key === "End") next = tabs.length - 1 - i;
        if (next === undefined) return;
        e.preventDefault();
        var j = (i + next + tabs.length) % tabs.length;
        tabs[j].focus();
        onSelect(j);
      });
    });
  }

  // ---------- Módulos de demostración ----------
  var mtabs = Array.prototype.slice.call(document.querySelectorAll(".mtab"));
  var urlEl = document.querySelector(".js-url");
  var URLS = ["catalogo", "reservas", "cotizar", "trabajos"];
  function selectModule(i) {
    mtabs.forEach(function (t, k) {
      var on = k === i;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
    urlEl.textContent = URLS[i];
  }
  mtabs.forEach(function (t, i) { t.addEventListener("click", function () { selectModule(i); }); });
  tabKeys(mtabs, selectModule);

  // A · Catálogo
  var PRODUCTS = [
    { n: "Café de grano 250 g", c: "cafe", d: "Tostado medio" },
    { n: "Café molido 500 g", c: "cafe", d: "Para cafetera" },
    { n: "Torta mil hojas", c: "dulce", d: "Para 12 personas" },
    { n: "Kuchen de nuez", c: "dulce", d: "Receta de la casa" },
    { n: "Caja regalo café", c: "regalo", d: "Café + taza" },
    { n: "Caja dulce sorpresa", c: "regalo", d: "Para cumpleaños" }
  ];
  var catGrid = document.getElementById("cat-grid");
  var catEmpty = document.getElementById("cat-empty");
  var catNote = document.getElementById("cat-note");
  var catQ = document.getElementById("cat-q");
  var catCat = "all";
  function norm(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function renderCat() {
    var q = norm(catQ.value.trim());
    var list = PRODUCTS.filter(function (p) {
      return (catCat === "all" || p.c === catCat) && (!q || norm(p.n + " " + p.d).indexOf(q) > -1);
    });
    catGrid.innerHTML = "";
    list.forEach(function (p, k) {
      var li = document.createElement("li");
      li.className = "prod";
      li.style.animationDelay = (k * 40) + "ms";
      li.innerHTML = '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#g-' + (p.c === "cafe" ? "cafe" : p.c === "dulce" ? "dulce" : "regalo") + '"/></svg>' +
        "<h4></h4><small></small>" + '<button type="button" aria-pressed="false">Pedir</button>';
      li.querySelector("h4").textContent = p.n;
      li.querySelector("small").textContent = p.d;
      li.querySelector("button").addEventListener("click", function (e) {
        catGrid.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        e.currentTarget.setAttribute("aria-pressed", "true");
        catNote.textContent = "En tu sitio se abriría WhatsApp con: “Hola, quiero pedir " + p.n + "”.";
      });
      catGrid.appendChild(li);
    });
    catEmpty.hidden = list.length > 0;
  }
  catQ.addEventListener("input", renderCat);
  document.querySelectorAll(".cat__filters .pill").forEach(function (b, _, all) {
    b.addEventListener("click", function () {
      all.forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
      b.setAttribute("aria-pressed", "true");
      catCat = b.dataset.cat;
      renderCat();
    });
  });
  renderCat();

  // B · Agenda
  var DAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  var DAYS_LONG = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  var TIMES = ["09:00", "10:30", "12:00", "15:00", "16:30", "18:00"];
  var agDays = document.getElementById("ag-days");
  var agTimes = document.getElementById("ag-times");
  var agSum = document.getElementById("ag-sum");
  var agOk = document.getElementById("ag-ok");
  var agTicket = document.querySelector(".agenda__ticket");
  var agPick = { day: null, time: null };
  var d0 = new Date();
  var days = [];
  for (var k = 1; days.length < 5; k++) {
    var dt = new Date(d0.getFullYear(), d0.getMonth(), d0.getDate() + k);
    if (dt.getDay() !== 0) days.push(dt);
  }
  function busy(dayIdx, tIdx) { return ((dayIdx * 7 + tIdx * 3) % 5) === 0; } // ocupación de ejemplo, estable
  function updateTicket() {
    agTicket.classList.remove("is-done");
    if (agPick.day === null) { agSum.textContent = "Elige un día y una hora."; agOk.disabled = true; return; }
    var d = days[agPick.day];
    var label = DAYS_LONG[d.getDay()] + " " + d.getDate();
    agSum.textContent = agPick.time === null ? label.charAt(0).toUpperCase() + label.slice(1) + " · falta la hora" : label.charAt(0).toUpperCase() + label.slice(1) + " a las " + TIMES[agPick.time];
    agOk.textContent = "Confirmar reserva";
    agOk.disabled = agPick.time === null;
  }
  function renderTimes() {
    agTimes.innerHTML = "";
    TIMES.forEach(function (t, i) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "pill"; b.textContent = t;
      var isBusy = agPick.day === null || busy(agPick.day, i);
      b.disabled = isBusy;
      if (agPick.day !== null && busy(agPick.day, i)) b.setAttribute("aria-label", t + ", ocupado");
      b.setAttribute("aria-pressed", String(agPick.time === i));
      b.addEventListener("click", function () { agPick.time = i; renderTimes(); updateTicket(); });
      agTimes.appendChild(b);
    });
  }
  days.forEach(function (d, i) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "pill";
    b.innerHTML = "<span></span><b></b>";
    b.firstChild.textContent = DAYS[d.getDay()];
    b.lastChild.textContent = d.getDate();
    b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", function () {
      agDays.querySelectorAll(".pill").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
      b.setAttribute("aria-pressed", "true");
      agPick.day = i; agPick.time = null;
      renderTimes(); updateTicket();
    });
    agDays.appendChild(b);
  });
  renderTimes();
  agOk.addEventListener("click", function () {
    agTicket.classList.add("is-done");
    agSum.textContent = "¡Reservado! " + agSum.textContent + ". (Demostración: en tu sitio llegaría un aviso a tu correo o WhatsApp.)";
    agOk.textContent = "Reserva confirmada";
    agOk.disabled = true;
  });

  // C · Cotizador por pasos (real: envía la solicitud por WhatsApp)
  var wiz = document.getElementById("wiz");
  var wizStep = 1;
  var wizSteps = wiz.querySelectorAll("[data-step]");
  var wizProg = document.querySelectorAll(".wiz__progress li");
  var wizBack = document.getElementById("wiz-back");
  var wizNext = document.getElementById("wiz-next");
  var wizErr = document.getElementById("wiz-err");
  var wizSum = document.getElementById("wiz-sum");
  function wizData() {
    var tipo = wiz.querySelector('input[name="tipo"]:checked');
    var plazo = wiz.querySelector('input[name="plazo"]:checked');
    var extras = Array.prototype.map.call(wiz.querySelectorAll('input[name="extra"]:checked'), function (x) { return x.value; });
    return { tipo: tipo && tipo.value, plazo: plazo && plazo.value, extras: extras };
  }
  function showWiz() {
    wizSteps.forEach(function (s) { s.hidden = Number(s.dataset.step) !== wizStep; });
    wizProg.forEach(function (li, i) {
      li.classList.toggle("is-on", i + 1 <= Math.min(wizStep, 3));
      li.classList.toggle("is-done", i + 1 < wizStep);
    });
    wizBack.hidden = wizStep === 1;
    wizNext.textContent = wizStep === 3 ? "Ver resumen" : wizStep === 4 ? "Enviar por WhatsApp" : "Siguiente";
    wizErr.hidden = true;
    if (wizStep === 4) {
      var d = wizData();
      wizSum.innerHTML = "";
      [["Sitio", d.tipo], ["Extras", d.extras.length ? d.extras.join(", ") : "Ninguno por ahora"], ["Plazo", d.plazo]].forEach(function (r) {
        var li = document.createElement("li");
        li.innerHTML = "<b></b><span></span>";
        li.firstChild.textContent = r[0];
        li.lastChild.textContent = r[1];
        wizSum.appendChild(li);
      });
    }
  }
  wiz.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = wizData();
    if (wizStep === 1 && !d.tipo) { wizErr.textContent = "Elige un tipo de sitio para seguir."; wizErr.hidden = false; return; }
    if (wizStep === 3 && !d.plazo) { wizErr.textContent = "Elige un plazo para ver el resumen."; wizErr.hidden = false; return; }
    if (wizStep === 4) {
      var text = "Hola MH Digital Studio, quiero cotizar:\n• Sitio: " + d.tipo + "\n• Extras: " + (d.extras.length ? d.extras.join(", ") : "ninguno por ahora") + "\n• Plazo: " + d.plazo;
      window.open(waUrl(text), "_blank", "noopener");
      return;
    }
    wizStep++;
    showWiz();
  });
  wizBack.addEventListener("click", function () { wizStep--; showWiz(); });

  // D · Antes y después
  var cmp = document.getElementById("compare");
  var cmpRange = document.getElementById("cmp-range");
  cmpRange.addEventListener("input", function () { cmp.style.setProperty("--pos", cmpRange.value + "%"); });

  // ---------- Carrusel de proyectos ----------
  var track = document.getElementById("car-track");
  var slides = Array.prototype.slice.call(track.children);
  var dots = Array.prototype.slice.call(document.querySelectorAll("#car-dots .dot"));
  var carLive = document.getElementById("car-live");
  var cur = 0;
  function goSlide(i, announce) {
    cur = (i + slides.length) % slides.length;
    track.style.transform = "translateX(" + (-100 * cur) + "%)";
    slides.forEach(function (s, k) {
      var on = k === cur;
      s.setAttribute("aria-hidden", String(!on));
      s.querySelectorAll("a").forEach(function (a) { a.tabIndex = on ? 0 : -1; });
      var img = s.querySelector("img");
      if (on && img) img.loading = "eager";
    });
    dots.forEach(function (d, k) { d.setAttribute("aria-pressed", String(k === cur)); });
    if (announce) carLive.textContent = "Proyecto " + (cur + 1) + " de " + slides.length + ": " + slides[cur].querySelector("h3").textContent;
  }
  document.getElementById("car-prev").addEventListener("click", function () { goSlide(cur - 1, true); });
  document.getElementById("car-next").addEventListener("click", function () { goSlide(cur + 1, true); });
  dots.forEach(function (d, k) { d.addEventListener("click", function () { goSlide(k, true); }); });
  var carousel = document.getElementById("carousel");
  carousel.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") goSlide(cur - 1, true);
    if (e.key === "ArrowRight") goSlide(cur + 1, true);
  });
  var x0 = null;
  carousel.addEventListener("pointerdown", function (e) { x0 = e.clientX; });
  carousel.addEventListener("pointerup", function (e) {
    if (x0 === null) return;
    var dx = e.clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) goSlide(cur + (dx < 0 ? 1 : -1), true);
  });
  goSlide(0, false);

  // ---------- Instrucciones de armado (pasos interactivos) ----------
  var STEPS = [
    { t: "Conversamos", d: "Me cuentas qué necesitas, para quién es y cómo trabajas hoy. Sin tecnicismos.", g: "una idea clara de qué conviene y qué no." },
    { t: "Propuesta", d: "Te envío por escrito el alcance, el plazo y el valor. Si el presupuesto es ajustado, vemos una versión por etapas.", g: "una propuesta formal para decidir con calma." },
    { t: "Partimos", d: "Con el 50% de abono reservo el tiempo y comenzamos el trabajo.", g: "fecha de inicio y calendario de avances." },
    { t: "Ajustes", d: "Ves avances reales, opinas y ajustamos. Incluye dos rondas de cambios.", g: "lo que pediste, revisado contigo." },
    { t: "Entrega", d: "Publicamos, pagas el 50% restante y te enseño a usar y actualizar lo que hicimos.", g: "todo funcionando y en tus manos." }
  ];
  var tsteps = Array.prototype.slice.call(document.querySelectorAll(".tstep"));
  var spanel = document.getElementById("sp");
  var build = document.getElementById("build");
  var buildCap = document.getElementById("build-cap");
  var CAPS = ["Piezas sueltas, recién conversadas", "Plano listo: cada pieza tiene su lugar", "Comienza el armado: primera pieza en su lugar", "Ajustes: todas las piezas encajan", "Entregado: todo funcionando"];
  var trackFill = document.getElementById("track-fill");
  var curStep = 0;
  function goStep(i) {
    curStep = (i + STEPS.length) % STEPS.length;
    tsteps.forEach(function (t, k) {
      var on = k === curStep;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      t.classList.toggle("is-past", k < curStep);
    });
    trackFill.style.width = (curStep / (STEPS.length - 1) * 100) + "%";
    var s = STEPS[curStep];
    spanel.setAttribute("aria-labelledby", tsteps[curStep].id);
    document.getElementById("sp-n").textContent = curStep + 1;
    document.getElementById("sp-title").textContent = s.t;
    document.getElementById("sp-desc").textContent = s.d;
    document.getElementById("sp-get").textContent = s.g;
    build.setAttribute("data-stage", curStep + 1);
    buildCap.textContent = "Fig. 4 · " + CAPS[curStep];
    spanel.classList.remove("is-swap");
    void spanel.offsetWidth;
    spanel.classList.add("is-swap");
  }
  var playBtn = document.getElementById("steps-play");
  var playTimer = null;
  function stopPlay() {
    clearInterval(playTimer); playTimer = null;
    playBtn.setAttribute("aria-pressed", "false");
    playBtn.querySelector("span").textContent = "Ver recorrido";
  }
  playBtn.addEventListener("click", function () {
    if (playTimer) { stopPlay(); return; }
    playBtn.setAttribute("aria-pressed", "true");
    playBtn.querySelector("span").textContent = "Pausar";
    goStep(0);
    playTimer = setInterval(function () {
      if (curStep === STEPS.length - 1) { stopPlay(); return; }
      goStep(curStep + 1);
    }, 2600);
  });
  tsteps.forEach(function (t, k) { t.addEventListener("click", function () { stopPlay(); goStep(k); }); });
  tabKeys(tsteps, function (j) { stopPlay(); goStep(j); });
  document.getElementById("sp-prev").addEventListener("click", function () { stopPlay(); goStep(curStep - 1); });
  document.getElementById("sp-next").addEventListener("click", function () { stopPlay(); goStep(curStep + 1); });
  goStep(0);
  spanel.classList.remove("is-swap");
})();
