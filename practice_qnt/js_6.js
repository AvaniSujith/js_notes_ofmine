// version-6.1

function multiplicationTable(num){
   
    console.log(`Multiplication Table of ${num}`)
   
    for(i=0 ; i<11; i++){
        
        let result = num  * i;
        console.log(`${i} x ${num} = ${result}`);
    }
}

multiplicationTable(19);
multiplicationTable(2);
multiplicationTable(4);
