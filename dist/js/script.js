if (document.querySelector('body').dataset.id == "main") {
    const left = document.querySelector('.header__left'),
        right = document.querySelector('.header__right'),
        slider = document.querySelector('.header__slider');

    const index = 1;
    function getClassesForSlides() {
        for (i = 0; i < slider.childNodes.length; i++) {

            slider.childNodes[i].className = "";

            slider.childNodes[i].classList.add('header__slide');
            if (i > index || i < index) slider.childNodes[i].classList.add("header__slide-none");
        }
    }

    window.addEventListener('DOMContentLoaded', () => {
        getClassesForSlides();
    });


    left.addEventListener('click', (e) => {
        e.preventDefault();

        left.style.pointerEvents = 'none'
        left.classList.toggle('header__left-active');
        const a = slider.childNodes[slider.childNodes.length - 1];
        const b = slider.childNodes[index - 1];
        slider.insertBefore(a, b);

        getClassesForSlides();
        setTimeout(() => {
            left.classList.toggle('header__left-active');
        }, 250);

        left.style.pointerEvents = 'auto'
    });

    right.addEventListener('click', (e) => {
        e.preventDefault();

        right.style.pointerEvents = 'none'
        right.classList.toggle('header__right-active');
        const a = slider.childNodes[slider.childNodes.length - 1];
        const b = slider.childNodes[index - 1];
        slider.insertBefore(b, a);
        getClassesForSlides();
        setTimeout(() => {
            right.classList.toggle('header__right-active');
        }, 250);

        right.style.pointerEvents = 'auto'
    });


    const newsImg = document.querySelector('.news__img'),
        newsItem = document.querySelectorAll('.news__item'),
        newsContent = document.querySelector('.news__content');

    newsItem.forEach(e, ()=>{
        e.addEventListener('mouseover', () => {

        console.log('пидорас');
    })
    });
}