export default function photos() {
    return `
            <div class="photos__container">
            <div class="photos__tabs">
                <p class="photos__tab">
                    Photos
                </p>
            </div>
            <div class="photos__content">
                <div class="photos__content-unit">
                    <img src="img/pic-1.png"/>
                </div>
                <div class="photos__content-unit">
                    <img src="img/pic-1.png"/>
                </div>
                <div class="photos__content-unit">
                    <img src="img/pic-1.png"/>
                </div>
                <div class="photos__content-unit">
                    <img src="img/pic-1.png"/>
                </div>
            </div>
            <div class="photos__button-wrapper">
                <button class="photos__button">
                    Upload photo
                </button>
            </div>
        </div>
    `
}