// console.log(document);
// console.dir(document);
// document.title = "my page";
// document.body.style.backgroundColor = "black";

// const geustName = "";
// const welcomeMsg = document.getElementById('name');

// welcomeMsg.textContent += geustName === "" ? 'Guest' : geustName;
// var a = 9;
// console.log(a);


// var remainder = 23%2;
// console.log((remainder));









// function stringToArray(str){
//     let arr = []
//     for(let i = 0; i < arr; i++){
//         arr.push(str[i]);
//     }
//     console.log(arr);
// }



// stringToArray("avani");

// function countingOf(arr, i){
//     for(let i = 0; i < arr.length ; i++){
//      if(i === arr[i]){
//         return true;
//      }
//     }
// }



// function countDays(arr){
//     let value = prompt("Enter name");
//     let lengthOfName = value.length;
//     console.log(lengthOfName);
//     let arr = [];
//     for(let i = 0; i < lengthOfName; i++){
//         arr.push(value);
//     }
//     console.log(arr)
//     console.log(typeof(value));
//     console.log(typeof(arr));
    
// }


// function naming(choice){
   
//     let choice = prompt("Enter your choice - 1 / 2 / 3");

//     if(choice !== 1 || choice !== 2 || choice !== 3){
//         return "Invalid choice"
//     }

//     if(choice === 1){
//      document.write("You selected option one");
//      let str = "avani";
//      let arr = 0;
//      document.write(str);
//      for(let i = 0; i<str.length; i++){
//         arr.push(str[i]);
//      }
//      document.write(arr);
//     }else if(choice === 2){
//         document.write("odd numbers till 10");
//         for(let i = 0; i < 10; i++){
//             if(i%2 !== 0){
//                 document.write(i);
//             }
//         }
//     }else{
//         document.write("Your choice is 3");

//         let name = prompt("Enter your name");
//         document.write("Your name is ",name);
//         console.log(typeof(name));
    
//     }


// console.log("hello");
// console.log("how are yyou");

// if(n%2==0){
//     console.log("Even");
// }else{
//     console.log("odd")
// }


// if(n > 0){
//     console.log("Positive");
// }else if(n <0){
//     console.log("negative");
// }else{
//     console.log("Zero");
// }











// var age = 22;
// console.log(age);


// age ++;
// console.log(age);

// let fullName = 'avani s';
// console.log(fullName);
// let fullName = 'hari';
// console.log(fullName);

// let num = 0;
// function findMissingNumber(num){
    
//     for(i=0; i<num; i++){
//        return sum = num(num+1);
//     }
    
 

// }

// console.log(findMissingNumber(2));


// let sum = 0;
// function findMissingNumber(numbers[],int){
    
// }



// const arr =[5,6,1,7,8,];
// console.log(arr.sort());

// let numbers = [];
// let int = 0;

// function findMissingNumber(numbers){
//     let n = numbers.length;

//     for(i=0; i<n; i++){
//        return sum = numbers[j](numbers[j]+1)/2;
//     }
// }

// console.log(findMissingNumber([1,2,3]));

// var age = 45;
// var age = 55;

// let age = 45;
// let age = 55;

// const PI = 3.14;


// *************Variable can be redeclared and updated, let can only be updated and is used generally. const should always be initialised to some value .  let & const is a local scope variable*********

//Datatypes of JS

// primitive-number, string, boolean,undfeined, Null, BigInt, Symbol
// non-primitive: - Object(collection of values )



// let x;


// let x = true;
// console.log(typeof(x));

// Object

// const student = {
//     name: "avani",
//     age: 2,
//     place: "wayanad"
// }


// console.log(student);
// console.log(typeof(student));

// console.log(student.age);
// console.log(student["name"]);

// student['name'] = 'jashi';
// console.log(student.name);

// practice -1
//  const product = {
//     name : "Parker Jotter",
//     rating : 5,
//     offer : 5,
//     price : 270
//  }

//  const profile = {
//     name : "avani",
//     follow : true,
//     post : 250,
//     followers : 345,
//     following : 444,
//     occupation : "entrepreneur"

