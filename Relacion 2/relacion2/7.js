let nombre = prompt("Por favor, ingrese su nombre:", "desconocido");

if (nombre === null) {
  consola.log("Has pulsado cancelar");
} else if (nombre === "") {
  consola.log("No has ingresado ningún nombre");
} else if (nombre === "desconocido") {
  consola.log("Has usado el nombre por defecto");
} else {
  consola.log("Bienvenido, " + nombre);
}
