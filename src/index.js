//########### === === === CONST === === === ########### //

const layout = document.querySelector('.layout-fill');
const widget = document.querySelector('.widget');
const datePoints = document.querySelectorAll('.date-point');
const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const dialog = document.getElementById("modal_register")
const showBtn = document.getElementById("show")
const hideBtn = document.getElementById('hide')
let modalBtn = [showBtn, hideBtn]
const  path = window.location.pathname;
const parts = path.split('/');
const  fileName = parts[parts.length - 1];

//########### === === === LISTENERS === === === ########### //

// Écouteur pour l'événement DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(e) {

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menu.classList.remove("show")
        }
    })


   fileName === "index.html" ? window.addEventListener('scroll', handleScrollTimeLine) :  modalBtn.forEach((btn) => btn.addEventListener('click', handleDisplayModal))





});


//########### === === === FUNCTIONS === === === ########### //
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

                  if (datePoint.classList.contains('active') && (window.innerWidth <=320)) {
                      dateElementToStyle.style.transform = 'translateX(-325px)'
                      dateElementToStyle.style.opacity = 1
                  }
                  else if((datePoint.classList.contains('active') && (window.innerWidth <=768))){
                      dateElementToStyle.style.transform = 'translateX(-350px)'
                      dateElementToStyle.style.opacity = 1
                  }
                  else if((datePoint.classList.contains('active') && (window.innerWidth <=1024))){
                      dateElementToStyle.style.transform = 'translateX(-600px)'
                      dateElementToStyle.style.opacity = 1
                  }
                  else if((datePoint.classList.contains('active') && (window.innerWidth >= 1440))){
                      dateElementToStyle.style.transform = 'translateX(-600px)'
                      dateElementToStyle.style.opacity = 1
                  }
              } else {
                  datePoint.classList.remove('active');
                  if (!datePoint.classList.contains('active')) {
                      dateElementToStyle.style.transform = 'translateX(200px)'
                  }
              }
          });
          if (fillPercent < 5) {
              datePoints[0].classList.remove('active')
              document.getElementById('1918').style.transform = "translateX(200px)"
          }
      }


}
function handleDisplayModal(e){
    if(e.target.id === 'show'){
        dialog.show()
        dialog.classList.add("forModalSettings")
    }
    else {
        dialog.close()
        dialog.classList.remove("forModalSettings")

    }

}




