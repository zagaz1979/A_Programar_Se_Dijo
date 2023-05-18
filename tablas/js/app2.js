let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let suma = 0;
let resultado = document.querySelector("#resultado");

// Recorre una estructura de datos - en este caso recorre un arreglo
for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}

resultado.innerHTML = "La suma es: " + suma;
resultado.style.fontSize = "30px";

//Actividad...
//Traer 2 ejercicios de arreglos en javascript
