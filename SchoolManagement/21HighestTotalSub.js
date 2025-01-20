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


// function subWithHighestMark(){

//     let totals = highestTotalMark();
//     let highestMarks = 0;
//     let highestSubject = '';

//     for(let subject in totals){
//         if(totals[subject] > highestMarks){
//             highestMarks = totals[subject];
//             highestSubject = subject;
//         }
//     }

//     return highestSubject;

// }


// console.log(subWithHighestMark());


// function testCase(){
//     // let input = ["Maths"]
//     let output = ["Maths", "English"]

//     for(let i = 0; i < output.length; i++){
//         let result = subWithHighestMark();

//         if(result === output[i]){
//             console.log("Test case passed")
//         }else{
//             console.log("Test case failed");
//         }
//     }
// }

// testCase();


// version - 2

// function highestTotalMark(){
//     let totals = {};

//     for(let i = 0; i < classObj.students.length; i++){
//         let marks = classObj.students[i].marks;
        
//         for(let j = 0; j < marks.length; j++){
//             let subject = marks[j].subject;
//             let mark = marks[j].mark;


//             if(!(subject in totals)){
//                 totals[subject] = 0;
//             }

//             totals[subject] += mark;
//         }
//     }

//     if(subjectName){
//         if(subjectName in totals){
//             return totals[subjectName];
//         }else{
//             return "Not found"
//         }
//     }

//     return totals;
// }

// console.log(highestTotalMark("Maths"))

// version - 3


function highestTotalMark(){
    let totals = {};

    for(let i = 0; i < classObj.students.length; i++){
        let marks = classObj.students[i].marks;
        
        for(let j = 0; j < marks.length; j++){
            let subject = marks[j].subject;
            let mark = marks[j].mark;


            if(!(subject in totals)){
                totals[subject] = 0;
            }

            totals[subject] += mark;
        }
    }

    let highestMarks = 0;
    let highestSubject = '';

    for(let subject in totals){
        if(totals[subject] > highestMarks){
            highestMarks = totals[subject];
            highestSubject = subject;            
            
        }
    }

    return highestSubject;
}

console.log(highestTotalMark());

function testCase(){
    let output = [];

    for(let i = 0; i<input.length; i++){
        let result = highestTotalMark(input[i]);

        if(result === output[i]){
            console.log("Test case passed")
        }else{
            console.log("Test case failed")
        }
    }
}