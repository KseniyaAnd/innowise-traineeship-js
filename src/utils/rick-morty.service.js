export default class RickMortyService {
    url = `https://rickandmortyapi.com/api`

    async getCharacterById(id) {
        const response = await fetch(`${this.url}/character/${id}`);
        if (response.ok) {
            return await response.json();
        }
    }

    async getCharacters(ids) {
        const response = await fetch(`/${this.url}/character/${ids}`);

    }

    // async getCharacters(ids) {
    //     const response = await fetch(`${this.url}/${ids}`);
    //
    // }
}
