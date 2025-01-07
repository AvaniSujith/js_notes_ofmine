let a = Number(prompt("Enter the first number: "));
let b = Number(prompt("Enter the second number: "));

let sum = 0;
for(let i = 0; i < b; i++){
    sum += a
}

document.getElementById('result').innerHTML = sum;