//  }

//  console.log(typeof profile["name"]);
//  console.log(profile);
//  console.log(product);
//  console.log(product["offer"]);


//operators and conditional statements
// let a = 4;
// let b = 5;

// console.log(" a + b =", a+b);
// console.log(" a * b =", a*b);
// console.log(" a - b =", a-b);
// console.log("a / b =", a/b);
// console.log(" a % b =", a%b);
// console.log(" a ** b =", a**b);

//pre-increment and post-increment
// console.log(" a =", a);
// console.log(" a++ =", a++);
// console.log("a=",a);
// console.log("++a =", ++a);

//Assignment operators
// let a = 8;
// a += 4;
// a -= 4;
// a *= 2;
// a **= 2;
// console.log(a);

//comparison operators
// equal to ==
// equal to & type ===
// not equal to !=
// not equal to & type !==
// let x = 4;
// let y = 4;
// console.log(x === y);

//logical operators
// logical and && - both conditions true 
// logical or || - any one is true 


// conditional statement 
// if 
// if-else 


// let num=10;
// if(num === 10) console.log("its ok, but not generally followed")


// ternary ooperator
// consition?true o/p : false o/p 
// let age = 25;
// // let newAge = age + 2? console.log("its ok", newAge): console.log("not fine");
// let result= age>20? "adult":"young";
// console.log(result);

// let num =9;
// let type = num%2 === 0? "even" : "odd";
// console.log(type);

// practice-2
// let number = prompt("Enter a number:");

// function check(number){
//     if(number % 5 === 0){
//         console.log(`${number} is a multiple of 5`);
//     }else{
//         console.log(`not a multiple`);
//     }
// }
// check(number);


// let score = prompt("Enter your score: ");
//  function grade(score){
//     if( score >= 80 && score <= 100){
//         console.log("Your grade is A");
//     }else if(score >= 70 && score <= 89){
//         console.log("Your garde is B");
//     }else if(score >= 60 && score <= 69){
//         console.log("Your grade is C")
//     }else if(score >= 50 && score <= 59){
//         console.log("Your garde is D");
//     }else if(score >= 0 && score <= 49){
//         console.log("YOur grade is F")
//     }
//  }

//  grade(score);


// loops in javascript

// for(let i =0; i <=10000; i++){
//     console.log("hello");
// }
 

// function loop(num){
    // for(let i =0; i <=num; i++){
    //     console.log("hello");
    // }
// }

// loop(4);

//sum of first n numbers
// function sum(n){
//     let s =0;
//     for(let i = 0; i <= n; i++){
//         s += i;
    
//     }
//     console.log("sum =",s);
// }

// // console.log(sum(6));
// sum(100);

//while loop


// let i = 1;
// while(i<=5){
//     console.log("i = ", i);
//     i++;
// }

//do-while loop
// let i = 3;
// do{
//     console.log("i = ",i);
//     i++;

// }while(i<=5);


//for-of loop ************************************************ strings and arrays

// let string = "jashin jagadeesh babu p k";
// let length = 0;
// for(let i of string){
//     console.log("i=",i);
//     length++;
// }
// console.log("string length =",length)
// console.log(string.length)

//for-in loop**********************************************objects

// let book = {
//     title : "harry potter",
//     author : "J K Rowling",
//     rating: 5
// }


// for(let i in book){
//     console.log(i)
// }

// for(let i in book){
//     console.log("key =",i,"and value =",book[i]);
// }

// practice-3

// for (let i = 0; i<= 100; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// let guessNum = prompt("Enter the guessing number: ");
// let orgNum = 20;

// if(guessNum == orgNum){
//     console.log("Hurray, u won!");
// }else{
//     console.log("try more guesses");
// }

//string in javascript

// let str = "avani s";
// console.log(str.length);
// console.log(str[3]);


//escape character to dvide line into two lines
// console.log('my name is avani. \nim a student');
// console.log('my name is avani. \tim a student');

// let name = "avani\ts"
// console.log(name.length);
// for(let i = 0; i<= name.length; i++){
//     console.log(i,"value =", name[i]);
// }

