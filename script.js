/* ══════════════════════════════════════
   NIMESH NILAKSHAN – Portfolio Script
══════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {

  /* ───── THEME TOGGLE ───── */

  const html = document.documentElement;
  const themeBtn = document.getElementById("themeBtn");

  // Load saved theme
  const savedTheme = localStorage.getItem("nn-theme") || "dark";

  html.setAttribute("data-theme", savedTheme);

  themeBtn?.addEventListener("click", () => {

    const currentTheme = html.getAttribute("data-theme");

    const newTheme =
      currentTheme === "dark"
        ? "light"
        : "dark";

    html.setAttribute("data-theme", newTheme);

    localStorage.setItem("nn-theme", newTheme);
  });


  /* ───── HAMBURGER MENU ───── */

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger?.addEventListener("click", () => {

    hamburger.classList.toggle("open");

    navLinks.classList.toggle("open");

    document.body.style.overflow =
      navLinks.classList.contains("open")
        ? "hidden"
        : "";

  });


  /* ───── CLOSE MENU WHEN CLICKING LINKS ───── */

  navLinks?.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

      hamburger.classList.remove("open");

      navLinks.classList.remove("open");

      document.body.style.overflow = "";

    });

  });


  /* ───── NAVBAR SCROLL EFFECT ───── */

  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {

    navbar?.classList.toggle(
      "scrolled",
      window.scrollY > 30
    );

    updateActiveNav();

  });


  /* ───── ACTIVE NAV LINK ───── */

  const sections = document.querySelectorAll("section[id]");

  const allNavLinks =
    document.querySelectorAll(".nav-link[data-section]");

  function updateActiveNav() {

    let current = "";

    sections.forEach(sec => {

      if (window.scrollY >= sec.offsetTop - 110) {

        current = sec.id;

      }

    });

    allNavLinks.forEach(link => {

      link.classList.toggle(

        "active",

        link.dataset.section === current

      );

    });

  }


  /* ───── SCROLL REVEAL ───── */

  const revealEls = document.querySelectorAll(

    ".reveal-up, .reveal-left, .reveal-right"

  );

  const revealObs = new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObs.unobserve(entry.target);

        }

      });

    },

    {

      threshold: 0.12,

      rootMargin: "0px 0px -40px 0px"

    }

  );

  revealEls.forEach(el => revealObs.observe(el));


  /* ───── SKILLS TABS ───── */

  const skillTabs =
    document.querySelectorAll(".skill-tab");

  const skillPanels =
    document.querySelectorAll(".skill-panel");

  skillTabs.forEach(tab => {

    tab.addEventListener("click", () => {

      const target = tab.dataset.tab;

      skillTabs.forEach(t =>

        t.classList.remove("active")

      );

      skillPanels.forEach(p =>

        p.classList.remove("active")

      );

      tab.classList.add("active");

      document
        .getElementById("tab-" + target)
        ?.classList.add("active");

    });

  });


  /* ───── PROJECT FILTER ───── */

  const filterBtns =
    document.querySelectorAll(".proj-filter");

  const projCards =
    document.querySelectorAll(".proj-card");

  filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      const filter = btn.dataset.filter;

      filterBtns.forEach(b =>

        b.classList.remove("active")

      );

      btn.classList.add("active");

      projCards.forEach(card => {

        const category =
          card.dataset.category;

        const show =
          filter === "all" ||
          category === filter;

        if (show) {

          card.classList.remove("hidden");

          card.style.animation =
            "fadeSlideIn 0.4s ease forwards";

        }

        else {

          card.classList.add("hidden");

        }

      });

    });

  });


  /* ───── SMOOTH SCROLL ───── */

  document
    .querySelectorAll('a[href^="#"]')

    .forEach(link => {

      link.addEventListener("click", e => {

        const id =
          link.getAttribute("href").slice(1);

        const target =
          document.getElementById(id);

        if (!target) return;

        e.preventDefault();

        const offset =
          target.getBoundingClientRect().top
          + window.scrollY
          - 80;

        window.scrollTo({

          top: offset,

          behavior: "smooth"

        });

      });

    });

});