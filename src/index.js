import loadComponent from "./utils/loadComponent";
import changeProfileIcon from "./utils/changeProfileIcon"
import changeProfileName from "./utils/changeProfileName"

import RickMortyService from "./utils/rick-morty.service";

import header from "./components/header/header"
import profileInfo from "./components/profile-info/profile-info";
import photos from "./components/photos/photos";
import friends from "./components/friends/friends";
import editProfileModal from "./components/edit-profile-modal/edit-profile-modal"
import setUserInfo from "./utils/setUserInfo";
import setModalInputs from "./utils/setModalInputs";
import setFriends from "./utils/setFriends";
import setPhotos from "./utils/setPhotos";
import ModalService from "./utils/modal.service";
import {FriendCardElement} from "./utils/friendCardElement";
//import dragElement from "./utils/drugElement";


loadComponent('.header', header(), './components/header/header.css');
loadComponent('.header', header(), './css/main.css');
loadComponent(null, null, './components/edit-profile-modal/edit-profile-modal.css');
loadComponent('.profile-info', profileInfo(), './components/profile-info/profile-info.css');
loadComponent('.photos', photos(), './components/photos/photos.css');
loadComponent('.friends', friends(), './components/friends/friends.css');

//const mainProfileCode = 10;
//const mainProfileCode = 329;
// const mainProfileCode = 43;
const mainProfileCode = Math.floor(Math.random() * 800);

const service = new RickMortyService();

changeProfileIcon('header__profile', mainProfileCode);
changeProfileIcon('profile-info__image', mainProfileCode);
changeProfileIcon('edit-profile-modal__image', mainProfileCode);

changeProfileName('profile-info__name', mainProfileCode);
changeProfileName('edit-profile-modal__input', mainProfileCode);

setUserInfo(service, mainProfileCode)
setModalInputs(service, mainProfileCode);
setFriends(service)
setPhotos(service, Array.from({length: 12}, () => Math.floor(Math.random() * 800)))

const modalService = new ModalService();
modalService.createModal(editProfileModal());

document.querySelector('.user-profile__button').addEventListener('click', () => {
    modalService.toggleModal();
});

document.querySelector('.modal-cross').addEventListener('click', () => {
    modalService.toggleModal();
})

let page = 1;
document.querySelector('.friends__button').addEventListener('click', () => {
    setFriends(service, ++page)
})