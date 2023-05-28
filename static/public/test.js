/* Navigation Menu */
var nav = document.querySelector('.header__nav__content');
var hamburger_menu = document.querySelector('.hamburger-menu-wrap')
var close_icon = document.querySelector('.nav-close-icon');
hamburger_menu.addEventListener('click', (event) => {
    nav.classList.add('open')
});
close_icon.addEventListener('click', (event) => {
    nav.classList.remove('open')
})

/* How To Works Section */

const worksSection = document.querySelector('.works__content');
const progressbar = worksSection.querySelector('.form_progressbar');
const progressbarSteps = progressbar.querySelectorAll('.progressbar__step')
const firstStep = worksSection.querySelector('.first_step')

progressbar.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName == "LI") {
        const dataStep = event.target.getAttribute('data-step');
        for (let index = dataStep - 1; index < progressbarSteps.length; index++) {
            progressbarSteps[index].classList.remove('active');
        }
        for (let index = dataStep - 1; index > 0; index--) {
            progressbarSteps[index].classList.add('active');
        }
        event.target.classList.add('active')
        firstStep.style.marginLeft = `-${(dataStep-1)*100}%`
    }
});

/* End How To Works Section */


/*Testimonial Section */

const testimonialsSection = document.querySelector('.testimonials__content');
const testimonialContainer = testimonialsSection.querySelector('.testimonials__list')
const nextBtn = testimonialsSection.querySelector('.btn__testimonials__next');
const prevBtn = testimonialsSection.querySelector('.btn__testimonials__prev');

const testimonials = testimonialContainer.querySelectorAll('.testimonial')
let testimonialsWidth, testimonialWidth;
let testimonialIndex = 0;
const gridGap = 25;
let limit = getLimit();


window.addEventListener("resize", () => {
    limit = getLimit();
})
checkLimitForBtnStatus()
nextBtn.addEventListener('click', moveToNextSlide)
prevBtn.addEventListener('click', moveToPrevSlide)


function moveToNextSlide() {
    if (!isContinue({ direction: true })) return;
    testimonialIndex++;
    testimonialContainer.style.transform = `translateX(${-testimonialWidth * testimonialIndex}px)`
    testimonialContainer.style.transition = ".7s"
}

function moveToPrevSlide() {
    if (!isContinue({ direction: false })) return;
    testimonialIndex--;
    testimonialContainer.style.transform = `translateX(${-testimonialWidth * testimonialIndex}px)`
    testimonialContainer.style.transition = ".7s"
}

const isContinue = (args) => {
    if (args.direction) {
        if (testimonialIndex < limit) {
            checkTestimonialFinish(args.direction, nextBtn, prevBtn)
            return true;
        } else {
            updateBtnStatus(nextBtn, true)
            updateBtnStatusByLimit(prevBtn)
            return false;
        }
    } else {
        if (testimonialIndex > 0) {
            checkTestimonialFinish(args.direction, prevBtn, nextBtn)
            return true;
        } else {
            updateBtnStatus(prevBtn, true)
            updateBtnStatusByLimit(nextBtn)
            return false;
        }
    }
}

function getElementsWidth() {
    return [testimonialContainer.clientWidth,
        testimonials[testimonialIndex].clientWidth + gridGap
    ]
}

function getLimit() {
    [testimonialsWidth, testimonialWidth] = getElementsWidth();
    let testimonialCountPerWrap = testimonialsWidth / testimonialWidth
    return Math.round(testimonials.length - testimonialCountPerWrap)
}

function checkLimitForBtnStatus() {
    if (limit == 0) {
        nextBtn.classList.add('disable');
    }
}

function updateBtnStatus(btn, status) {
    if (status) {
        btn.classList.add('disable')
    } else {
        btn.classList.remove('disable')
    }
}

function checkTestimonialFinish(direction, btn1, btn2) {
    const status = direction ? (testimonialIndex + 1 < limit) : (testimonialIndex - 1 > 0)
    if (status) {
        updateBtnStatus(btn1, false)
    } else {
        updateBtnStatus(btn1, true)
    }
    updateBtnStatus(btn2, false)
}

function updateBtnStatusByLimit(btn) {
    if (limit != 0) {
        updateBtnStatus(btn, false)
    }
}


/*End Testimonial Section */