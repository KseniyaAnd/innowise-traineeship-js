export default async function setFriends(service, page) {
    const chars = await service.getCharacters(page);
    const target = document.getElementsByClassName('friends__list')[0];

    chars.forEach((el) => {
        const div = document.createElement('div');
        div.classList.add('friends__item');
        div.innerHTML =
            `
                <div class="friends__avatar-container">
                   <img class="friends__avatar" src="${el.image}" alt="Rick Pickle"/>
                </div>
                <div class="friends__info">
                    <p class="friends__name">${el.name}</p>
                </div>
            `
        target.appendChild(div)
    })
}
