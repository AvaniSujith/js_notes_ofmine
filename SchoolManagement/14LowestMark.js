let classObj = {
    "name" : "class A" ,
    "teacherName" : "Mary" ,
    "students" : [ 
        {
            "name" : "Ravi" ,
            "id" : "101" ,
            "marks" : [
                {"subject" : "English" , "mark" : 25}, 
                {"subject" : "Maths", "mark" : 48}, 
                {"subject" : "Physics", "mark" : 40}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 20}
            ]
        },
        {
            "name" : "Aju" ,
            "id" :  "102",
            "marks" : [
                {"subject" : "English" , "mark" : 35}, 
                {"subject" : "Maths", "mark" : 38}, 
                {"subject" : "Physics", "mark" : 33}, 
                {"subject" : "Chemistry", "mark" : 34},
                {"subject" : "Computer", "mark" : 30}
            ]
        },
        {
            "name" : "Mini SS" ,
            "id" : "103" ,
            "marks" : [
                {"subject" : "English" , "mark" : 12}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 18}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 40}
            ]
        },
        {
            "name" : "Binu" ,
            "id" : "104" ,
            "marks" : [
                {"subject" : "English" , "mark" : 49}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 47}, 
                {"subject" : "Chemistry", "mark" : 46},
                {"subject" : "Computer", "mark" : 50}
            ]
        }
    ]
}


// function lowestMark(){
//     let maxMark = ;
//     let student = '';

//     for(let i = 0; i < classObj.students.length; i++){
//         let marks = classObj.students[i].marks;
//         let totalMark = 0;

//         for(let j = 0; j < marks.length; j++){
//             totalMark += marks[i].mark;
//         }

//         if(totalMark < maxMark){
//             maxTotal = totalMark;
//             student = classObj.students[i].name
//         }
//     }

//     return student;
// }


// console.log(lowestMark());

// // function testCase(){
// //     let output = []
// // }


// version-2

// function lowestMark(){
//     let minMark = 0;
//     let student = '';
//     let maxMark = 0;

//     for(let i = 0; i < classObj.students.length; i++){
//         let marks = classObj.students[i].marks;
//         let totalMark = 0;

//         for(let j = 0; j < marks.length; j++){
//             totalMark += marks[i].mark;
//         }

//         if(totalMark < maxMark){
//             maxMark = totalMark;
            
//         }
//     }

    

    
// }



// version-3


function lowestTotalMark(){
    let minMark = 0;
    let student = '';

    let marks = classObj.students[0].marks;
    for(let j = 0; j < marks.length; j++){
        minMark += marks[j].mark;
    }
    student = classObj.students[0].name;


    for(let i = 0; i < classObj.students.length; i++){
        let marks = classObj.students[i].marks;
        let totalMark = 0;

        for(let j = 0; j < marks.length; j++){
            totalMark += marks[j].mark;
        }

        if(totalMark < minMark){
            minMark = totalMark;
            student = classObj.students[i].name;
        }
    }

    return student;
}

// console.log(lowestTotalMark());


function testCase(){
    let output = ["Mini SS", "Avani"];
    let result = lowestTotalMark();
        
    for(let i = 0; i < output.length; i++){
        if(result === output[i]){
            console.log(`Test case passed`);
        }else{
            console.log(`Test case failed`);
        }
    }
}

testCase();

