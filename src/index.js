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
import openModal from "./utils/openModal";
import setFriends from "./utils/setFriends";
import setPhotos from "./utils/setPhotos";
//import dragElement from "./utils/drugElement";


loadComponent('.header', header(), './components/header/header.css');
loadComponent('.header', header(), './css/main.css');
loadComponent('.edit-profile-modal', editProfileModal(), './components/edit-profile-modal/edit-profile-modal.css');
loadComponent('.profile-info', profileInfo(), './components/profile-info/profile-info.css');
loadComponent('.photos', photos(), './components/photos/photos.css');
loadComponent('.friends', friends(), './components/friends/friends.css');

//const mainProfileCode = 10;
//const mainProfileCode = 329;
const mainProfileCode = 43;

const service = new RickMortyService();

changeProfileIcon('header__profile', mainProfileCode);
changeProfileIcon('profile-info__image', mainProfileCode);
changeProfileIcon('edit-profile-modal__image', mainProfileCode);

changeProfileName('profile-info__name', mainProfileCode);
changeProfileName('edit-profile-modal__input', mainProfileCode);

setUserInfo(service, mainProfileCode)
setModalInputs(service, mainProfileCode);
setFriends(service, [34,523,32,31,134,128,432,231,436,37,242,111])
setPhotos(service, [2,7,12,61,74,89,40,39,46,3,22,11])

document.getElementsByClassName('user-profile__button')[0].addEventListener('click', () => openModal('edit-profile-modal'));
document.getElementsByClassName('edit-profile-modal__button')[0].addEventListener('click', () => openModal('edit-profile-modal'));

