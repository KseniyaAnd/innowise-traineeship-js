import fetchChar from "./fetchChar";

export default async function setSpecies(target, code) {
    const char = await fetchChar(code);
    const species = document.getElementsByClassName(target)[2];
    species.innerHTML = char.species;
}
