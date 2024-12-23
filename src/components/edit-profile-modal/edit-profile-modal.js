export default function editProfileModal() {
    return `
        <div class="edit-profile-modal__content none">
            <div class="edit-profile-modal__container">
                <div class="edit-profile-modal__left">
                    <div class="edit-profile-modal__photo-wrapper">
                        <img class="edit-profile-modal__image" src="img/profile.png" alt="Profile" />
                    </div>
                    <button class="custom__button">Change photo</button>
                </div>
        
                <div class="edit-profile-modal__right">
                    <form class="edit-profile-modal__form">
                        <div class="edit-profile-modal__unit">
                            <p>User's name</p>
                            <input type="text" class="edit-profile-modal__input">
                        </div>
                        <div class="edit-profile-modal__unit">
                            <p>Location</p>
                            <input type="text" class="edit-profile-modal__input">
                        </div>
                        <div class="edit-profile-modal__unit">
                            <p>Status</p>
                            <input type="text" class="edit-profile-modal__input">
                        </div>
                        <div class="edit-profile-modal__unit">
                            <p>Species</p>
                            <input type="text" class="edit-profile-modal__input">
                        </div>
                    </form>
                </div>
            </div>
            <button class="edit-profile-modal__button custom__button">Save changes</button>
        </div>

    `
}
