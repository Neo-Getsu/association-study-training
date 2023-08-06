const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

window.addEventListener('resize', () => {
    if(window.innerWidth > 768){
        menu.classList.remove("show")
    }
})

