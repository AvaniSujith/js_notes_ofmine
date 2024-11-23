// using method 

function duplicatesRemoval(arr){
    
    let newArr = [];
    newArr.push(arr[0]);

    for(let i = 0; i < arr.length; i++){
       if(!newArr.includes(arr[i])){
        newArr.push(arr[i]);
       }
    }
    console.log(newArr);
}


duplicatesRemoval([1,2,2,3,2,4,5,6]);