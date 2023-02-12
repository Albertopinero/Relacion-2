const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Introduce el número de filas para el triángulo: ', (number) => {
    numero = parseInt(numero);
  
    for (let i = 1; i <= numero; i++) {
      consola.log("*".repeat(i));
    }
  
    readline.close();
  });
  