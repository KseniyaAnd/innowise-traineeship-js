import fetchChar from "./fetchChar";

export default async function setLocation(target, code) {
    console.log(target)
    const char = await fetchChar(code);
    const location = document.getElementsByClassName(target)[1];
    location.innerHTML = char.status;
}
