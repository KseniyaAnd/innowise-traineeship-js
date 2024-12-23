export default async function setUserInfo(service, id) {
    const char = await service.getCharacterById(id);
    const target = document.getElementsByClassName('profile-info__text');

    target[0].innerHTML = char.location.name;
    target[1].innerHTML = char.status;
    target[2].innerHTML = char.species;
}
