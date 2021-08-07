"use strict";
var navBar;
var hamburgerMenu;
window.addEventListener('load', function () {
    navBar = document.getElementById("page-nav-bar");
    hamburgerMenu = document.getElementById("hamburger-menu");
    hamburgerMenu.addEventListener("click",function(){
        if (navBar.classList.contains("visible-nav")){
            navBar.classList.remove("visible-nav");
        }
        else{
            navBar.classList.add("visible-nav");
        }
    });
})