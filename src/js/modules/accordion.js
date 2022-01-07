const accordion = (triggersSelector) => {
    const buttons = document.querySelectorAll(triggersSelector);

    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            buttons.forEach(item => {
                item.classList.remove('active-style');
                item.nextElementSibling.style.maxHeight = '0px';
                item.nextElementSibling.classList.remove('active-content');
            });
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 +'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });


    // blocks.forEach(item => {
    //     item.classList.add('animated', 'fadeInDown');
    // });
    //
    // buttons.forEach(btn => {
    //    btn.addEventListener('click', function () {
    //        if (!this.classList.contains('active')) {
    //            buttons.forEach(btn => {
    //                btn.classList.remove('active', 'active-style');
    //            });
    //            this.classList.add('active', 'active-style');
    //        }
    //    });
    // });
};

export default accordion;