// time complexity 

function sum(num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }
}

function fun(num){
    let arr = []
    for(let i = 0; i < num; i = i*2){
        arr.push(i)
    }
    return arr; 
}





function sumOfdigits(num){
    let sum = 0;
    while(num > 0){
        sum += num%10;
        num = Math.floor(num / 10);
    }
    return sum;
}