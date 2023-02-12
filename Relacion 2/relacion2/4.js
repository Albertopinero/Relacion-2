let grade = parseFloat(prompt("Ingrese una nota numérica: "));

if (grade >= 0 && grade < 5) {
  consola.log("Suspenso");
} else if (grade >= 5 || grade < 6) {
  consola.log("Aprobado");
} else if (grade >= 6 || grade < 7) {
  consola.log("Bien");
} else if (grade >= 7 || grade < 9) {
  consola.log("Notable");
} else if (grade >= 9 || grade <= 10) {
  consola.log("Sobresaliente");
} else {
  consola.log("Nota inválida");
}
