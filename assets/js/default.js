"use strict";
var navBar;
var hamburgerMenu;
var footer;
window.addEventListener('load', function () {
    navBar = document.getElementById("page-nav-bar");
    footer = this.document.getElementsByClassName("site-footer")[0];
    hamburgerMenu = document.getElementById("hamburger-menu").parentElement;
    hamburgerMenu.addEventListener("click",function(){
        if (navBar.classList.contains("visible-nav")){
            navBar.classList.remove("visible-nav");
            footer.classList.remove("change-footer");
        }
        else{
            navBar.classList.add("visible-nav");
            footer.classList.add("change-footer");
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
