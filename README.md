# Challenge-Amigo-secreto-alura-cursos ![Badge en Desarollo](https://img.shields.io/badge/STATUS-FINALIZADO-green)


El propósito de este desafío es poner en práctica los conceptos adquiridos sobre lógica de programación.  
Para ello, hemos proporcionado el código HTML y CSS, lo que permitirá que el enfoque se centre completamente en aspectos fundamentales sobre lógica de programación como variables, condicionales, funciones y listas, entre otros.

---

# Juego de Amigo Secreto

Este proyecto es un sencillo juego de "Amigo Secreto" en JavaScript.  
Permite agregar amigos, validar entradas, y sortear un amigo aleatoriamente.
<img width="825" height="583" alt="image" src="https://github.com/user-attachments/assets/f5461782-8646-4f7e-b32a-7fc671d297f2" />

---
## 👀 Cómo ver el proyecto en GitHub

1. 📂 **Abre el repositorio** en GitHub, por ejemplo:  
   `https://github.com/deivosarthur/Challenge-Amigo-secreto-alura-cursos`

2. 📄 **Navega hasta el archivo** `index.html` o `README.md` para ver el código y la documentación.

3. 🔍 **Revisa el código** directamente en GitHub con resaltado de sintaxis.

4. ⚙️ **Descarga o clona** el repositorio para probarlo localmente usando:  
   ```bash
   git clone https://github.com/deivosarthur/Challenge-Amigo-secreto-alura-cursos.git
   
5. 🌐 **ABRE EL ARCHIVO index.html** en tu navegador para usar el juego.



## Cómo usar el Juego

1. Abrir el archivo index.HTML.
2. Ingresar nombres en el campo de texto y hacer clic en **Añadir**.
3. Agregar al menos dos amigos para poder sortear.
4. Hacer clic en **Sortear amigo** para seleccionar uno al azar.
5. El nombre sorteado aparecerá y la lista se limpiará para comenzar de nuevo.

---

## Código JavaScript principal

```javascript
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido");
        return;
    }
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
        alert("Por favor, ingrese solo texto");
        return;
    }
    if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert("Este amigo ya está en la lista");
        return;
    }

    amigos.push(nombre);
    document.getElementById("amigo").value = "";
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        document.getElementById("resultado").innerHTML = "<li>Debe ingresar al menos dos amigos para sortear.</li>";
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `<li>${amigoSeleccionado}</li>`;
    document.getElementById("listaAmigos").innerHTML = "";
    amigos = [];
}
