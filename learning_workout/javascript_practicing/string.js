// string methods

let string = "My name is Avani";
console.log(string);
console.log(string.length);


//Accessing string elements

console.log(string.includes("i"));
console.log(string.includes("Avani"));
console.log(string.indexOf("e"));
console.log(string.lastIndexOf("i"));
console.log(string.charAt(4));
console.log(string.charCodeAt(15));

//compare strings

let newString = "ZZZ";
console.log(string.localeCompare(newString));  //negative value like -1 means they are not equal and if they are equal we get 0 as product.
let equalStr = "My name is Avani";
console.log(string.localeCompare(equalStr));

console.log(string.replace("Avani", "avani"));
let replacingStr = "hello hey hello hey hello";
console.log(replacingStr.replaceAll("hey", "helllo"));


//get substring of the string
console.log(string.substring(4,16));
console.log(string.slice(4,16));      //allows negative indexes.
console.log(string.slice(-1,-8));

console.log(string.split("i")) /// split from some letters or index.
console.log(string.split(""));
console.log(string.split(" "));


let subStr = string.split("");
console.log(subStr);
console.log(subStr.join( ));
console.log(subStr.join(""));

//Removal of extra whitespace in a sentence

let str = "         hello            i am            avani          ";
console.log(str);
console.log(str.trim());  // white spaces only removed from the starting and ending of the string.
console.log(str.replaceAll(" ", ""));

// toLowerCase vs tolocaleLowerCase
console.log(string.toLowerCase());
console.log(string.toLocaleLowerCase());

console.log('HELLO'.toLocaleLowerCase());     //case conversion follwoing specific rules for specific language such as arabic.
console.log('İSTANBUL'.toLocaleLowerCase('tr-TR'));



//conversions of object to string

const obj = {
    name: "ishal",
    mark : 99
}

console.log(obj);
console.log(JSON.stringify(obj))


//concat method

let firstStr = "hello how are you? ";
let nextStr = "Hope you are fine."

console.log(firstStr.concat(nextStr));