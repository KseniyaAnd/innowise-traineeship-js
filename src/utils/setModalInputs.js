export default async function setModalInputs(service, id) {
    const char = await service.getCharacterById(id);
    const target = document.getElementsByClassName('edit-profile-modal__input');
    console.log(target)

    target[0].value = char.name;
    target[1].value = char.location.name;
    target[2].value = char.status;
    target[3].value = char.species;
}
