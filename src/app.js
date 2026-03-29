document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu.classList.toggle("open", !isOpen);
  });

  // Cerrar al pulsar un enlace
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("open");
    });
  });

  // Cerrar con ESC
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      navToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("open");
    }
  });
}
