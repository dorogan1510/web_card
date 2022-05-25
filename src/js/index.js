const reveal = () => {
    // about me animations
    const scrollByElementLeft = document.querySelectorAll('.about-left')
    const scrollByElementRight = document.querySelectorAll('.about-right')

    const cycleForAbout = event => {
        for (var i = 0; i < event.length; i++) {
            const windowHeight = window.innerHeight
            const elementTop = event[i].getBoundingClientRect().top
            const elementVisible = 150

            if (elementTop < windowHeight - elementVisible) {
                event[i].classList.add('__active')
            } else {
                event[i].classList.remove('__active')
            }
        }
    }

    cycleForAbout(scrollByElementLeft)
    cycleForAbout(scrollByElementRight)

    //my services animations
    const individualSessions = document.querySelectorAll('.individual-sessions')
    const consultationForRepetitors = document.querySelectorAll(
        '.consultation-for-repetitors'
    )

    const consultationForSpecificRequests = document.querySelectorAll(
        '.consultation-for-specific-requests'
    )
    const telegramWithHelpfulInformation = document.querySelectorAll(
        '.telegram-with-helpful-information'
    )
    const checklistForCardGames = document.querySelectorAll(
        '.checklist-for-card-games'
    )
    const checklistWithUsefulStuff = document.querySelectorAll(
        '.checklist-with-useful-stuff'
    )
    const telegramWithTextbooksAndMaterilas = document.querySelectorAll(
        '.telegram-with-textbooks-and-materials'
    )

    const cycleForServices = event => {
        for (var i = 0; i < event.length; i++) {
            const windowHeight = window.innerHeight
            const elementTop = event[i].getBoundingClientRect().top
            const elementVisible = 150

            if (elementTop < windowHeight - elementVisible) {
                event[i].classList.add('__animations')
            }
        }
    }

    cycleForServices(individualSessions)
    cycleForServices(consultationForRepetitors)
    cycleForServices(consultationForSpecificRequests)
    cycleForServices(telegramWithHelpfulInformation)
    cycleForServices(checklistForCardGames)
    cycleForServices(checklistWithUsefulStuff)
    cycleForServices(telegramWithTextbooksAndMaterilas)
}

window.addEventListener('scroll', reveal)

// Btn script

const btn = document.getElementById('btn')

const changeBtnDisplay = () => {
    const delayAnimation = () => {
        document.getElementById('btn').style.display = 'none'
    }
    document.getElementById('btn').style.visibility = 'none'

    setTimeout(delayAnimation, 800)

    document.getElementById('btn').style.opacity = '0'
}

const changeContactsDisplay = () => {
    const delayAnimation1 = () => {
        document.querySelector('.contacts').style.display = 'flex'
    }
    const delayAnimation2 = () => {
        document.querySelector('.contacts').style.opacity = '1'
    }
    setTimeout(delayAnimation1, 800)
    setTimeout(delayAnimation2, 1000)
}

btn.addEventListener('click', function () {
    changeContactsDisplay()
    changeBtnDisplay()
})

// reviews script

const revealReviews = () => {
    const cycleForReviews = event => {
        for (var i = 0; i < event.length; i++) {
            const windowHeight = window.innerHeight
            const elementTop = event[i].getBoundingClientRect().top
            const elementVisible = 150

            if (elementTop < windowHeight - elementVisible) {
                event[i].classList.add('__animations')
            }
        }
    }
    const boxLeft = document.querySelectorAll('.box-left')
    const boxRight = document.querySelectorAll('.box-right')

    cycleForReviews(boxLeft)
    cycleForReviews(boxRight)
}
window.addEventListener('scroll', revealReviews)

// Hamburger
function menuOnClick() {
    document.getElementById('menu-bar').classList.toggle('change')
    document.getElementById('menu-nav').classList.toggle('change')
    document.getElementById('menu-bg').classList.toggle('change-bg')
}

document.getElementById('menu-bar').addEventListener('click', menuOnClick)
