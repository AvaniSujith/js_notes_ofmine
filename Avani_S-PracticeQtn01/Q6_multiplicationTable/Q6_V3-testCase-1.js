// / version-6.3


function multiplicationTable(num){
    let emptyArr = [];
    for(i=0 ; i<11; i++){
       
       let results = num  * i;
     
       let result = `${i} x ${num} = ${results}`;
       emptyArr.push(result);
   }
   return emptyArr;
}

// console.log(multiplicationTable(3));
function testMultiplicationTable(){
    


        const testCases = [
            {
                input : 19,
                output :[
                        '0 x 19 = 0',
                        '1 x 19 = 19',
                        '2 x 19 = 38',
                        '3 x 19 = 57',
                        '4 x 19 = 76',
                        '5 x 19 = 95',
                        '6 x 19 = 114',
                        '7 x 19 = 133',
                        '8 x 19 = 152',
                        '9 x 19 = 171',
                        '10 x 19 = 190'
                ] 
            },
            
            {
                input : 2,
                output :[
                    '0 x 2 = 0',
                    '1 x 2 = 2',
                    '2 x 2 = 4',
                    '3 x 2 = 6',
                    '4 x 2 = 8',
                    '5 x 2 = 10',
                    '6 x 2 = 12',
                    '7 x 2 = 14',
                    '8 x 2 = 16',
                    '9 x 2 = 18',
                    '10 x 2 = 20'
        ] 
            },
            {
                input :4,
                output :[
                        '0 x 4 = 0',
                        '1 x 4 = 4',
                        '2 x 4 = 8',
                        '3 x 4 = 12',
                        '4 x 4 = 16',
                        '5 x 4 = 20',
                        '6 x 4 = 24',
                        '7 x 4 = 28',
                        '8 x 4 = 30',
                        '9 x 4 = 36',
                        '10 x4 = 40'
                ] 
            },
        ]

    testCases.forEach((testCase, index) =>{
        const result = multiplicationTable(testCase.input);

        if(result == testCase.output){
            console.log(`Test cases ${index + 1} passed`);
        }else{
            console.log(`Test cases ${index + 1} failed\n correct output - ${result}`);
        }
    });

}

testMultiplicationTable();
