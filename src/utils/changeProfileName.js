import RickMortyService from "./rick-morty.service";

export default async function changeProfileIcon(target, id) {
    const service = new RickMortyService();
    const char = await service.getCharacterById(id);

    const profileName = document.getElementsByClassName(target)[0];
    profileName.innerHTML = char.name;
}
