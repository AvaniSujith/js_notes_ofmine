// version-8.1

// function maxValue(arr){

//    arr.sort();
//    return arr[i]-1;
// }

// let array = [1,0,5,8,4,2];
// maxValue(array);


// version-8.2

// function maxValue(arr){
//     // let arr = array;
//     arr.sort()
//     let maxElement = arr[arr.length - 1];
//     console.log(`The max value is ${maxElement}`);
    

// }

// // let array = [1,0,5,8,4,2];
// // maxValue(array);

// let array = [1,0,99,556,39,59,288,47,10000,555555,33,4];
// maxValue(array);


//version-8.3

function maxValue(arr){
    arr.sort((a,b) => a - b);
    let maxElement = arr[arr.length - 1];
    console.log(`The max value is ${maxElement}`)
}

// let array = [1,0,5,8,4,2];
// maxValue(array);

let array = [1,0,99,556,39,59,288,47,10000,555555,33,4];
maxValue(array);
