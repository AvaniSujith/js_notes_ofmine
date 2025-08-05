// Q1. second largest element in an array

// Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.

// Note: If the second largest element does not exist, return -1.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.

// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 there is no second largest element.

// function secondLargest(arr){
//     // let sortArr = sort(arr);
//     let sortArr = arr.sort((a,b) => b - a)
//     // let sortArr = arr.sort((a, b)=> a - b)
//     return sortArr[1];
// }

// let arr = [10, 5, 10]

// console.log(secondLargest(arr));

// function secondLargest(arr){
//     let sortArr = [];
//     let maxValue = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(maxValue < arr[i] && !sortArr.includes(arr[i])){
//             sortArr.push(arr[i]);
//         }
//     }

//     return sortArr;
// }

// let arr = [10, 5, 10];
// console.log(secondLargest(arr))

function secondLargest(arr) {
  // let sortArr = [];
  // let maxValue = arr[0];

  // for(let i = 0; i<arr.length; i++){
  //     if(maxValue < arr[i]){
  //         maxValue = arr[i];
  //     }
  // }

  // for(let i = 0; i < arr.length; i++){
  //     if(!sortArr.includes(arr[i])){
  //         sortArr.push(arr[i])
  //     }
  // }

  // for(let i = 0; i < sortArr.length; i++){
  //     for(let j = i+ 1; j<sortArr.length; j++){
  //         if(sortArr[i]<sortArr[j]){
  //             let temp = sortArr[i];
  //             sortArr[i] = sortArr[j];
  //             sortArr[j] = temp;
  //         }
  //     }
  // }
  // return sortArr                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           z

  // let sortArr = [];
  // let newArr = [];

  // sortArr = arr.sort((a, b) => b - a);

  // for(let i = 0; i < arr.length; i++){
  //     let val = arr[i]
  //     for(let j = 0; j < sortArr.length; j++){
  //         if(val !== sortArr[j]){
  //             newArr.push(val);
  //         }
  //     }
  // }

  // // return sortArr[1]
  // return newArr[1];

  let sortArr = [...new Set(arr.sort((a, b) => b - a))]; //********************************************************************************* */

  if (sortArr.length < 2) {
    return null;
  } else {
    return sortArr[1];
  }
}

let arr = [12, 35, 1, 10, 34, 1];
// let arr = [10, 5, 10]
// console.log(secondLargest(arr));

// Q2 .Third largest element in an array of distinct elements
// Given an array of n integers, the task is to find the third largest element. All the elements in the array are distinct integers.

function thirdLargest(arr) {
  let sortArr = [...new Set(arr.sort((a, b) => b - a))];
  if (sortArr.length < 3) {
    return null;
  } else {
    return sortArr[2];
  }
}

// let arrA = [1, 14, 2, 16, 10, 20]

let arrA = [19, -10, 20, 14, 2, 16, 10];

// console.log(thirdLargest(arrA))

// Q3. Maximum product of a triplet(subsequence of size 3) in array
// Given an integer array, find a maximum product of a triplet in the array.

function productOfTriplet(arr) {
  // let sortArr = [...new Set(arr.sort((a,b) => b - a))];
  // let tripletArr = []

  // let i = 0;

  // while(i < 3){
  //     tripletArr.push(sortArr[i]);
  //     i++;
  // }

  // let product = 1;
  // for(let i = 0; i < tripletArr.length; i++){
  //     product *= tripletArr[i]
  // }

  // // return tripletArr;
  // return product;

  if (arr.length < 3) return null;

  arr.sort((a, b) => a - b);

  let n = arr.length;

  let p1 = arr[n - 1] * arr[n - 2] * arr[n - 3];
  let p2 = arr[0] * arr[1] * arr[n - 1];

  return Math.max(p1, p2);
}

let arrB = [10, 3, 5, 6, 20];
// let arrB = [-10, -3, -5, -6, -20]
// let arrB = [1, -4, 3, -6, 7, 0]

// console.log(productOfTriplet(arrB));

// Q4. Maximum consecutive one’s (or zeros) in a binary array
// Given an array arr[] consisting of only 0’s and 1’s, the task is to find the count of a maximum number of consecutive 1’s or 0’s present in the array.

function countOfNum(arr) {
  // let count = 1;

  // for(let i = 0; i< arr.length; i++){

  //     if(arr[i] === arr[i+1]){
  //         count++;
  //     }else{
  //         count = 1;
  //     }
  // }

  // return count;

  let count = 1;
  let maxCount = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      maxCount = Math.max(maxCount, count);
      count = 1;
    }
  }

  maxCount = Math.max(maxCount, count);
  return maxCount;
}

// let arrC = [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];

// let arrC = [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]

let arrC = [0, 0, 0, 0];
// console.log(countOfNum(arrC))

// Q5. Move all zeros to end of array
// Given an array of integers arr[], the task is to move all the zeros to the end of the array while maintaining the relative order of all non-zero elements.

