export default class RickMortyService {
    url = `https://rickandmortyapi.com/api`

    async getCharacterById(id) {
        const response = await fetch(`${this.url}/character/${id}`);
        if (response.ok) {
            return await response.json();
        }
    }

    async getCharactersByIds(ids) {
        const response = await fetch(`${this.url}/character/${ids}`);
        if (response.ok) {
            return await response.json();
        }
    }

    async getCharacters(page) {
        let response;
        console.log(page);

        if (page) {
            response = await fetch(`${this.url}/character?page=${page}`);
        } else {
            response = await fetch(`${this.url}/character`);
        }

        if (response.ok) {
            const jsonData = await response.json();
            return jsonData.results;
        }
    }

}
