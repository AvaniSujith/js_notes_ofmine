function primeNum(num){
    let arr = [];
    for(let i = 2; i <= num; i++){
        let flag = true;
        for(let j = 2; j<i; j++){
          if(num%j !== 0){
            flag = false;
            break;
          }
        }
    }
    if(flag = true){
        arr.push(i);
    }
    return arr;
}

console.log(primeNum(11));