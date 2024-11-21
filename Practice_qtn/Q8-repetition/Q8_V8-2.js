function repetition(arr){
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        // console.log(arr[i]);
        let temp = arr[0];
        if(temp == arr[i+1]){
            count++;
        }else{
            temp == arr[0+i];
        }
        
    }
}



let arr = [1,2,3,4];
repetition(arr);