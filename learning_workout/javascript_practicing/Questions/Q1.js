// sum of all natural numbers from 1 to n 

function sum(n){
    let sum = 0;
    for(let i = 0; i <= n; i ++){
        sum += i;
    }
    console.log(sum);
}

sum(5);