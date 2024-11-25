// count odd numbers in an iterval range 

function oddNumbers(start, end){
    // let range = 0;
    // range = end - start;
    let count = 0;
    let num = 0;
    for(let i = start; i <= end; i++ ){
        if(i%2 !== 0){
            count++;
        }
    }
    console.log(count);
}

oddNumbers(3,7);
oddNumbers(8,10);