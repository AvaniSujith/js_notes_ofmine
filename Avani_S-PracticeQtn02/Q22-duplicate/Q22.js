// Write a program to remove duplicates in an array of numbers?

function duplicatesRemoval(arr){
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== arr[i+1]){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

duplicatesRemoval([1,2,2,3,2,4,5,6]);