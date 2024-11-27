
// version-9.4

function averageValue(arr){
    let i =0;
    let sum = 0;
    for(i=0; i<arr.length;i++){
      
        sum += arr[i];
       avg = sum/arr.length;
}
     
    console.log(avg);
   
}

let array = [1.5, 2.5, 3.5];
averageValue(array);

let array1 = [1000000, 5000000, 3000000, 7000000, 9000000];
averageValue(array1);

let array2 = [2, 4, 6, 8, 10];
averageValue(array2);

let array3 = [3, -7, 5, -2, 9];
averageValue(array3);

let array4 = [0, 0, 0, 0];
averageValue(array4);

let empty = [];
averageValue(empty);
