function firstNonRepeating(str){

    // for(let i = 0; i < str.length; i++){
    //     let value = str[i];
    //     let count = 1;
    //     let isUnique = false;
    //     for(let j = i+1; j < str.length; j++){
    //         if(value === str[j]){
    //             count++
    //         }
    //     }

    //     if(count > 1){
    //         isUnique = true
    //     }

    //     if(!isUnique){
    //         return value
    //     }
    // }
    // return "No unique character";
    
    for(let i = 0; i < str.length; i++){
        let value = str[i]
        let count = 0;
        for(let j = 0; j< str.length; j++){
            if(value === str[j]){
                count ++
            }
        }

        if(count === 1){
            return value
        }
    }

    return "No unique character"

}

console.log(firstNonRepeating("aabbccdeff"))
console.log(firstNonRepeating("abacbc"))
console.log(firstNonRepeating("aabbv"))