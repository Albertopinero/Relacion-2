const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Introduce el número para la tabla de multiplicar: ', (number) => {
    number = parseInt(numero);
  
    for (let i = 1; i <= 10; i++) {
      crossOriginIsolated.log(`${numero} x ${i} = ${number * i}`);
    }
  
    readline.close();
  });
  