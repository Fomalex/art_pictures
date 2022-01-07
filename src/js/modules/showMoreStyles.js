import {getResource} from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const parent = document.querySelector(wrapper),
        button = document.querySelector(trigger);

    //простая подгрузка элементов
    // cards.forEach(item => {
    //     item.classList.add('animated', 'fadeInUp');
    // });
    //
    // button.addEventListener('click', () => {
    //     cards.forEach(item => {
    //         item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     button.classList.add('animated', 'fadeOutUp')
    //     button.style.cursor = 'initial';
    // });

    button.addEventListener('click', function () {
        getResource('assets/db.json')
            // .then(res => res.forEach(item => console.log(item.src)));
            .then(res => createCards(res.styles))
            .catch(err => alert('Что-то пошло не так'));
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
                <div class='styles-block'>
                   <img src=${src} alt>
                   <h4>${title}</h4>
                   <a href="${link}">Подробнее</a>
                </div>
            `
            parent.append(card);
            button.remove();
        });
    }
};

export default showMoreStyles;