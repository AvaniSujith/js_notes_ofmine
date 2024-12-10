// Q. prime question 

// function prime(num){
//     if(num < 0){
//         console.log('invalid')
//     }else if(num === 1){
//         console.log('Special case')
//     }else{

//         for(let i = 2; i < num; i++){
//             if(num%i === 0){
//                 return "Not prime"
//             }
//         }

//         return "Prime"
//     }
// }

// console.log(prime(9))
// console.log(prime(11))
// console.log(prime(3))
// console.log(prime(7))


// function prime(num){
//     if(num < 0){
//         console.log('Negative numbers')
//     }else if(num === 0){
//         console.log('zero')
//     }else if(num === 1){
//         console.log('Special case')
//     }else{
//         for(let i = 2; i<num; i++){
//             if(num%i === 0){
//                 return 'Not prime';
//             }
//         }
//         return 'prime'
//     }
// }


// console.log(prime(7))
// console.log(prime(49))

// Q. negativeOrPositive 

// function negOrPos(num){
//     if(num < 0){
//         console.log("negative")
//     }else if(num > 0){
//         console.log("positive")
//     }else{
//         console.log("zero")
//     }
// }

// negOrPos(0)
// negOrPos(-1)
// negOrPos(2)

// Q.vowel 

// function vowel(input){
//     if(input === 'a' || input === 'A' || input === 'e' || input === 'E' || input === 'i' || input === 'I' || input === 'o' || input === 'O' || input === 'u' || input === 'U'){
//         console.log('vowels')
//     }else{
//         console.log('consonent')
//     }
// }


// vowel('p')
// vowel('u')
// vowel('I')

// Q voting 

// function voting(num){
//     if(num > 18){
//         console.log('eligible')
//     }else{
//         console.log('ineligible')
//     }
// }


// voting(9)
// voting(19)

// Q odd or even 
// function oddOrEven(num){
//     if(num%2 === 0){
//         console.log('even')
//     }else{
//         console.log('odd')
//     }
// }

// oddOrEven(9)
// oddOrEven(8)

// Q.sum of natural 
// function sumOfNum(num){
//     sum = num*(num+1)/2
//     console.log(sum)
// }

// sumOfNum(4)
// sumOfNum(3)


// Q.Factorial
// function fact(n){
//     if(n === 1 || n === 0){
//         console.log("1")
//     }else{
//         // n *= n+1
//         let fact = 1
//         for(let i = 1; i <= n; i++ ){
//             n *= n+i
//             fact = n
//         }
//         console.log(fact)
//     }
//     // console.log(n)
// }

// fact(7)
// fact(3)


// function fact(n){
//     if(n < 0){
//         console.log('Invalid')
//     }else if(n === 0 || n === 1){
//         console.log('1')
//     }else{
//         let fact = 1;
//         for(let i = 2 ; i<=n ; i++){
//             fact *= i
//         }
//         console.log(fact)
//     }
// }

// fact(7)

// Q. avg of array 

// function avg(arr){
//     let sum = 0;
//     let average = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }

//     avg = sum / arr.length;
//     console.log(avg)
// }

// let arr = [-5, 10, 15, -20, 25]
//  avg(arr)

// Q. multiplication table 

// function multiple(num){
//     for(let i = 1; i<= 10; i++){
//         console.log(`${num} x ${i} = ${num*i}`)
//     }
// }

// multiple(3)


// Q. maxValue 

// function max(arr){
//     let maxValue = arr[0]
//     for(let i = 0; i< arr.length; i++){
//         if(maxValue < arr[i]){
//             maxValue = arr[i]
//         }
//     }
//     console.log(maxValue)
// }

// max([1,5,3,55,6,7])

// Q.remainder

// function remainder(num1, num2){
//     if( num1 === 0 || num2 === 0){
//         console.log('Invalid')
//     }else {
//         console.log('When num1 divided num2');
//         let remainder = 0;
//         remainder = num2 % num1;
//         console.log(remainder);

//         console.log('when num2 divides num1');
//         let remainder1 = 0;
//         remainder1 = num1%num2;
//         console.log(remainder1)
//     }
// }

// remainder(2,3)


// Q.avg

// function average(arr){
//     let sum = 0;
//     for(let i = 0; i< arr.length; i++){
//         sum += arr[i]
//     }
//     let avg = 0;
//     avg = sum / arr.length
//     console.log(avg)
// }

// average([1,2,3,4,5])

// Q. matrix addition 

// function addition(matrix1, matrix2){
//     if(matrix1.length !== matrix2.length){
//         return "Invalid"
//     }
//     let sumArr = []
//     for(let i = 0; i < matrix1[i].length; i++){
//         for(let j = 0 ; j < matrix1[i].length ; j++){
//             sumArr[i][j] = matrix1[i][j] + matrix2[i][j]
//             sumArr.push(sumArr[i][j])
//         }
//     }

//     return sumArr
// }

// let m1 = [[1,2,3],[4,5,6]];
// let m2 = [[1,1,1], [1,1,1]];

