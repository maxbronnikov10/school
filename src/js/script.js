if (document.querySelector('body').dataset.id == "main") {
    const left = document.querySelector('.header__left'),
        right = document.querySelector('.header__right'),
        slider = document.querySelector('.header__slider');

    function getClassesForSlides() {
        for (i = 0; i < slider.childNodes.length; i++) {

            slider.childNodes[i].className = "";

            slider.childNodes[i].classList.add('header__slide');
            if (i > 1 || i < 1) slider.childNodes[i].classList.add("header__slide-none");
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
        const b = slider.childNodes[0];
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
        const a = slider.childNodes[slider.childNodes.length];
        const b = slider.childNodes[0];
        slider.insertBefore(b, a);
        getClassesForSlides();
        setTimeout(() => {
            right.classList.toggle('header__right-active');
        }, 250);

        right.style.pointerEvents = 'auto'
    });
}
if (document.querySelector('body').dataset.id == "main" || document.querySelector('body').dataset.id == "news") {
    const newsItem = document.querySelectorAll('.news__item');

    function toggleClasses(e) {
        e.childNodes[0].classList.toggle('news__img-active');
        e.childNodes[1].classList.toggle('news__content-active');
    }
    newsItem.forEach(e => {
        e.addEventListener('mouseover', () => {
            toggleClasses(e);
        });
        e.addEventListener('mouseout', () => {
            toggleClasses(e);
        })
    });
}

if (document.querySelector('body').dataset.id == "soldiers") {
    const card = document.querySelectorAll(".soldiers__card");

    card.forEach((e) => {
        e.addEventListener("click", () => {
            e.childNodes[1].classList.toggle("soldiers__card-back-active");
        });
    });
    const link = document.querySelectorAll(".soldiers__card a[href='soldiersCard.html']");
    link.forEach(e => {
        e.addEventListener('click', (event) => {
            if (!e.parentNode.parentNode.classList.contains("soldiers__card-back-active")) {
                event.preventDefault();
            }
        });
    })

}
if (document.querySelector('body').dataset.id == "soldiersCard") {
    const catalogOptions = document.querySelectorAll(".card__options-item");
    const img = document.querySelector(".card__img").childNodes[0];
    window.addEventListener('DOMContentLoaded', () => {
        getClassForCardOptions(catalogOptions, 0);
        document.querySelector(".card__img").classList.toggle("card__img-active");
    });
    catalogOptions.forEach((e, i) => {
        e.addEventListener("click", () => {
            document.querySelector(".card__img").classList.toggle("card__img-active");

            setTimeout(() => {
                getClassForCardOptions(catalogOptions, i);
                let src = e.childNodes[0].src;
                img.src = src;
                document.querySelector(".card__img").classList.toggle("card__img-active");
            }, 500);
        });
    });

    function getClassForCardOptions(obj, index) {
        for (let i = 0; i < obj.length; i++) {
            obj[i].className = "";
            obj[i].classList.add("card__options-item");
            if (i == index) {
                obj[i].classList.add("card__options-item-hidden");
                setTimeout(function () { obj[i].classList.add("card__options-item-active"); }, 50);
            }
        }
    }
}