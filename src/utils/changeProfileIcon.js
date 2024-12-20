import fetchChar from "./fetchChar";

export default async function changeProfileIcon(target, code) {
    const char = await fetchChar(code);
    const profileIcon = document.getElementsByClassName(target)[0];
    profileIcon.src = char.image;
}
