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

//animacion boton ver mas
function mOver(obj) {
    obj.innerHTML = "VER MAS"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Ver Mas"
  }

//formulario buscar en index
//

function filtrado(){
    console.log('entro al script');
    const select = document.getElementById('select');
    console.log(select.value + ' leo seleccion');
    
    if(select.value == "1"){
        console.log('entro por monitores')
        var id = "monitores";
        console.log(id);
        //document.getElementById(this) != id.value.hidde();
        document.getElementById("monitores").show();             
         
    }else{
        if(select.value == "2"){
            console.log('entro por gabinetes')

        }else{
            console.log('entro por combos')   
        //alert.style.visibility = 'hidden';
        }
    }    
}