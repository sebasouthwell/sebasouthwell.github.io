var slideIndex = 1;
var mySlides;

window.addEventListener('load', function () {
    showDivs(slideIndex);
    mySlides = document.getElementsByClassName("mySlides");
})


function moveDiv(n){
    showDivs(slideIndex += n % mySlides.length);
}

function showDivs(n){
    for (var x = 0; x < mySlides.length; x++){
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

