let text = prompt("Ingrese una cadena de texto: ");

if (text.indexOf(" ") === -1) {
  consola.log("La cadena ingresada no tiene espacios en blanco");
} else {
  consola.log("La cadena ingresada tiene espacios en blanco");
}
