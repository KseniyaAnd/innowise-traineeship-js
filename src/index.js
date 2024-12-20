import loadComponent from "./utils/loadComponent";
import changeProfileIcon from "./utils/changeProfileIcon"
import changeProfileName from "./utils/changeProfileName"
import setLocation from "./utils/setLocation";
import setStatus from "./utils/setStatus"

import header from "./components/header/header"
import profileInfo from "./components/profile-info/profile-info";
import photos from "./components/photos/photos";
import friends from "./components/friends/friends";
import setSpecies from "./utils/setSpecies";


loadComponent('.header', header(), './components/header/header.css');
loadComponent('.header', header() , './css/main.css');
loadComponent('.profile-info', profileInfo(), './components/profile-info/profile-info.css');
loadComponent('.photos', photos(), './components/photos/photos.css');
loadComponent('.friends', friends(), './components/friends/friends.css');

const mainProfileCode = 10;
// const mainProfileCode = 329;
// const mainProfileCode = 43;

changeProfileIcon('header__profile', mainProfileCode);
changeProfileIcon('profile-info__image', mainProfileCode);

changeProfileName('profile-info__name', mainProfileCode);

setLocation('profile-info__text', mainProfileCode)
setStatus('profile-info__text', mainProfileCode)
setSpecies('profile-info__text', mainProfileCode)
