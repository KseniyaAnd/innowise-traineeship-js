export default async function openModal(modal) {
    const target = document.getElementsByClassName(modal)[0];
    target.classList.toggle('none')
}
