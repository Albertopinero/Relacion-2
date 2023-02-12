const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Introduce una nota numérica (0 a 10): ', (note) => {
    nota = parseFloat(nota);
  
    if (nota >= 0 && nota <= 10) {
      let grado;
  
      if (nota >= 9) {
        grado = 'Sobresaliente';
      } else if (nota >= 7) {
        grado = 'Notable';
      } else if (nota >= 6) {
        grado = 'Bien';
      } else if (nota >= 5) {
        grado = 'Suficiente';
      } else {
        grado = 'Insuficiente';
      }
  
      consola.log(`La nota introducida es ${nota}, correspondiente a una calificación de "${grado}"`);
      readline.close();
    } else {
      consola.log('La nota introducida no está en el rango permitido (de 0 a 10), por favor inténtalo de nuevo.');
      readline.close();
    }
  });
  