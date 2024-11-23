function square(num){
    if(num < 0){
        console.log("Invalid");
    }else{
        let remainder = num % 2;
        let guessNum = 0;
        if(remainder == 0){
            // guessNum = remainder;
            guessNum = num/2;
        }else{
            guessNum = Math.round((num/2));
        }
        // console.log(guessNum);

        let squareNum = 0;
        squareNum = guessNum * guessNum;

        if(squareNum == num){
            console.log(`perfect square`);
        }

        while( squareNum !== num){
            if(squareNum < num){
                // for()
                // squareNum += 1;
                guessNum += 1;
                squareNum = guessNum * guessNum;
    
            }else{
                // squareNum -= 1;
                guessNum -= 1;
                squareNum = guessNum * guessNum;
            }
            
        
        }

        if(squareNum === num){
            console.log("perfect square");
        }else{
            console.log("not a perfect square");
        }
       


    }
}

square(36);
square(32);