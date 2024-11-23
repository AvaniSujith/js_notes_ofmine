// given an array nums containing n distinct numbers in the range [0,n] return only number in the range that is missing from the array. 

function missingNum(arr){
    let maxValue = 0;
    for(let i = 0 ; i < arr.length; i++){
        if(maxValue < arr[i]){
            maxValue = arr[i];
        }
     }
    let compareArr = [];
    for(let i = 0; i <= maxValue; i++){
        compareArr.push(i);
     }
     console.log(compareArr);

    let absentArr = [];
    for(let i = 0; i < compareArr.length; i++)

     
}

missingNum([0,6,4,1,2]);``