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

    cycleForAbout(scrollByElementLeft)
    cycleForAbout(scrollByElementRight)

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

const changeContactsDisplay = () =>
    (document.querySelector('.contacts').style.display = 'flex')

const changeBtnDisplay = () =>
    (document.getElementById('btn').style.display = 'none')

btn.addEventListener('click', function () {
    changeContactsDisplay()
    changeBtnDisplay()
})
