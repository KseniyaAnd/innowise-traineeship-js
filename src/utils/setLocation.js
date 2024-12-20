import fetchChar from "./fetchChar";

export default async function setLocation(target, code) {
    const char = await fetchChar(code);
    const location = document.getElementsByClassName(target)[0];
    location.innerHTML = char.location.name;
}
