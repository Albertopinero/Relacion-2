const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Introduce un número para verificar si es primo: ', (numero) => {
    numero = parseInt(numero);
  
    let Primo = true;
  
    if (numero <= 1) {
      console.log(`${numero} no es un número primo.`);
    } else {
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          Primo = false;
          break;
        }
      }
    
      if (Primo) {
        consola.log(`${numero} es un número primo.`);
      } else {
        consola.log(`${numero} no es un número primo.`);
      }
    }
  
    readline.close();
  });
  