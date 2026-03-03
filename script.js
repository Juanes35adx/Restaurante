const elements = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("section");

function checkScroll() {

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });

}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);