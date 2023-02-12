var longitud = parseInt(prompt("Introduce la longitud de la línea:"));
var linea = "";

for (var i = 0; i < longitud; i++) {
  linea += "*";
}

consola.log(linea);
