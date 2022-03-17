(function() {
    const close = document.querySelector('.modal__close');
    const modal = document.querySelector('.modal');
    const modalOpen = document.querySelector('.modal__open');

    modalOpen.addEventListener('click', () => {
        modal.style.display = 'flex';
        document.body.classList.toggle('content--modal-lock');
        modalOpen.classList.toggle('button--disabled');
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.classList.remove('content--modal-lock');
        modalOpen.classList.remove('button--disabled');
    });
})();