const slides = document.querySelectorAll('.slide')
const bulets = document.querySelectorAll('.bulet')
let previos = document.querySelector('.pre i')
let next = document.querySelector('.next i')
let currentSlide
const changeSlider = () => {

    slides.forEach((slide, index) => {
        currentSlide = slide.classList.contains('active') ? index : currentSlide

    })
    slides[currentSlide].classList.remove('active')
    bulets[currentSlide].classList.remove('active2')

    //currentSlide===(slides.length-1) ? slides[0].classList.add('active') : slides[currentSlide + 1].classList.add('active')

    if (currentSlide === (slides.length - 1)) {

        slides[0].classList.add('active')
        bulets[0].classList.add('active2')

    } else {

        slides[currentSlide + 1].classList.add('active')
        bulets[currentSlide + 1].classList.add('active2')
    }

}

let interval = setInterval(changeSlider, 5000)

const previosf = () => {
    clearInterval(interval)

    slides.forEach(slide => slide.classList.remove('active'))
    bulets.forEach(bulet => bulet.classList.remove('active2'))
    if (currentSlide === 0) {
        slides[slides.length - 1].classList.add('active')
        bulets[bulets.length - 1].classList.add('active2')
        currentSlide = slides.length - 1
    } else {
        slides[currentSlide - 1].classList.add('active')
        bulets[currentSlide - 1].classList.add('active2')
        currentSlide = currentSlide - 1
    }
    interval = setInterval(changeSlider, 5000)
}



const nextf = () => {
    clearInterval(interval)

    slides.forEach(slide => slide.classList.remove('active'))
    bulets.forEach(bulet => bulet.classList.remove('active2'))

    if (currentSlide === (slides.length - 1)) {
        slides[0].classList.add('active')
        bulets[0].classList.add('active2')
        currentSlide = 0
    } else {
        slides[currentSlide + 1].classList.add('active')
        bulets[currentSlide + 1].classList.add('active2')
        currentSlide = currentSlide + 1
    }
    interval = setInterval(changeSlider, 5000)
}


previos.addEventListener('click', previosf)
next.addEventListener('click', nextf)


bulets.forEach((bulet, bi) => {

    bulet.addEventListener('click', function () {
        clearInterval(interval)


        bulets.forEach(bulet => bulet.classList.remove('active2'))
        slides.forEach(slide => slide.classList.remove('active'))



        slides[bi].classList.add('active')


        this.classList.add('active2')


        currentSlide = bi
        interval = setInterval(changeSlider, 5000)
    })

})