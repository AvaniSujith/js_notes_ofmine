function duplicatesRemoval(arr){
    let newArr = [];
    
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length; j++){
            if(arr[i] !== arr[j]){
                newArr.push(arr[i]);
            }
        }
    }

    console.log(newArr);
}


duplicatesRemoval([1,2,2,3,2,4,5,6]);
