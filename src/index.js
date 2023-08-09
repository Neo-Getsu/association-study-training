const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");


//################## Navbar toggle menu
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.remove("show")
    }
})


const layout = document.querySelector('.layout-fill');
const widget = document.querySelector('.widget');
const datePoints = document.querySelectorAll('.date-point');


function handleScrollTimeLine() {
    const widgetTop = widget.getBoundingClientRect().top;
    const threshold = window.innerHeight / 3;


    if (widgetTop <= threshold) {
        const scrollDistance = Math.max(0, threshold - widgetTop);
        const scrollPercent = (scrollDistance / (widget.offsetHeight - threshold)) * 100;
        const fillPercent = Math.min(scrollPercent, 100);
        const fillHeight = (widget.offsetHeight * fillPercent) / 100;
        layout.style.height = `${fillHeight}px`;



        datePoints.forEach(datePoint => {
            const getHistoryDate = `${datePoint.children[0].textContent.split(" ")[0]}`
            const dateElementToStyle = document.getElementById(getHistoryDate)
            const dateTopPercent = parseInt(datePoint.style.top);

            if (scrollPercent >= dateTopPercent) {
                datePoint.classList.add('active');


                if (datePoint.classList.contains('active')) {

                    dateElementToStyle.style.transform = 'translateX(-325px)'
                    dateElementToStyle.style.opacity = 1
                }


            } else {
                console.log(datePoint)
                console.log(fillPercent)


                    datePoint.classList.remove('active');
                    if (!datePoint.classList.contains('active')) {
                        dateElementToStyle.style.transform = 'translateX(200px)'
                    }

            }
        });
        if(fillPercent  < 5 ){
        datePoints[0].classList.remove('active')
        document.getElementById('1918').style.transform = "translateX(200px)"
        }

    }
}

window.addEventListener('scroll', handleScrollTimeLine);





