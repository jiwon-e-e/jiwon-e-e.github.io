// ============================================================
// Portfolio — 권지원
// Subtle scroll reveal + nav shadow on scroll
// ============================================================

(function () {
    "use strict";

    // Nav border-on-scroll
    var nav = document.querySelector(".nav");
    if (nav) {
        var onScroll = function () {
            if (window.scrollY > 8) nav.classList.add("scrolled");
            else nav.classList.remove("scrolled");
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
    }

    // Scroll reveal via IntersectionObserver
    var targets = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && targets.length) {
        var io = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (e) {
                    if (e.isIntersecting) {
                        e.target.classList.add("in");
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        targets.forEach(function (t) {
            io.observe(t);
        });
    } else {
        targets.forEach(function (t) {
            t.classList.add("in");
        });
    }
})();
