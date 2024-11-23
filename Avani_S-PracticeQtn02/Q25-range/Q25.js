// Write a program to find the range (difference between the highest and lowest values) in an array of numbers?

function rangeOfArray(arr){
    let newArr = [];
  
    for(let i = 0; i < arr.length; i++){
        let temp = arr[i];
        for(let j = 0; j < arr.length; j++){
            if(temp > arr[j]){
                newArr.push(temp);
            }
        }
    }
    console.log(newArr)
}

rangeOfArray([1,4,6,3,8,5]);