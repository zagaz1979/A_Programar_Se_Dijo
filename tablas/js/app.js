// Variable simple - guarda un solo resultado
let nombre = "Maria Gonzalez";

// Variable arreglo - guarda varios resultados
let nombres = ["Maria", "Jose", "Anibal", "Juana", "Moises"];

// Primera forma
//let resultado = document.querySelector("#resultado");

// Segunda forma
let resultado = document.getElementById("resultado");

resultado.innerHTML = "Hola " + nombre + " tus amigos son " + nombres;

resultado.style.fontSize = "40px";
resultado.style.color = "blue";

document.body.style.backgroundColor = "purple";