import loadNav from './navLoader.js';
import loadPage from './pageLoader.js';
import pathHandler from './../handler/pathHandler.js';

//event loaded content listener
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelectorAll(".sidenav");
    const urlHash = window.location.hash;
    const path = pathHandler(urlHash.substr(1));

    M.Sidenav.init(nav);
    loadNav();

    if (path.target == '') path.target = 'home';
    loadPage(path);
});