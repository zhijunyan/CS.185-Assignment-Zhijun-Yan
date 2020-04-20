top_but = document.getElementById("top_but");

window.onscroll = function() {scrollFunction()};
var height=document.body.offsetHeight;
function scrollFunction() {
    if (document.body.scrollTop >= 0.25*height|| document.documentElement.scrollTop >= 0.25*height) {
        top_but.style.display = "block";
    } else {
        top_but.style.display = "none";
    }
}

function topFunction() { 
    window .scrollTo(0,0);
}
