let nav = document.querySelector("nav");
window.addEventListener("scroll", e => {
    nav.classList.toggle("sticky", scrollY > 0);
});
let inp = document.querySelector("input");
document.querySelector("button").addEventListener("click", (e) => {
    let val = inp.value;
    if (val.includes("http://") || val.includes("https://")) {
        e.preventDefault();
        document.querySelector(".error").classList.toggle("err-rem")
    } else {
        inp.value = "http://" + inp.value;
    }
})