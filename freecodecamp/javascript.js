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

//Equality

function equalitiy(val){
    // if(val = 12)
    // if(val == 12)
    // if(val === "12")
    // if(val != 12)
    // if(val !== 12)
        if(val !=="12")

    {
        return "yes, equal";
    }
    return "no";
    
}

// console.log(equalitiy(3));
console.log(equalitiy(12));


// comparison

function test(val){
    if(val < 12){
        return "less than 12";
    }
    if(val > 12){
        return "greater than 12";
    }
    if(val == 12){
        return "equal to 12";
    }
   
}

console.log(test(12));

function testNext(value){
    if(value <= 22){
        return "less than 22/ =22";
    }
    if(value >= 22){
        return "greater than 22/ = 22";
    }
    if(value = 22){
        return "equal to 22";
    }
   
}

console.log(testNext("22"));

//and /or operator

function andCase(value){
    if(value > 20 &&  value <30){
        return "Things are okay";

    }
    return "Things are bad";
}
console.log(andCase(23));

function orCase(value){
    if(value == 20 || value > 20){
        return "number is awesome";
    }
    return "error in fetching";
}
console.log(orCase(8));

// if statement

 function chooseOne(num){
    if(num<5){
        return "tiny";

    }
    else if(num<10){
        return "small";
    }
    else if(num<15){
        return "medium";
    }
    else if(num<20){
        return "large";
    }
    else {
        return "huge";
    }
    // else{
    //     return ""
    // }
 }

 console.log(chooseOne(17));



 //golf

var titlesOfEach = ['Hole-in-one!','Eagle','Birdie','Par','Bogey','Double Bogey','Go home!'];
function golfGame(par,strokes){
    if(strokes == 1){
        // return "Hole-in-one!";
        return titlesOfEach[0];
    }
    else if(strokes <= par - 2){
        // return "Eagle";
        return titlesOfEach[1];
    }
    else if(strokes == par - 1){
        // return "Birdie";
        return titlesOfEach[2];
    }
    else if(strokes == par){
        // return "par";
        return titlesOfEach[3];
    }
    else if(strokes == par +1){
        // return "Bogey";
        return titlesOfEach[4];
    }
    else if(strokes == par +2){
        // return "Double Bogey";
        return titlesOfEach[5];
    }
    else if(strokes == par +3){
        // return "Go home";
        return titlesOfEach[6];
    }
}
console.log(golfGame(5,8));


//switch

function switchCase(val){
    switch(val){
        case 1:
            return "Alpha";
            
        case 2:
            return "Beta";

        case 3:
            return "gamma";
        case 4:
            return "delta";
        default:
            return "no option";
    }
}

console.log(switchCase(32));

function chainToSwitch(val){
    var answer = "";
    switch(val){
        case "bob":
        //    return "Marley";
        answer = "Marley";
        break;
        case 42:
        //    return "The answer";
        answer = "The answer";
        break;
        case 1:
        //    return "There is no#1";
        answer =  "There is no#1";
        break;
        case 99:
        //    return "Missed me by ths much";
        answer = "Missed me by ths much";
        break;
        case 7:
        //    return "Ate nine";
        answer = "Ate nine";
        break;


    }
    return answer;
}

console.log(chainToSwitch('bob'));

function isLess(a, b){
    return a < b;
    // if(a < b){
    //     return true;
    // }else{
    //     return false;
    // }
}
console.log(isLess(100,15));

function abTest(a,b){
    if (a < 0 || b < 0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));
}
console.log(2,6);


var count = 0;

function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 10:
        case "j":
        case "q":
        case "k":
        case "A":
            count --;
            break;
        
        
    }

    var holdbet = 'Hold';
    if(count > 0){
        holdbet = "Bet";
    }
    return count + " " + holdbet;
}

cc(2); cc('k'); cc(10); cc('k'); cc('A');
console.log(cc(4));


//Objects
var myCar = {
    "model" : "eon",
    "color" : "red",
    "year" : "2011"

 };
 console.log(myCar);

 var carModel = myCar.model;
 console.log(carModel);

 var menuItem ={
    "the dessert" : "icecream",
    "the main": "biriyani",
    "the juice": "pineapple"
 };

 var desert = menuItem["the dessert"];
 console.log(desert);

 var nameOfPlayer = {
    16 :"navin",
    20: "hari",
    30:"lia"
 }

 var player = 30;
 var playerNum = nameOfPlayer[player];
 console.log(playerNum);

 var myCarDetail = {
    "model" : "eon",
    "color" : "red",
    "year" : "2011"

 };

 myCarDetail.model = "ertiga";
 console.log(myCarDetail.model);

 myCarDetail.fuel = "petrol";
 console.log(myCarDetail);

 delete myCarDetail.year;
 console.log(myCarDetail);


 var obj = {
    gift : "pony",
    pet : "kitten",
    

 }

 function checkObj(check){
    if(obj.hasOwnProperty(check)){
        return obj[check];
    }else{
        return "change me"
    }
 }
 console.log(checkObj("name"));


 var myStorage = {
    "car": {
        "inside":{
            "glove box" : "maps",
            "passenger seat" : "crumbs"
        },
        "outiside":{
            "trunk": "Jack"
        }
    }
 };

 var gloveBoxContents = myStorage.car.inside["glove box"];
 console.log(gloveBoxContents);


 var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulips",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
 ];

//  var secondTree = myPlants[1].list[1];
 var secondTree = myPlants[0].list[2];
 console.log(secondTree);


 var collection = {
    "2548": {
        "album" : "Slippery When Wet",
        "artist" : "Bon Jovi",
        "tracks": [
            "let it rock",
            "you give love"
        ]
    },
    "2468": {
        "album" : "1999",
        "artist" : "Prince",
        "tracks": [
            "1999",
            "Little red "
        ]
    },
    "1234":{
        "artist": "Robert Plamer",
        "track":[ ]
    },
    "5439": {
        "album" : "abba gold",
        
    },

 };

 var collectionCopy = JSON.parse(JSON.stringify(collection));
 function updateRecords(id, prop, value)
{
    if(value == ""){
        delete collection[id][prop];
    }else if(prop === "tracks"){
        collection[id][prop] = collection [id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }
    return collection;
}

updateRecords(5439,"artist","arijit");
console.log(updateRecords(5439,"artist","arijit"));
// console.log(updateRecords(5439, "artist","abba"));


