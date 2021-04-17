// Scroll up del boton

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {

    var currentScroll = document.documentElement.scrollTop || document.body.scrollTo;

    if (currentScroll > 0) {
        window.scrollTo(0, 0);
    }
}

///animacion boton up

buttonUp = document.getElementById("button-up");

window.onscroll = function () {

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 500) {
        buttonUp.style.transform = "scale(0)";
    }

}

//animacion boton ver mas
function mOver(obj) {
    obj.innerHTML = "VER MAS"
}

function mOut(obj) {
    obj.innerHTML = "Ver Mas"
}




//formulario buscar en index
//

var gabinetes = document.querySelectorAll('[id=gabinetes]');
var monitores = document.querySelectorAll('[id=monitores]');
var combos = document.querySelectorAll('[id=combos]');
var productos = document.querySelectorAll('[id=productos]');


function filtrado() {
    console.log('entro al script');
    const select = document.getElementById('select');
    console.log(select.value + ' leo seleccion');
    //console.log(gabinetes);
   

    switch (select.value) {
        case 1:
           // console.log('entro por monitores');
           // productos.childNodes;
            console.log(productos);
            //let id = "monitores";
            //console.log(id);
            break;

        case 2:
            console.log('entro por gabinetes');
            // let id = "monitores";
            //console.log(id);
            break;

        case 3:
            console.log('entro por combos');
            //let id = "monitores";
            //console.log(id);
            break;

    }
}