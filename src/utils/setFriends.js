import {FriendCardElement} from "./friendCardElement";

export default async function setFriends(service, page) {
    const chars = await service.getCharacters(page);
    const target = document.getElementsByClassName('friends__list')[0];

    chars.forEach((el) => {
        const div = document.createElement('div');
        div.classList.add('friends__item');
        div.innerHTML =
            `
                <friend-card-element img="${el.image}" name="${el.name}"></friend-card-element>
            `
        target.appendChild(div)
    })
}
