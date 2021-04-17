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

//paginador
function paginador() {
    alert('No hay mas productos!😊');
  }


//formulario buscar en index
//Opcion 1 - envia a otra pag con los productos elegidos

/*function filtrado() {
    //console.log('entro al script');
    let select = document.getElementById('select');
   // console.log(select.value + ' leo seleccion');
    //console.log(gabinetes);
   

    if (select.value === '1') {
        goTo('./producto.html')
    }else if (select.value === '2') {
        goTo('./producto.html')
    }else if(select.value === '3') {
            goTo('./producto.html')    

    }
    
}

function goTo(link){
    let a = document.createElement('a');
    a.href = link;
    a.click();
    a.remove();
}*/

//formulario buscar en index
//Opcion 2

const gabinetes = document.querySelectorAll("[id=gabinetes]");
const monitores = document.querySelectorAll("[id=monitores]");
const combos = document.querySelectorAll("[id=combos]");
function filtrado() {
	let select = document.getElementById("select");
	let productos = document.getElementById("productos");
	if (select.value === "1") {
		productos.innerHTML = "";
		let row = document.createElement("div");
		row.className = "row row-cols-1 row-cols-md-3 g-4";
		let auxDiv = productos.appendChild(row);
		for (let i = 0; i < monitores.length; i++) {
			let col = document.createElement("div");
			col.className = "col";
			col.appendChild(monitores[i]);
			auxDiv.appendChild(col);
		}
	} else if (select.value === "2") {
		productos.innerHTML = "";
		let row = document.createElement("div");
		row.className = "row row-cols-1 row-cols-md-3 g-4";
		let auxDiv = productos.appendChild(row);
		for (let i = 0; i < gabinetes.length; i++) {
			let col = document.createElement("div");
			col.className = "col";
			col.appendChild(gabinetes[i]);
			auxDiv.appendChild(col);
		}
	} else if (select.value === "3") {
		productos.innerHTML = "";
		let row = document.createElement("div");
		row.className = "row row-cols-1 row-cols-md-3 g-4";
		let auxDiv = productos.appendChild(row);
		for (let i = 0; i < combos.length; i++) {
			let col = document.createElement("div");
			col.className = "col";
			col.appendChild(combos[i]);
			auxDiv.appendChild(col);
		}        
	} else{
        let a = document.createElement('a');
        a.href = './index.html';
        a.click();
        a.remove();
    }
}