// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/ false || !!document.documentMode;



window.addEventListener("DOMContentLoaded", () => {

    // window.location.href = window.location.href

    mobileMenuState = false

    if (isFirefox || isIE) {

        document.getElementsByName('fixMozBlurNav')[0].classList.replace('bg-opacity-75', 'bg-opacity-100')
    }

    const btn = document.getElementById("toggler");
    const btnStyle = document.getElementById("togglerStyle");
    const menu = document.getElementById("mobile-menu");

    btn.addEventListener("click", () => {

        if (!mobileMenuState) {
            
            // menu.classList.toggle('scale-y-0')
            // menu.classList.toggle('text-white')
            menu.classList.remove('max-h-0')
            menu.classList.add('max-h-screen')
            mobileMenuState = true
            btnStyle.setAttribute('d', 'M6 18L18 6M6 6l12 12')

        } else {

            // menu.classList.toggle('scale-y-0')
            // menu.classList.toggle('text-white')
            menu.classList.add('max-h-0')
            menu.classList.remove('max-h-screen')
            btnStyle.setAttribute('d', 'M4 6h16M4 12h16M4 18h16')
            mobileMenuState = false
            
        }

    });

    require('@themesberg/flowbite')
    
})