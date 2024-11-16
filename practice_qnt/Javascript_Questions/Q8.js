// Write a program to print fibonacci series

// version-8.1

function fibonacci(n){
    let arr = [];
     arr[0] = 0;
     arr[1] = 1;
    for(let i = 2; i <= n; i++){
       let  x = (arr[i-1]) + (arr[i-2]);
        arr.push(x);

     }
     console.log(arr);

}

fibonacci(10);


