import { refs } from '../references/references.js';

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);


function onOpenModal() {
    window.addEventListener('keydown', onEscKeyPress)
    document.body.classList.add('show-modal');
}

function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress)
    document.body.classList.remove('show-modal');
}

function onBackdropClick(e) {
    const isTrue = e.currentTarget === e.target;

  if (isTrue) {
    onCloseModal()
  }
};

function onEscKeyPress(e) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = e.code === ESC_KEY_CODE;

    if (isEscKey) {
        onCloseModal()
    }
}