function sortArray(arr) {
  let NonZeroArr = [];
  let zeroArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroArr.push(arr[i]);
    } else {
      NonZeroArr.push(arr[i]);
    }
  }

  // let sortArr = NonZeroArr + zeroArr
  // let sortArr = NonZeroArr.concat(zeroArr)

  // return sortArr
  return NonZeroArr.concat(zeroArr);

  // console.log(zeroArr)
  // console.log(sortArr)
}

let arrD = [1, 2, 0, 4, 3, 0, 5, 0];
// console.log(sortArray(arrD));

// Q6. Reverse an Array in groups of given size
// Given an array arr[] and an integer k, the task is to reverse every subarray formed by consecutive K elements.

function reverseInGroup(arr, k) {
  // if(arr.length >= k){
  //     arr.reverse();
  // }else{
  //     for(let i = 0; i<arr.length; i++){
  //         arr.
  //     }
  // }

  let finalArr = [];

  for (let i = 0; i < arr.length; i += k) {
    let part = arr.slice(i, i + k);
    part.reverse();
    finalArr.push(...part);
  }

  return finalArr;
}

// let arrF = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrF = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(reverseInGroup(arrF, 10));

// Q7.Rotate an Array by d – Counterclockwise or Left
// Given an array of integers arr[] of size n, the task is to rotate the array elements to the left by d positions.

// function rotate(){
//     const sortArr = [];
//     for(let i =0;
//         i < arr.length;
//         i++
//     ){

//     }

function sumOfDigits(num) {
  while (num >= 10) {
    let sum = 0;
    let temp = num;

    while (temp > 0) {
      sum += temp % 10;
      temp = (temp - (temp % 10)) / 10;
    }
    num = sum;
  }

  return num;
}

// console.log(sumOfDigits(444));

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// Example 1:
// Input: s = "leetcode"
// Output: 0
// Explanation:
// The character 'l' at index 0 is the first character that does not occur at any other index.
// Example 2:
// Input: s = "loveleetcode"
// Output: 2
// Example 3:
// Input: s = "aabb"
// Output: -1

// repeating of first letter
// function firstLetterRepeatition(str) {
//     // return str.length;

//     str = str.toLowerCase();
//     let first = str[0];
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (first === str[i]) {
//             count++
//         }

//     }

//     return count
// }

// console.log(firstLetterRepeatition("leetcodeLove"));

function firstNonRepeatingLetter(arr) {
  let str = arr.toLowerCase();

  // let str = arr.toLowerCase()
  // for (let i = 0; i < str.length; i++) {
  //     let value = str[i];
  //     // let flag = false;
  //     let index = i
  //     for (let j = i + 1;
  //         j < str.length;
  //         j++
  //     ) {
  //         if (value === str[j]) {
  //             index = j
  //         }
  //     }
  // }
  // return index;

  for (let i = 0; i < str.length; i++) {
    let count = 0;

    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }

    if (count === 1) {
      return i;
    }
  }

  return -1;
}

// console.log(firstNonRepeatingLetter("leetcodeLove"));
// console.log(firstNonRepeatingLetter("hellohowareYou"));
// console.log(firstNonRepeatingLetter("leetcode"));
// console.log(firstNonRepeatingLetter("aabb"));

//You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:
//Every round, first Alice will remove the minimum element from nums, and then Bob does the same.
//Now, first Bob will append the removed element in the array arr, and then Alice does the same.
//The game continues until nums becomes empty.
//Return the resulting array arr.
//Example 1:
//Input: nums = [5,4,2,3]
//Output: [3,2,5,4]
//Explanation: In round one, first Alice removes 2 and then Bob removes 3. Then in arr firstly Bob appends 3 and then Alice appends 2. So arr = [3,2].
//At the begining of round two, nums = [5,4]. Now, first Alice removes 4 and then Bob removes 5. Then both append in arr which becomes [3,2,5,4].
//Example 2:
// Input: nums = [2,5]
// Output: [5,2]
//Explanation: In round one, first Alice removes 2 and then Bob removes 5. Then in arr firstly Bob appends and then Alice appends. So arr = [5,2]

// ****************

// function arrSort(arr) {
//     for (let i = 0; i < ar.length; i++) {

//     }
// }

// *****************

// 1. Write a function that takes a string as input and returns the string with all vowels removed.

// function vowels(string) {
//     let vowels = [];
//     let isVowels = false
//     let length = string.length;
//     let str = string.toLowerCase();
//     for (let i = 0; i < length; i++) {
//         if (str[i] === "a") {
//             isVowels = true;
//             continue;
//         }
//         else if (str[i] === "e") {
//             isVowels = true;
//             continue;
//         } else if (str[i] === "i") {
//             isVowels = true;
//             continue;
//         } else if (str[i] === "o") {
//             isVowels = true;
//             continue;
//         } else if (str[i] === "u") {
//             isVowels = true;
//             continue;
//         }