///string methods

// let str = "avani s";
// console.log(str.toUpperCase());

// let str1 = "SIJI SUJITH"
// console.log(str1.toLowerCase());


// let str2 = '       sujith d        ';
// console.log(str2.trim());


// let string = 'abcdefghi';
// console.log(string.slice(2,4));
// console.log(string.slice(2,8));
// console.log(string.slice(3));


// let first = "hello";
// let end =" how are you";


// let full = first.concat(end);
// let full= end.concat(first);

// let full = first + end;

// console.log(full);


// let string1 = 'abcdefghi';
// console.log(string1.replace('abc','0123'));
// console.log(string1.charAt(3));

//practice - 4

// let user = prompt("Enter your full name: ");
// let userName = `@${user}`;
// let lengthOfName = user.length;
// let newName = userName.concat(lengthOfName);

// let newName = "@" + user + user.length;
// console.log(newName);


//Array javascript - related same type of information stored.
//strings are immutable.array indices can be mutable.

// let arr = ['avani', 'arya', 'hari'];
// console.log(arr);
// console.log(arr[2]);
// arr[2] = 'you';   
// console.log(arr);
// console.log(typeof(arr));

// let marks = [92,93,94,45];
// console.log(marks);
// console.log(marks.length);

//looping over an array
// let arr = ['avani', 'arya', 'hari'];
// for(let i=0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(let i =1 ; i<= arr.length; i++){
//     console.log(arr[i]);
// }

// for(let el of arr){
//     console.log(el);
// }

// let cities = ['kochi','calicut','pune','delhi'];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }


// practice -5
// let markOfall = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let i = 0; i < markOfall.length; i++){
//     sum += markOfall[i];
// }
// let avg = sum / markOfall.length;
// console.log(avg);

//Different approach

// for( let eachElement of markOfall){
//     sum += eachElement;
// }
// let avg = sum/markOfall.length;
// console.log(avg);

//practice-6
// let items = [250, 645, 300, 900, 50];

// let discounted = 0;
// for(let item of items){
//     discounted += (item - (item / 10));
//     }
// console.log(discounted);

// for(let i = 0; i < items.length; i++){
//     let newItem = items[i] - [items[i] / 10];
//     console.log(newItem);
// }


// for(let item of items){
//     item = item - (item/10);
//     console.log(item)
// }

//array methods in javascript
 
// push- add element to end of array 
//  let food = ['rice', 'porotta', 'chapathi'];
//  console.log(food);
//  food.push('curry');
//  console.log(food);

 //pop - delete elemnt from end

//  let deleted = food.pop();
//  console.log(food);
//  console.log(deleted);

 ///toString - convert array into string

 
//  console.log(food.toString());

 //concate - join two array

//  let namesOfChar = ['spiderman','batman','ironman'];
//  let char = ['superman','thor']

//  let heros = namesOfChar.concat(char);
//  console.log(heros);

//unshift - add to start

// let food = ['rice', 'porotta', 'chapathi'];
// food.unshift('curry');
// console.log(food);

//shift - delete from start & return

// let shifted = food.shift();
// console.log(shifted);
// console.log(food);

//slice- get elements within a range

// let numbers = [0,1,2,3,4,5,6,7,8,9];cxvcbcbvnbvn
// console.log(numbers.slice(2,6));

//splice - change org array (add, remove, replace)
//   numbers.splice(44,0,5);
//   console.log(numbers);


//Functions in javascript


// function printingName(){
//     console.log("avani s ");
// }

// function printingFunction(msg){
//     console.log(msg);
// }
// printingFunction("hello");

//after return statement no codes written will be executed. parameters/arguments are block elements defined only within the function.

//arrow funcitons

// const functionName = (para1, para2) => {
//     //code
// }

// const sum = (a,b) => {
//     return a + b;     //return function should be assigned to a new variable and consoled otherwise do console.log(functionName(para1, para2))
//     // console.log(a + b);
// }
// sum(2,3);
// console.log(sum(3,7));

