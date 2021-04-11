// Scroll up del boton

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop || document.body.scrollTo;

    if (currentScroll > 0){
        window.scrollTo (0,0);
    }
}

///animacion boton up

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}
