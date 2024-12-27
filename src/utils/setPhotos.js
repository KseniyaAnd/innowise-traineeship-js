export default async function setPhotos(service, ids) {
    const chars = await service.getCharactersByIds(ids);
    const target = document.getElementsByClassName('photos__content')[0];

    chars.forEach((el) => {
        const div = document.createElement('div');
        div.innerHTML =
            `
                <div class="photos__content-unit">
                    <img src="${el.image}"/>
                </div>
            `
        target.appendChild(div)
    })
}
