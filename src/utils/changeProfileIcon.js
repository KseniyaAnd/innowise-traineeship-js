import RickMortyService from "./rick-morty.service";

export default async function changeProfileIcon(target, id) {
    const service = new RickMortyService();
    const char = await service.getCharacterById(id);

    const profileIcon = document.getElementsByClassName(target)[0];
    profileIcon.src = char.image;
}
