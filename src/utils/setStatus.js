import RickMortyService from "./rick-morty.service";

export default async function setLocation(target, id) {
    const service = new RickMortyService();
    const char = await service.getCharacterById(id);
    const location = document.getElementsByClassName(target)[1];
    location.innerHTML = char.status;
}
