// Q1. Trapping Rainwater Problem states that given an array of n non-negative integers arr[] representing an elevation map where the width of each bar is 1, compute how much water it can trap after rain.

// Trapping Rainwater Problem
// Trapping Rainwater Problem

// Examples:  

// Input: arr[] = [3, 0, 1, 0, 4, 0, 2]  - min(3,4) - 0 = 3, min(3, 4) - 1 = 2, min(3, 4) -  0 = 3, min(3, 2) - 4 = -2, min(4, 2) - 0 = 2// Output: 10
// Explanation: The expected rainwater to be trapped is shown in the above image.


// Input: arr[] = [3, 0, 2, 0, 4]
// Output: 7
// Explanation: We trap 0 + 3 + 1 + 3 + 0 = 7 units.

function waterCollection(height){
    let left = [];
    let height = [];
    let right = [];
    let water = 0; 

    for(let i = 0; i< arr.length - 1; i++){
        left[0] = height[0];
        for(let j = 1; j < arr.length -1; j++){
            left[i] = min()
        }
}