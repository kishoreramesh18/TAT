/* =========================================
   PREVENT BROWSER SCROLL RESTORATION
========================================= */
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

/* =========================================
   PAGE RELOAD LOADER (SAFE & RELIABLE)
========================================= */
const loader = document.getElementById("cubeLoader");

// Ensure loader is visible immediately
if (loader) {
    loader.style.display = "flex";
}

/*
  DOMContentLoaded fires when HTML is ready.
  This guarantees the site will NEVER get stuck
  even if images are slow or broken.
*/
window.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);

    if (loader) {
        loader.style.display = "none";
    }
});

/*
  Backup: hide loader again after full load
  (covers very slow networks)
*/
window.addEventListener("load", () => {
    if (loader) {
        loader.style.display = "none";
    }
});

/* =========================================
   MOBILE MENU (SAFE HANDLING)
========================================= */
const hamburger = document.getElementById("hamburgerBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

// Always keep menu closed on reload
if (mobileMenu) {
    mobileMenu.style.right = "-100%";
}

if (hamburger && mobileMenu) {
    hamburger.onclick = () => {
        mobileMenu.style.right = "0";
    };
}

if (closeBtn && mobileMenu) {
    closeBtn.onclick = () => {
        mobileMenu.style.right = "-100%";
    };
}