//         if (!isVowels) {
//             vowels.push(str[i])
//         }
//     }

//     return vowels;
// }

// console.log(vowels("avani"));


// console.log(vowels("avani"));

// Write a function that takes an array as input and returns the array with all duplicates removed.

function duplicatesRemoved(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    let value = arr[i];

    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] === value) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      newArr.push(value);
    }
  }

  return newArr;
}

// console.log(duplicatesRemoved([1, 2, 2, 3, 4, 4, 5]))

// 3. Write a function that takes a number as input and returns the factorial of that number.

function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  return fact;
}

// console.log(factorial(8))

// 4. Write a function that takes a string as input and returns the string with all letters reversed.

function reverseString(string) {
  let length = string.length;
  let reverseArr = [];
  for (let i = length - 1; i >= 0; i--) {
    reverseArr.push(string[i]);
  }

  return reverseArr.join("");
}

// console.log(reverseString("hello"))

// 5. Write a function that takes an object as input and returns the object with all keys and values swapped.

function object(obj) {
  let newObj = {};
  // for (let i = 0; i < obj.length; i++) {
  //     // let value = obj[key];
  //     newObj[key] = obj[value];
  //     newObj[value] = obj[key];
  // }

  for (let key in obj) {
    let value = obj[key];
    newObj[value] = key;
  }

  return newObj;
}

// console.log(object({ a: 1, b: 2, c: 3 }));

// 6. Write a function that takes a number as input and returns the number with all digits reversed.

function digitReversed(num) {
  let str = num.toString();
  let reverseArr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reverseArr.push(str[i]);
  }

  return Number(reverseArr.join(""));
}
// console.log(digitReversed(456));

// 7.Write a function that takes a string as input and returns the string with all words reversed.

function wordsReversed(string) {
  let reverse = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }

  return reverse;
}

// console.log(wordsReversed("hello world how are you"));

// 8. Write a function that takes an array as input and returns the array with all elements squared.

function squaredArray(arr) {
  let length = arr.length;
  // let newArr = []

  for (let i = 0; i < length; i++) {
    // let value = arr[i] * arr[i];
    // newArr.push(value)

    arr[i] = arr[i] * arr[i];
  }

  // return newArr;
  return arr;
}

// console.log(squaredArray([1, 2, 3]));

// 9. find missing number

// function missingNumber(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i + 1] !== arr[i] + 1) {
//             return arr[i] + 1
//         }
//     }

// }

// console.log(missingNumber([1, 2, 3, 5, 6]));

function missingNumber(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //     let min = arr[i];
  //     let maxValue = arr[i];
  // }

  let missingArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      missingArr.push(arr[i] + 1);
    }
  }

  return missingArr;
}

console.log(missingNumber([1, 3, 4, 5, 6, 8]));



function removeDuplicate(str) {
  return [...new Set(str)].join("");
}

console.log(removeDuplicate("Leetterr"));

function addToEnd(str) {
  let arr = str.split("");
  arr.splice(arr.length, 0, ch);
  let res = arr.join("");
  console.log(res);  
}

function vowels(string) {
  let result = [];
  let length = string.length;
  let str = string.toLowerCase();
  for (let i = 0; i < length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      continue;
    }

    result.push(str[i]);
  }

  // return result.toString();
  return result.join("");
}


// Example data
const aob = 
[
    { framework: 'React.JS', website: 'Paypal' },
    { framework: 'React.JS', website: 'Tesla' },
    { framework: 'Angular', website: 'Google' },
    { framework: 'Vue.JS', website: 'Vue' },
    { framework: 'JavaScript', website: 'inblack67' },
]
const superAob = (data, victim) => {

    const obj = {};
  
    data.forEach((data) => {
        if(data.hasOwnProperty(victim)){
            if(obj[data[victim]]){
                obj[data[victim]]++;
            }
            else{
                obj[data[victim]] = 1;
            }
        }
    })
  
    let superArrayOfObjects = [];
  
    for (const key in obj) {
        superArrayOfObjects = [...superArrayOfObjects, { victim: key, count: obj[key]}];
    }
  
    return superArrayOfObjects;
}

console.log(superAob(aob, 'framework'));

// output:-
// [
//     { victim: 'React.JS', count: 2 },
//     { victim: 'Angular', count: 1 },
//     { victim: 'Vue.JS', count: 1 },
//     { victim: 'JavaScript', count: 1 }
// ]




//  How Remove the first element from an array in JavaScript?

let arr = [5, 6, 7];
arr = arr.slice(1); 
console.log(arr);

function isPrime(num) {
    if (num <= 1) 
        return false;
    for (let i = 2; i < num; i++) 
    {
        if (num % i === 0) 
            return false;
    }
    return true;
}

console.log(isPrime(7));

const obj = {
    name: "JavaScript",
    greet: function () {
        console.log(this.name);
    }
};
obj.greet();