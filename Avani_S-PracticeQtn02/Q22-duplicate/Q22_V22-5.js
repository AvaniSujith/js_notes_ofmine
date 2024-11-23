function duplicatesRemoval(arr){
    let compareArr = [];
    let present = true;
    for(let i = 0; i < arr.length; i++){
        let compare = arr[i];
        for(let j = 0; j < arr.length; j++){
            if(compare !== arr[j]){
                present = false;
            }else{
                compareArr.push(arr[j]);
            }
        }
    }
    console.log(compareArr);
}


duplicatesRemoval([1,2,2,3,2,4,5,6]);