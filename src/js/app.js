// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/ false || !!document.documentMode;



window.addEventListener("DOMContentLoaded", () => {

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
    const menu = document.getElementById("mobile-menu");

    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

    require('@themesberg/flowbite') 
})