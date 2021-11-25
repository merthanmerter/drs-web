// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/ false || !!document.documentMode;



window.addEventListener("DOMContentLoaded", () => {


    mobileMenuState = false

    if (isFirefox || isIE) {

        document.getElementsByName('fixMozBlurNav')[0].classList.replace('bg-opacity-75', 'bg-opacity-100')
    }

    let swiper = new Swiper(".Swiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    const btn = document.getElementById("toggler");
    const btnStyle = document.getElementById("togglerStyle");
    const menu = document.getElementById("mobile-menu");

    btn.addEventListener("click", () => {

        if (!mobileMenuState) {
            
            menu.classList.toggle('scale-y-0')
            menu.classList.toggle('text-white')
            mobileMenuState = true
            btnStyle.setAttribute('d', 'M6 18L18 6M6 6l12 12')

        } else {

            menu.classList.toggle('scale-y-0')
            menu.classList.toggle('text-white')
            btnStyle.setAttribute('d', 'M4 6h16M4 12h16M4 18h16')
            mobileMenuState = false
            
        }

    });

    require('@themesberg/flowbite')
})