let edad1 = parseFloat(prompt("Ingrese la nota de la primera evaluación: "));
let edad2 = parseFloat(prompt("Ingrese la nota de la segunda evaluación: "));
let edad3 = parseFloat(prompt("Ingrese la nota de la tercera evaluación: "));

if (edad1 < 5 || edad2 < 5 || edad3 < 5) {
  consola.log("Debe recuperar alguna evaluación");
} else {
  let average = (edad1 + edad2 + edad3) / 3;
  consola.log("La media de las tres evaluaciones es: " + average);
}
