window.addEventListener("scroll", function(){
    const headerNav = this.document.getElementById ("header-nav").classList.toggle("headernav-scroll", window.scrollY > 135)
})

$(document).ready(function(){
    $(".owl-carousel-full").owlCarousel({
        margin:20,
        responsive:{ /* по сколько карточек на какой ширине */
            0:{ /* от 0 до 576 будет одна карточка */
                items:1
            },
            576:{/* от 576 до 768 будет две карточки */
                items:2
            },
            768:{ /* от 768 до 1000 будет три карточки */
                items:3
            },
            1000:{
                items:4
            }
        }
    });
  });