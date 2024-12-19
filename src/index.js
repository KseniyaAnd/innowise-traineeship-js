import fetchChar from "./components/header/header.js";

async function loadComponent(id, url, cssUrl) {
    const response = await fetch(url);
    const content = await response.text();
    document.querySelector(id).innerHTML = content;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssUrl;
    document.head.appendChild(link);
}

loadComponent('.header', './components/header/header.html', './components/header/header.css');
loadComponent('.header', './components/header/header.html' , './css/main.css');
loadComponent('.profile-info', './components/profile-info/profile-info.html', './components/profile-info/profile-info.css');
loadComponent('.photos', './components/photos/photos.html', './components/photos/photos.css');
loadComponent('.friends', './components/friends/friends.html', './components/friends/friends.css');

fetchChar();
