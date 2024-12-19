export default async function fetchChar() {
    let response = await fetch('https://rickandmortyapi.com/api/character/404');

    if (response.ok) {
        let json = await response.json();
        console.log(json)

    } else {
        alert("Ошибка HTTP: " + response.status);
    }

}

