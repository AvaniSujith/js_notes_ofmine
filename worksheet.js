// function negOrPos(num){
//     if(num < 0){
//         console.log("negative");
//     }else if(num > 0){
//         console.log("positive");
//     }else{
//         console.log("zero");
//     }
// }


// negOrPos(9);
// negOrPos(-9);
// negOrPos(0);


// function vowel(l){
//     // let l = uppercase(letter);

//     let letter = l.toUpperCase()
//     if(letter === 'A' ||
//         letter === 'E' ||
//         letter === 'I' ||
//         letter === 'O' ||
//         letter === 'U'
//     ){
//         console.log("Vowels");
//     }else{
//         console.log("consonent");
//     }
// }

// vowel("i");
// vowel("E");
// vowel("f");


// function voting(age){
//     if(age >= 18){
//         console.log("eligible");
//     }else{
//         console.log("Not eligible");
//     }
// }

// voting(10);
// voting(99);
// voting(18);

// function oddOrEven(num){
//     if(num%2===0){
//         console.log("Even");
//     }else{
//         console.log("Odd");
//     }
// }

// oddOrEven(9)
// oddOrEven(10)
// oddOrEven(5555555)


// function sum(n){
//     let sum = n * (n+1) / 2;

//     console.log(sum);
// }

// sum(3);
// sum(4)

// function factorial(num){
//     let fact = 1;
//     for(let i = 1; i<= num; i++){
//         fact *=  i;
//     }
//     console.log(fact);
// }

// factorial(3);
// factorial(2);


// function maxValue(arr){
//     let max = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(max < arr[i]){
//             max = arr[i];
//         }
//     }
//     console.log(max);
// }

// maxValue([1,4,3,2]);


// async function fetchData() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// fetchData();

async function fetchData() {
    console.log("Fetching data...");

    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();

    console.log("Data received:", data);
}

console.log("Start");
fetchData();
console.log("End");

console.log("Start");

setTimeout(() => {
    console.log("Async Task Completed");
}, 2000);

console.log("End");