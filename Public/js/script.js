let nav = document.querySelector("nav");
window.addEventListener("scroll", (e) => {
    nav.classList.toggle("sticky", scrollY > 0)
})