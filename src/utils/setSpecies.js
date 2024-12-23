import RickMortyService from "./rick-morty.service";

export default async function setSpecies(target, id) {
    const service = new RickMortyService();
    const char = await service.getCharacterById(id);

    const species = document.getElementsByClassName(target)[2];
    species.innerHTML = char.species;
}
