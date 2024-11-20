// Write a program to convert the decimal number to a binary representation?

function numberConv(num){
    if(num == 0){
        console.log("0");
    }else if (num == 1){
        console.log("1");
    }else{
        let value = 0;
        let remainderArr = [];
        for(let i = 0; i < num; i++){
            value = num%2;
            remainderArr.push(value);
            if(value == 0) {
                console.log("0");
            }else{
                let nextValue = value%2;
                remainderArr.push(nextValue);
            }
        }
        console.log(remainderArr);
    }
     
}

numberConv(13);

