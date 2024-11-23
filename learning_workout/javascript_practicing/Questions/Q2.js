function countOfDigits(num){
    num = Math.abs(num);
    let count = 0;

    do{
        count++;
        num = Math.floor(num / 10);

    }while(num > 0);
    return count;
}

console.log(countOfDigits(121));
console.log(countOfDigits(-12323123));