// console.log(addition(m1, m2))

// function matrixAddition(m1, m2){
//     if(m1.length !== m2.length){
//         return "Invalid"
//     }else if(m1.length === 0 || m2.length === 0){
//         return "Invalid"
//     }else{
//         let sumArr = []
//         for(let i = 0; i<m1.length; i++){
//             let newRow =[]
//             for(let j = 0; j < m1[i].length ; j++){
//                 newRow.push(m1[i][j] + m2[i][j])
//             }
//             sumArr.push(newRow)
//         }
//         return sumArr
//     }
// }


// let m1 = [[1,2,3],[4,5,6]];
// let m2 = [[1,1,1], [1,1,1]];

// console.log(matrixAddition(m1, m2))

// Q.diagonal 

// function diagonal(matrix){
    
//     if(matrix.length === 0){
//                 return "Invalid"
//             }
//             for(let i = 0; i < matrix.length; i++){
//                 if(matrix[i].length !== matrix.length){
//                     return "Not a square matrix"
//                 }
//             }
    
//     for(let i = 0; i < matrix.length; i++){
//         for(let j = 0; j < matrix[i].length ; j++){
//             if(i !== j && matrix[i][j] === 0){
//                 return true;
//             }
//         }
//     }
//     return false;

// }

// console.log(diagonal([[1,0,0],
//           [2,3,4],
//           [9,1,0]]))



// function diagonal(matrix){
//     if(matrix.length === 0){
//         return "Invalid"
//     }
//     for(let i = 0; i < matrix.length; i++){
//         if(matrix[i].length !== matrix.length){
//             return "Not a square matrix"
//         }
//     }

//     for(let i = 0; i < matrix.length ; i++){
//         for(let j = 0; j < matrix[i].length ; j++){
//             if(i !== j && matrix[i][j] !== 0){
//                 return "not"
//             }
//         }
//     }
//     return "yes"
// }

// console.log(diagonal([[1,0,0],
//                       [2,3,4],
//                       [9,1,0]]))
    

// console.log(diagonal([]))

// function pattern(num, num1){
//     let final = ''
//     for(let i = 0; i< num; i++){
//             let newLine = '*'
//         for(let j = 0;  j < num1 ; j++){
//             newLine += " * "
//         }
//         final += newLine + '\n'
//     }
//     console.log(final)
// }

// pattern(2,3)

// Q.identity matrix 

// function identity(matrix){
//     if(matrix.length === 0){
//         return "Invalid"
//     }

//     for(let i = 0; i < matrix.length; i++){
//         // if(matrix.length !== matrix[i].length){
//         //     return "Invalid"
//         // }

//         if(matrix[i].length !== matrix.length){
//             return "invalid"
//         }
//     }


//     let flag = true;
//     for(let i = 0; i < matrix.length; i++){
//         for(let j = 0; j < matrix[i].length; j++){
//             if(i === j && matrix[i][j] !== 1){
//                 flag = false;
//             }else{
//                 if(i !== j && matrix[i][j] !== 0){
//                     flag = false
//                 }
//             }

//         }
//     }

//     if(flag == true){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(identity([[1,0,0],
//                      [2,3,4],
//                      [9,1,0]]))



// console.log(identity([[1,0],
//                      [9,1]]))




// 7.transpose 

// function transpose(matrix){
//     if(matrix.length === 0){
//         return "Invalid"
//     }

//     let transposeMatrix = []
//     for(let i = 0; i<matrix.length; i++){
//         let newRow = [];
//         for(let j = 0; j < matrix[i].length; j++){
//             newRow.push(matrix[j][i])
//         }
//         transposeMatrix.push(newRow)
//     }

//     return transposeMatrix
// }

// console.log(transpose([[1,2],
//                        [3,4]]))


// 8. repetition 

// function repeat(arr){
    
//     let maxValue = '';
//     let count = 0;
//     let maxCount = 0;
//     for(let i = 0; i < arr.length; i++){
//         let val = arr[i];
//         for(let j = 0; j < arr.length; j++){
//             if(val == arr[j]){
//                 count++
//             }

//             if(maxCount< count){
//                 maxCount = count;
//                 maxValue = arr[j]
//             }
//         }
//     }

//     return `${maxCount} : ${maxValue}`;
    
// }


// console.log(repeat([1,44,5,5,4,3,5,6,7]))

// function repeat(arr){
//     let maxValue = [];
//     let maxCount = 0;
//     for(let i = 0; i < arr.length; i++){
//         let count = 0;
//         for(let j = 0; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 count++;
//             }
//         }
//         if(maxCount< count){
//             maxCount = count;
//             maxValue = [arr[i]]
//         }else if(maxCount === count && !maxValue.includes(arr[i])){
//             maxValue.push(arr[i])
//         }
//     }
//     return `${maxCount} : ${maxValue}`
// }

// console.log(repeat([1,4,4,5,5,4,3,5,6,7,7,7]))