// const multiplication = (a,b) => {
//     console.log(a * b);
// }
// multiplication(2,8);


//practice -6
 
// function countVowel(string){
//     let count = 0;
//     for(let i = 0;i < string.length ;i++){
//         // console.log(string[i]);
//         if(string[i] == "a" || string[i] =="e" || string[i] =="i" || string[i] =="o" || string[i] =="u" ){
//             count += 1;
//             // console.log(string[i])
//         }
//     }
//     console.log(count);
// }

// const counting = (string) => {
//     let count = 0;
//     for(let i = 0 ; i<string.length; i++){
//         if(string[i] == "a" || string[i] =="e" || string[i] =="i" || string[i] =="o" || string[i] =="u" ){
//             count++ ;
//         }
//     }
//     console.log(count)
// }


// counting('jashin');
// countVowel("avani");


//forEach -method used with array ************ higher order function/methods -- takes funciton as parameter / return a function as result
//arr.forEach(callback function)

// let arr = [1,2,3,4];
// // arr.forEach(function(val){
// //     console.log(val);
// // })
// arr.forEach((val , index, arr)=>{
//     console.log(val, index, arr);
// });


// practice - 7

// let Array = [1,2,3,4];

// // Array.forEach((val) =>{
// //     for(let i = 0; i<Array.length; i++){
// //         console.log(val[i] = val[i]**2)
// //     }
// // })

// Array.forEach((val) => {
//     console.log(val ** 2);
// })


//map in javascript - similar to forEach. return a new array with the result of operation

// let num = [2,44, 5,55];

// num.map((val) =>{
//     console.log(val);
// });



// function target(){
//        let total = 0;
//     for(let day = 0; day < 180; day ++){
//          total += 8 * day;
//     }
//     console.log(total);
// }
 
// target();

///simply questions *****************************************************************************

function target(){
    
    let totalGoal = 0;
    let currentTotal = 349 + (9/60);

    for(let day = 0; day < 180; day ++){
        totalGoal += 8;
    }

    let remainingHours = totalGoal - currentTotal;
    let dailyGoal = remainingHours / 87;

    console.log(`Your Daily Goal is : ${dailyGoal}`);
    console.log(`Total target hours: ${totalGoal} hours`);
    console.log(`You have ${remainingHours} hours remaining to reach your goal.`);

}

target();


//**************************************************************************************************** */


// let num = [1,2,3,4];
//  num.map((val)=>{
//     console.log(val);
//  });
 
//  let newArray = num.map((val)=>{
//     return val;
//  });

//  console.log(newArray);


//  num.forEach((Element, index, num) =>{
//     // console.log(Element);
//     console.log(Element, index);
//     // console.log(num);
//  });


// filter in array method - filter ouot elemeents of array depending upon certain conditions, the return value is a  new array

// let arrayElement = [1,2,3,4,5,6,7,8];
// let newArr = arrayElement.filter((val)=>{
//     return val % 2 === 0;
// });

// console.log(newArr);

// let oddArr = arrayElement.filter((val)=>{
//     return val % 2 !== 0;

// });

// console.log(oddArr);

//reduce method in array - input array changed into a single value in reduced form . like avg


// let arr = [1, 2, 3, 4 ];

// const output = arr.reduce((res, curr) =>{
//     return res + curr;
// });

// console.log(output);

// //return the max element in an array
// let arrayMax = [2, 4, 66, 1, 22];

// const maxValue = arrayMax.reduce((prev,next)=>{
//     return prev > next ? prev : next;
// });

// console.log(maxValue);

// //practice - 8

// let marks = [22, 6, 77, 99, 44, 98, 93, 96];
// //  const mark = marks.reduce((val)=>{
// //     if(val > 90){
// //         return val;
// //     }
// //  });

// //  console.log(mark);


// const mark = marks.filter((val)=>{
//     return val > 90;
// });

// console.log(mark);

// practice - 9

// let input = prompt("Enter the number");

// let arr = [];
// for(let i = 0; i < input; i++){
//  arr[i-1] = i;
// }

// console.log(arr);



