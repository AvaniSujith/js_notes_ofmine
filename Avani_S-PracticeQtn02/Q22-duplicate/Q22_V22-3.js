function duplicatesRemoval(arr){
    let newArr = []

    for(let i = 0; i < arr.length; i++){
        let compareElement = arr[0];
        for(let j = 0; j < arr.length; j++){
            if(compareElement != arr[j+i]){
                newArr.push(compareElement);
            }
        }
        compareElement++;
    }
    console.log(newArr);
}

duplicatesRemoval([1,2,2,3,2,4,5,6]);

