// Given two strings needle and haystack, return the index of the first occurance of needle in haystack, or -1 if needle is not a part of haystack.

function indexOfOccurance(haystack, needle){
    if(haystack.includes(needle)){
        let index = haystack.indexOf(needle);
        return index;
    }else{
        return -1;
    }
}

console.log(indexOfOccurance("sadbutsad" , "sad"));
console.log(indexOfOccurance("leetcode", "leeto"));