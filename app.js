// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaramos un array
let amigos = [];

// Función que se ejecuta cuando el usuario hace clic en el botón "Añadir"
function agregarAmigo() {
    // Obtenemos el elemento input por su id "amigo"
    let input = document.getElementById("amigo");

    // Tomamos el valor del input y eliminamos espacios en blanco al inicio y al final
    let nombre = input.value.trim();

    // Validamos que el usuario no haya dejado el campo vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre."); // Mostramos un mensaje de alerta
        return; // Salimos de la función sin agregar nada
    }

     // Validar que solo contenga letras 
    let soloTexto = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    //Usamos el método test()  para verificar si la variable
    // 'nombre' cumple con esta regla: que contenga solo los caracteres permitidos.
    if (!soloTexto.test(nombre)) {
        alert("Por favor, ingrese solo texto");
        return;
    }

    // Agregamos el nombre al final del array "amigos"
    amigos.push(nombre);

    // Limpiamos el contenido del input para que quede listo para un nuevo nombre
    input.value = "";

    // Llamamos a la función para actualizar la lista en pantalla
    mostrarListaAmigos();
}

// Función que dibuja en el HTML la lista de amigos
function mostrarListaAmigos() {
    // Obtenemos el elemento <ul> que mostrará los amigos
    let lista = document.getElementById("listaAmigos");

    // Limpiamos el contenido actual de la lista antes de volver a generarla
    lista.innerHTML = "";

    // Recorremos el array "amigos" y vamos creando un <li> por cada amigo
    amigos.forEach(function(amigo) {
        let li = document.createElement("li"); // Creamos un elemento <li>
        li.textContent = amigo; // Asignamos el nombre del amigo como texto
        lista.appendChild(li); // Agregamos el <li> a la lista <ul>
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
      let lista = document.getElementById("listaAmigos");

    //En caso que no tenga amigos para agregar y si aprete el boton sortear aparecera este mensaje
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos para sortear</li>";
        return;
    }
    // Validar que haya al menos dos amigos para hacer el sorteo
    if (amigos.length < 2) {
        resultado.innerHTML = "<li>Debe ingresar al menos dos amigos para sortear.</li>";
        return;
    }
    // Elegir un índice aleatorio del array amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el amigo seleccionado
    let amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado en el ul con id "resultado"
    resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSeleccionado}</li>`;

    // Limpiar la lista de amigos en pantalla
    lista.innerHTML = "";

    // Vaciar el array amigos para que no queden nombres
    amigos = [];
}

