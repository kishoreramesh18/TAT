document.addEventListener("DOMContentLoaded", function () {

    const mobileMenu = document.getElementById("mobileMenu");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const closeBtn = document.getElementById("closeBtn");

    hamburgerBtn.addEventListener("click", () => {
        mobileMenu.classList.add("open");
        document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
    });

});
