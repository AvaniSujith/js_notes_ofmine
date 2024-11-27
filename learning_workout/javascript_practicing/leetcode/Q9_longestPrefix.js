// write a function to find the longst common prefix string amongst an array of strings . If no common prefix return empty string "".

// function longestPrefix(arr){
//     // let shortest = arr[0];
//     //  if(arr[0].length > arr[1]){
//     //     shortest = arr[1]
//     //  }
//     //  if(arr[1])
//     console.log(arr);
//     let elements = JSON.stringify(arr);
//     elements.split(",")
//     console.log(elements)
//     let shortest = 0;
//     for(let i = 0 ; i < arr.length ; i ++){
//        shortest = Math.min(arr[i]);
//     }
//     // return shortest;
// }

// console.log(longestPrefix(["flower","flow","flight"]));


function longestPrefix(strs){
    if(strs.length === 0){
        return "";
    }

    let shortest = strs[0];
    for(let i = 1; i < strs.length; i++){
        if(strs[i].length < shortest.length){
            shortest = strs[i];
        }
    }
    // return shortest;

    let prefix = "";
    for(let i = 0 ; i < shortest.length; i++){
        for(let j = 0; j < strs.length; j++){
            if(strs[j][i] !== shortest[i]){
                return prefix;
            }
        }
        prefix += shortest[i];


    }
    return prefix;
}
console.log(longestPrefix(["flower","flow","flight"]));





// shortest = "flow"
// i = 0, 1, 2, 3

// ["flower", "flow", "flight"];   j=0,1,2 ;


// str[0][0] !== shortest[0];     f = f  === prefix = "f"
// str[0][1] !== shortest[0];      
