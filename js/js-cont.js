/* ----------------- Elementos ----------------- */

const botones =
document.querySelectorAll(".tema");

const contenedor =
document.getElementById("contenidoTema");

/* ----------------- Cargar Tema ----------------- */

function cargarTema(archivo){

    fetch(archivo)

    .then(respuesta => {

        if(!respuesta.ok){

            throw new Error(
                "No se pudo cargar " + archivo
            );

        }

        return respuesta.text();

    })

    .then(html => {

        contenedor.innerHTML = html;

    })

    .catch(error => {

        contenedor.innerHTML = `
            <h2>Error</h2>
            <p>No se pudo cargar el contenido.</p>
        `;

        console.error(error);

    });

}

/* ----------------- Activar Menú ----------------- */

function activarBoton(archivo){

    botones.forEach(boton => {

        boton.classList.remove("activo");

        if(
            boton.dataset.page === archivo
        ){

            boton.classList.add("activo");

        }

    });

}

/* ----------------- Eventos ----------------- */

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const archivo =
        boton.dataset.page;

        cargarTema(archivo);

        activarBoton(archivo);

    });

});

/* ----------------- Tema desde URL ----------------- */

const parametros =
new URLSearchParams(
    window.location.search
);

const tema =
parametros.get("tema");

/* ----------------- Tema Inicial ----------------- */

let archivoInicial =
"informatica.html";

switch(tema){

    case "nube":

        archivoInicial =
        "nube.html";

        break;

    case "ordenadores":

        archivoInicial =
        "ordenadores.html";

        break;

    case "redes":

        archivoInicial =
        "redes.html";

        break;

    case "informatica":

        archivoInicial =
        "informatica.html";

        break;

}

/* ----------------- Cargar al Iniciar ----------------- */

cargarTema(archivoInicial);

activarBoton(archivoInicial);