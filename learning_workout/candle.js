// function candles(total, blow){
//     let totalArr = []
//     for(i = 0; i < total; i++){
//         totalArr.push("1");
//     }
//     console.log(totalArr)
//     console.log(totalArr.length)
//     // for(i = 0; i<= totalArr.length; i++){
        
//     // }
//     let blowArr = []
//     if(total < blow){
//         console.log("invalid")
//     }else{
//         for(i = 0; i < totalArr.length; i++){
//             while(blow > 0){
//                 blowArr.push('0')
//             }
//         }
//     }

//     console.log(blowArr)
// }



// candles(5,2)


function candles(total, blow) {
    let totalArr = [];
    
    for (let i = 0; i < total; i++) {
        totalArr.push("1");
    }

    console.log("Total candles (lit):", totalArr);
    console.log("Total candles count:", totalArr.length);

    
    if (blow > total) {
        console.log("Invalid: You can't blow out more candles than exist.");
        return;
    }

    let blowArr = [];

    for (let i = 0; i < total; i++) {

        if (i < blow) {
            blowArr.push('0'); 
        } else {
            blowArr.push('1'); 
        }

    }

    console.log("Candles after blowing out:", blowArr);

}


// Example usage
candles(5, 2);

