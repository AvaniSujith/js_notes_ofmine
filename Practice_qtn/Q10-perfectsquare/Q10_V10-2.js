
function square(num){
    if(num < 0){
        console.log("Invalid");
    }else{
        let remainder = num % 2;
        let guessNum = 0;
        if(remainder == 0){
            guessNum = remainder;
        }else{
            guessNum = Math.round((num/2));
        }
        // console.log(guessNum);

        let squareNum = 0;
        squareNum = guessNum * guessNum;

        if(squareNum == num){
            console.log(`perfect square`);
        }else{
            console.log(`Not a perfect square`);
        }


    }
}

// square(36);


// let a = 9.49;
// console.log(Math.round(a));