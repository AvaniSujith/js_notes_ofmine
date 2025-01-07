function mix(arr1, arr2, offset){
    if((!Array.isArray(arr1) || (!Array.isArray(arr2)))){
        return "Error: the inputs should be array";
    }
    if(arr1.length === 0 || arr2.length === 0){
        return "Error empty array"
    }
    if(offset <= 0){
        return "error offset must be positive";
    }

    let result = [];
    let i = 0;
    let j = 0;
    while(i< arr1.length || j< arr1.length){
        if(i<arr1.length){
            result.push(arr1[i]);
            i++;
        }

        if(j<arr2.length){
            for(let k =0 ; k<offset;k++){
                if(j<arr2.length){
                    result.push(arr2[j]);
                    j++;
                }
            }
        }
    }
    return result;
}

console.log(mix([1,2], [3,4,5], 2));
console.log(mix([], [1,2,3], 1))
console.log(mix([1,2], [3,4,5], -2));