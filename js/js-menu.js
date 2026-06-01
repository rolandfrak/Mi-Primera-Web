/* ----------------- Cargar Cabecera ----------------- */

fetch("cabeza.html")
.then(respuesta => respuesta.text())
.then(datos => {

    document.getElementById("cabeza").innerHTML = datos;

    iniciarMenu();

});


/* ----------------- Cargar Pie ----------------- */

fetch("pie.html")
.then(respuesta => respuesta.text())
.then(datos => {

    document.getElementById("pie").innerHTML = datos;

});


/* ----------------- Menú Responsive ----------------- */

function iniciarMenu(){

    const boton = document.getElementById("btnMenu");
    const menu = document.getElementById("menuNav");

    boton.addEventListener("click", () => {

        menu.classList.toggle("activo");

    });

}