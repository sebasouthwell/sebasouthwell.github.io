"use strict";
var navBar;
var hamburgerMenu;
window.addEventListener('load', function () {
    navBar = document.getElementById("page-nav-bar");
    hamburgerMenu = document.getElementById("hamburger-menu").parentElement;
    hamburgerMenu.addEventListener("click",function(){
        if (navBar.classList.contains("visible-nav")){
            navBar.classList.remove("visible-nav");
        }
        else{
            navBar.classList.add("visible-nav");
        }
    });
})

function copyDiscord(){
    var input = document.body.appendChild(document.createElement("input"));
    input.value = "Sebasouthwell#9843";
    input.focus();
    input.select()
    input.setSelectionRange(0, 99999);;
    document.execCommand('copy');
    input.parentNode.removeChild(input);
    alert("Copied Discord Name to Clipboard");
}