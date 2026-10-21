/* =========================================================
   GEORGE MORENO — Portafolio · interacciones
   Vanilla JS, sin dependencias. Compatible con GitHub Pages.
   ========================================================= */
(function () {
    "use strict";

    const nav = document.getElementById("nav");
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    const links = Array.from(document.querySelectorAll(".nav__link"));
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- Año en el footer ---------- */
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    /* ---------- Estado de la navbar al hacer scroll ---------- */
    const onScroll = () => {
        if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* ---------- Menú móvil ---------- */
    const closeMenu = () => {
        if (!nav) return;
        nav.classList.remove("is-open");
        if (navToggle) {
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute("aria-label", "Abrir menú");
        }
    };

    if (navToggle && nav) {
        navToggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("is-open");
            navToggle.setAttribute("aria-expanded", String(isOpen));
            navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
        });
    }

    // Cierra el menú al navegar o tocar fuera
    links.forEach((l) => l.addEventListener("click", closeMenu));
    document.addEventListener("click", (e) => {
        if (!nav || !nav.classList.contains("is-open")) return;
        if (!nav.contains(e.target)) closeMenu();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });

    /* ---------- Scrollspy: sección activa en la navbar ---------- */
    if ("IntersectionObserver" in window && sections.length) {
        const spy = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const id = entry.target.getAttribute("id");
                    links.forEach((l) =>
                        l.classList.toggle("is-active", l.getAttribute("href") === "#" + id)
                    );
                });
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );
        sections.forEach((s) => spy.observe(s));
    }

    /* ---------- Reveal on scroll ---------- */
    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    if (reduceMotion || !("IntersectionObserver" in window)) {
        revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
        const revealObs = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const el = entry.target;
                    const delay = parseInt(el.getAttribute("data-reveal-delay") || "0", 10);
                    setTimeout(() => el.classList.add("is-visible"), delay);
                    obs.unobserve(el);
                });
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
        );
        revealEls.forEach((el) => revealObs.observe(el));
    }

    /* ---------- Indicador de disponibilidad (configurable) ----------
       Cambia AVAILABLE a false si no estás disponible.
       También respeta data-available="false" definido en el HTML.
    ------------------------------------------------------------------ */
    const AVAILABLE = true;
    const statusDot = document.getElementById("statusDot");
    const statusText = document.getElementById("statusText");
    if (statusDot && statusText) {
        const htmlSaysUnavailable = statusDot.getAttribute("data-available") === "false";
        const available = AVAILABLE && !htmlSaysUnavailable;
        statusDot.setAttribute("data-available", String(available));
        statusText.textContent = available
            ? "Disponible para nuevas oportunidades"
            : "Abierto a conversaciones";
    }
})();
