const sliders = (slides, dir, prev, next) => {
    let slideIndex = 1,
        paused = false;

    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch (e) {
    }

    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(function () {
                plusSlides(1);
                items[slideIndex - 1].classList.add('rotateInUpLeft');
            }, 4000);
        } else {
            paused = setInterval(function () {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 4000);
        }
    }

    activateAnimation();

    //Если пользователь наводит мышь, то интервал очистится и автом.перелистывание перестанет происх.
    items[0].parentElement.addEventListener('mouseenter', ()=> {
        clearInterval(paused);
    });

    //Когда пользователь уберёт мышь с области слайдера, авт. перелистывание продолжится
    items[0].parentElement.addEventListener('mouseleave', ()=> {
        activateAnimation();
    });
};

export default sliders;