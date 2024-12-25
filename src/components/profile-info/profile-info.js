export default function profileInfo(content) {
    return `
            <section class="profile-info">
            <div class="profile-info__container">
                <div class="profile-info__image-wrapper">
                    <img class="profile-info__image" src="img/profile.png" alt="Profile"/>
                </div>
                <div class="profile-info__details">
                    <h1 class="profile-info__name">Rick Pickle</h1>
                    <ul class="profile-info__list">
                        <li class="profile-info__item">
                            <img class="profile-info__icon" src="img/location.png" alt="Location"/>
                            <p class="profile-info__text">Universe</p>
                        </li>
                        <li class="profile-info__item">
                            <img class="profile-info__icon" src="img/status.png" alt="Location"/>
                            <p class="profile-info__text">Universe</p>
                        </li>
                        <li class="profile-info__item">
                            <img class="profile-info__icon" src="img/species.png" alt="Location"/>
                            <p class="profile-info__text">Universe</p>
                        </li>
                    </ul>
                </div>
        
                <div class="user-profile__button-wrapper">
                    <button class="user-profile__button custom__button">
                        Edit profile
                    </button>
                </div>
            </div>
        </section>
    `
}
