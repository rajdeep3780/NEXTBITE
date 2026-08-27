const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const business = document.getElementById("business").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const whatsappNumber = "916901496852";

    const whatsappMessage =
        `Hello NEXTBITE!%0A%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Business: ${encodeURIComponent(business)}%0A` +
        `Phone: ${encodeURIComponent(phone)}%0A` +
        `Requirement: ${encodeURIComponent(message)}`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
});
// PROJECT BUTTONS

const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const projectName =
            this.closest(".project-card")
                .querySelector("h3")
                .textContent;

        const message =
            `Hello NEXTBITE!%0A%0A` +
            `I want to know more about the ${encodeURIComponent(projectName)} project.`;

        const whatsappNumber = "916901496852";

        const url =
            `https://wa.me/${whatsappNumber}?text=${message}`;

        window.open(url, "_blank");

    });

});
// SCROLL REVEAL

const revealElements = document.querySelectorAll(
    "section, .service-card, .why-card, .work-card, .team-card"
);

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
    revealObserver.observe(element);
});
// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});
// PAGE LOADER

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {
        loader.classList.add("loaded");
    }, 500);

});
// MOBILE MENU


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            navMenu.classList.remove("show");
        });

    });
}