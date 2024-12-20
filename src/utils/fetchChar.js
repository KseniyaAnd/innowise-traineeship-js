export default async function fetchChar(code) {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${code}`);

    if (response.ok) {
        let json = await response.json();
        console.log(json)
        return json
    }
}

