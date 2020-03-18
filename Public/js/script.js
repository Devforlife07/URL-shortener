let nav = document.querySelector("nav");
window.addEventListener("scroll", e => {
    nav.classList.toggle("sticky", scrollY > 0);
});
let inp = document.querySelector("input");
document.querySelector("button").addEventListener("click", () => {
    inp.value = "http://" + inp.value;
})