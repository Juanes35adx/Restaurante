const elements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
elements.forEach(el => {
const position = el.getBoundingClientRect().top;
const screen = window.innerHeight;

if(position < screen - 100){
el.style.opacity = 1;
el.style.transform = "translateY(0)";
}
});
});