window.addEventListener("DOMContentLoaded", () => {

    // window.location.href = window.location.href

    mobileMenuState = false

    const btn = document.getElementById("toggler");
    const btnStyle = document.getElementById("togglerStyle");
    const menu = document.getElementById("mobile-menu");

    btn.addEventListener("click", () => {

        if (!mobileMenuState) {

            menu.classList.toggle('scale-y-0')
            mobileMenuState = true
            btnStyle.setAttribute('d', 'M6 18L18 6M6 6l12 12')

        } else {

            menu.classList.toggle('scale-y-0')
            btnStyle.setAttribute('d', 'M4 6h16M4 12h16M4 18h16')
            mobileMenuState = false

        }

    });

    accordion = document.querySelectorAll('#accordion')
    arrowLeft = "M15 19l-7-7 7-7"
    arrowDown = "M19 9l-7 7-7-7"

    accordion.forEach(el => {
        el.parentNode.childNodes[1].addEventListener("click", () => {
            if (!el.parentNode.childNodes[3].event) {
                el.childNodes[1].childNodes[1].setAttribute('d', arrowDown)
                el.parentNode.childNodes[3].classList.toggle('hidden')
                el.parentNode.childNodes[3].event = true
            } else {
                el.childNodes[1].childNodes[1].setAttribute('d', arrowLeft)
                el.parentNode.childNodes[3].classList.toggle('hidden')
                el.parentNode.childNodes[3].event = false
            }
        })
    })

    require('@themesberg/flowbite')

})