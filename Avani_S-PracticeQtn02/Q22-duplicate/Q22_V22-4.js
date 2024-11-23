function duplicatesRemoval(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        // newArr.push(arr[i])
        // console.log(arr[0])
        let compareItem = arr[i];
        // console.log(compareItem)
        if(compareItem !== arr[i]){
            for(let j = 0; j < newArr.length; j++){
                if(compareItem !== newArr[j]){
                    newArr.push(compareItem);
                }
            }
        }
        
    }
    console.log(newArr);
    
}


function duplicatesRemoval(arr){

    let compareArr = [];
    // compareArr.push(arr[0]);

    for(let i = 0; i < arr.length; i++){
        let compare = arr[i];
        for(let j = 0; j < compareArr.length; j++){

            if(compare == compareArr[j]){
                compareArr.push(compare);
                break;
            }
        }
    }
    console.log(compareArr);
}


duplicatesRemoval([1,2,2,3,2,4,5,6]);

