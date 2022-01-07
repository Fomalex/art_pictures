const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGranddad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no');

    wrapper.style.justifyContent = 'center';

    const typeFilter = (markType) => {
        markAll.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    const removeActiveClass = () => {
        items.forEach(item => item.classList.remove('active'));
    };

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            switch (item) {
                case btnAll:
                    removeActiveClass();
                    typeFilter(markAll);
                    break;
                case btnGirl:
                    removeActiveClass();
                    typeFilter(markGirl);
                    break;
                case btnLovers:
                    removeActiveClass();
                    typeFilter(markLovers);
                    break;
                case btnChef:
                    removeActiveClass();
                    typeFilter(markChef);
                    break;
                case btnGuy:
                    removeActiveClass();
                    typeFilter(markGuy);
                    break;
                case btnGrandmother:
                    removeActiveClass();
                    typeFilter();
                    break;
                case btnGranddad:
                    removeActiveClass();
                    typeFilter();
                    break;
            }
            item.classList.add('active');
        });
    });
};

export default filter;