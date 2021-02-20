const burger = document.querySelector('.menu-button')
const spans = Array.from(burger.querySelectorAll('span'))
const inactives = Array.from(document.querySelectorAll('.inactive'))






burger.addEventListener('click', () => {

    spans.forEach(span => {
        span.classList.toggle('clicked')
    })

    inactives.forEach(inactive => {
        if (inactive.classList.contains('navigation-links')) {
            inactive.classList.toggle('inactive')
            inactive.classList.toggle('active')
        } else {
            inactive.classList.toggle('inactive')
        }
    })

})




//error message on email 

const error = document.querySelector('.error')
const form = document.querySelector('form')
const email = document.querySelector('#email')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(email.value.length == 0){
        error.classList.add('true')
        error.classList.remove('false')
    } else {
        error.classList.remove('true')
        error.classList.add('false')
    }
})
