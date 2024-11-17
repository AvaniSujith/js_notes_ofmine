// Find the sum of the first n terms of an arithmetic progression.

function sum(firstTerm, num, difference){
    let sum = num / 2 * (2 * firstTerm + (num - 1) * difference);
    console.log(`The sum is ${sum}`);
}

sum(5,10,3);
sum(-4,12,0);







