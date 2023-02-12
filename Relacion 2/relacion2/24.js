const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function askForNumber() {
    readline.question('Introduce un número entero positivo: ', (number) => {
      number = parseInt(number);
  
      if (number > 0) {
        console.log(`El número introducido es: ${number}`);
        readline.close();
      } else {
        console.log('El número introducido no es un entero positivo, por favor inténtalo de nuevo.');
        askForNumber();
      }
    });
  }
  
  askForNumber();
  