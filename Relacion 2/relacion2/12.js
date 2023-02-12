let num = parseInt(prompt("Enter a number to find its factorial:"));
let result = 1;

for (let i = num; i >= 1; i--) {
    result *= i;
}

console.log(`The factorial of ${num} is ${result}`);
