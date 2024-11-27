// / version-6.1


function multiplicationTable(num){
    let emptyArr = [];
    for(i=0 ; i<11; i++){
       
       let results = num  * i;
     
       let result = i + " x " + num + " = " + results;
       emptyArr.push(result);
   }
}

console.log(multiplicationTable(3));
