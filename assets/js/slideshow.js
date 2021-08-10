"use strict";
var slideIndex = 0;
var mySlides;
var textContent;

function moveDiv(n){
    console.log(((slideIndex + n) % (mySlides.length)));
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
        console.log(clone);
        textContent.appendChild(clone);
    }
    slideIndex=n;
}

window.addEventListener('load', function () {
    mySlides = $("div.mySlides");
    textContent = this.document.getElementsByClassName("text-content")[0];
    moveDiv(slideIndex);
})