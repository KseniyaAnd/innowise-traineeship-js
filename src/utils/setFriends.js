export default async function setFriends(service, ids) {
    const chars = await service.getCharacters(ids);
    const target = document.getElementsByClassName('friends__list')[0];

    chars.forEach((el) => {
        const div = document.createElement('div');
        div.classList.add('friends__item');
        console.log(el)
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
