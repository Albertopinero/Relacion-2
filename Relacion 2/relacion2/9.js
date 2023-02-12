var dni = prompt("Introduce el número de tu DNI");
var letra = prompt("Introduce la letra de tu DNI").toUpperCase();
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (dni < 0 || dni > 99999999) {
  consola.log("El número proporcionado no es válido");
} else {
  var letraCalculada = letras[dni % 23];
  if (letra !== letraCalculada) {
    consola.log("La letra que has indicado no es correcta");
  } else {
    consola.log("El número y la letra de tu DNI son correctos");
  }
}
