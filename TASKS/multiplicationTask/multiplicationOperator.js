let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");

let sum = a * b;
console.log(sum);

let newSum = 0

for(let i = 0; i < b; i++){
    newSum += a
}

console.log(newSum)

document.getElementById('result').innerHTML = sum;
