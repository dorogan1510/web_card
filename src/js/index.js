const reveal = () => {
    const scrollByElementLeft = document.querySelectorAll('.about-left')
    const scrollByElementRight = document.querySelectorAll('.about-right')

    for (var i = 0; i < scrollByElementRight.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = scrollByElementRight[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
            scrollByElementRight[i].classList.add('__active')
        } else {
            scrollByElementRight[i].classList.remove('__active')
        }
    }

    for (var i = 0; i < scrollByElementLeft.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = scrollByElementLeft[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
            scrollByElementLeft[i].classList.add('__active')
        } else {
            scrollByElementLeft[i].classList.remove('__active')
        }
    }
}

window.addEventListener('scroll', reveal)
