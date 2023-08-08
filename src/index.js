const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");


//################## Navbar toggle menu
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

window.addEventListener('resize', () => {
    if(window.innerWidth > 768){
        menu.classList.remove("show")
    }
})



//################# Mini Date Slider
const dateline = document.querySelector(".date-line")
const leftButton = document.querySelector(".btn-left-sw")
const rightButton = document.querySelector('.btn-right-sw')


console.log(dateline)
console.log(dateline.childNodes)

