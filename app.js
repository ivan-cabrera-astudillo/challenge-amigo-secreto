// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if (nombre.trim() === "") {
    alert("Ingrese nombre válido");
  } else {
    amigos.push(nombre);
    actualizar();
    limpiar();
  }
}

function sortearAmigo() {
  let posicionSorteada = Math.floor(Math.random() * amigos.length) + 1;
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let lista = document.createElement("li");
  lista.textContent = amigos[posicionSorteada];
  resultado.appendChild(lista);
}

function limpiar() {
  document.getElementById("amigo").value = "";
}

function actualizar() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let lista = document.createElement("li");
    lista.textContent = amigos[i];
    listaAmigos.appendChild(lista);
  }
}
