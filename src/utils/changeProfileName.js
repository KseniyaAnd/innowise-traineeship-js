import fetchChar from "./fetchChar";

export default async function changeProfileIcon(target, code) {
    const char = await fetchChar(code);
    const profileName = document.getElementsByClassName(target)[0];
    profileName.innerHTML = char.name;
}
