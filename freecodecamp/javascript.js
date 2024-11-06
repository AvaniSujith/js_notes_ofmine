// Always use camelCase 
var myName = 'Avani';
console.log(myName);


//number

var a;
var b;
a=7;
b=5;
console.log('a=' + a + ' ' + 'b=' + b);

b=a;
console.log('a=' + a + ' ' + 'b=' + b);


//Maths

var firstNumber = 20;
var secondNumber = 10;

var sumOfNumbers = firstNumber + secondNumber;
console.log(sumOfNumbers);


var differenceOfNumber = firstNumber - secondNumber;
console.log(differenceOfNumber);


//increment decrement etc

var myVar = 87;
myVar ++;
console.log(myVar);

myVar --;
console.log(myVar);

var remainder = 11%4;
console.log(remainder);

var x = 10;
var y = 20;
var z = 19;

x += 10;
y += 20;
z += 22;
console.log(x, y, z);



x -= 2;
y -= 1;
z -= 3;
console.log(x, y, z);


x *= 2;
y *= 3;
z *= 4;
console.log(x, y, z);


x /= 2;
y /=3;
z /=4;
console.log(x, y, z);

//literals problems escape
var myStr = "My name is \"Avani\" helloo \"haiii\" how are you \"doing?\"";
console.log(myStr);

// const num = 20;
var num =20;
num ++;
console.log(num);




var firstString ='Im happy';
firstString += 'im okay';
console.log(firstString)

var mySelf = 'Avani';
var fullSentnece = 'My name is ' + mySelf;
console.log(mySelf);
console.log(fullSentnece);


//Apending variables
var awesome = ' Im';
console.log(awesome.length);
var good = ' feeling good';
good += awesome;
awesome += good;
console.log(good);
console.log(awesome);

//length

var count = good.length;
console.log(count);

//getting specific letters in position

var myString = 'hello world';
console.log(myString[0]);

var notKnownLength = 'rithika';
console.log(notKnownLength[notKnownLength.length-1]);
console.log(notKnownLength[notKnownLength.length-2]);
console.log(notKnownLength[notKnownLength.length-3]);
console.log(notKnownLength[notKnownLength.length-4]);
console.log(notKnownLength[notKnownLength.length-5]);
console.log(notKnownLength[notKnownLength.length-6]);
console.log(notKnownLength[notKnownLength.length-7]);
console.log(notKnownLength[notKnownLength.length-8]);

//sententce creation

function sententce(name, title, feeling){
    var result = 'My name is '+ name +'. Im a ' + title + '. Im feeling '+ feeling;
    return result;

}

console.log(sententce("avani", "student", "good"));
console.log(sententce('lia','doctor','excellent'));


//arrays

var ourArray = ['John', 22];
console.log(ourArray);

var myArray = [1,22,99];
myArray[1]= 0;
console.log(myArray);

var nestesdArray = [['one','two'],['two','three']];
console.log(nestesdArray[0][1]);
console.log(nestesdArray[0,1]);


var names = ['hari', 'mahi', 'deepth', 'lia', 'lency'];
names.push(['gayu', 'ram', 'sam']);
console.log(names);

myArray.pop();
// myArray.shift();

console.log(myArray);


myArray.unshift('avani');
console.log(myArray);


//shopping list
var myList =[['apple',3],['soap',2],['banana',6],['icecream',9]];
console.log(myList[0][0]);



//function
function haiWorld(){
    console.log('hello world');
};
haiWorld();
haiWorld();

function addition(a,b){
    var sum = a + b;
    return sum;
    // console.log(sum);
}


// addition(2,6);
console.log(addition(2,6));

//global and local scope
var myGlobal =10;

function fun1(){
//    var oopsGlobal =5;
oopsGlobal = 5;
}
function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

//local scope

function myLocal() {
    var myVariable = 5;
    console.log(myVariable);
}
myLocal();
// console.log(myVariable);

//Both precedence

var myItem = 'pen';

function Items(){
    var myItem = 'pencil';
    return myItem;
}

console.log(Items());
console.log(myItem);


//return statement

function additionOfFive(num){
    return num + 5;
}
console.log(additionOfFive(10));


// var sum = 0;
// function sumOfTwo(){
//     sum += 5;
// }
// console.log(sumOfTwo());

var resultant = 0;
function resulting(p){
    return p += 3;
}

resultant = resulting;
console.log(resultant(6));


//Queue
function arrayManipulation(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4];

console.log('before: '+ JSON.stringify(testArr));
console.log(arrayManipulation(testArr, 5));
console.log('after: '+ JSON.stringify(testArr));


//boolean
function trueOrFalse(isTrue){
    if(isTrue){
        return "Yes, true";
    }
    return "No, false";
}

console.log(trueOrFalse(true));

