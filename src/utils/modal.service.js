export default class ModalService {
    visible = false;

    target = document.getElementsByClassName('modal-content__container')[0];
    modal = document.getElementsByClassName('modal')[0];

    createModal(content) {
        this.target.innerHTML = content;
    }

    showModal() {
        if (!this.target) return;

        this.visible = true;
        this.modal.classList.remove('none');

        this.modal.addEventListener('click', this.handleOutsideClick);
    }

    hideModal() {
        if (!this.target) return;

        this.visible = false;
        this.modal.classList.add('none');

        this.modal.removeEventListener('click', this.handleOutsideClick);
    }

    toggleModal() {
        this.visible ? this.hideModal() : this.showModal();
    }

    handleOutsideClick = (event) => {
        if (!this.target.contains(event.target) && !this.target.classList.contains('modal-content')) {
            this.hideModal();
        }
    };
}
