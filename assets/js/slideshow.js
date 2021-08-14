"use strict";
var slideIndex = 0;
var mySlides;
var textContent;
var slideButtons;
var lightButtons = false;

function moveDiv(n){
    showDivs(((slideIndex + n + mySlides.length) % (mySlides.length)));
}

function showDivs(n){
    for (var x = 0; x < mySlides.length; x++){
        mySlides[x].style.display = "none";
    }
    mySlides[n].style.display = "block";
    textContent.innerHTML = "";
    for (var x = 1; x < mySlides[n].children.length; x++){
        var clone = mySlides[n].children[x].cloneNode(true);
        textContent.appendChild(clone);
    }
    if (!lightButtons && mySlides[n].classList.contains("lightImage")){
        for (var x = 0; x < slideButtons.length; x++){
            slideButtons[x].classList.add("lightButton");
            slideButtons[x].classList.add("lightButton");
        }
        lightButtons = true;
    }
    else if (lightButtons && !mySlides[n].classList.contains("lightImage")){
        for (var x = 0; x < slideButtons.length; x++){
            slideButtons[x].classList.remove("lightButton");
            slideButtons[x].classList.remove("lightButton");
        }
        lightButtons = false;
    }
    slideIndex=n;
}

window.addEventListener('load', function () {
    mySlides = $("div.mySlides");
    textContent = this.document.getElementsByClassName("text-content")[0];
    slideButtons = this.document.getElementsByClassName("slide-button");
    moveDiv(slideIndex);
})