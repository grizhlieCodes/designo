const burger = document.querySelector('.menu-button')
const spans = Array.from(burger.querySelectorAll('span'))
const disNone = Array.from(document.querySelectorAll('.dis-none'))
console.log(disNone)



burger.addEventListener('click', () => {

    spans.forEach(span => {
        span.classList.toggle('clicked')
    })

    disNone.forEach(el => {
        el.classList.toggle('dis-full')
    })
    
})
