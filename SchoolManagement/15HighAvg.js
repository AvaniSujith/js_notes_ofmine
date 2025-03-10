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


// function highAverageMark(){
//     let totalMark = 0;
//     let mark = '';
//     let avgMark = '';

//     for(let i = 0 ; i < classObj.students.length; i++){
//         let marks = classObj.students[i].marks

//         for(let j = 0; j < marks.length; j++){
          
//         }
        
//     }
// }

// function testCase(){
//     let input = [];
//     let output = [];
//     for(let i = 0; i<input.length; i++){
//         let result = highAverageMark(input[i]);
        
//         if(result === output[i]){
//             console.log(`Test case passed`);
//         }else{
//             console.log(`Test case failed`);
//         }

//     }
// }



// version -2 

function highestAverageSubject() {
    let subjectTotals = {}; 
    
   
    for (let i = 0; i < classObj.students.length; i++) {
        let marks = classObj.students[i].marks;

      
        for (let j = 0; j < marks.length; j++) {
            let subject = marks[j].subject;
            let mark = marks[j].mark;

           
            if (!(subject in subjectTotals)) {
                subjectTotals[subject] = [0, 0];
            }
            subjectTotals[subject][0] += mark; 
            subjectTotals[subject][1] += 1;   
        }
    }

   
    let highestAvg = 0;
    let highestSubject = '';

    for (let subject in subjectTotals) {
        let avg = subjectTotals[subject][0] / subjectTotals[subject][1];
        if (avg > highestAvg) {
            highestAvg = avg;
            highestSubject = subject;
        }
    }

    return highestSubject;
}


// console.log( highestAverageSubject());


function testCase(){
    let output = ["Maths", "Computer"];
    let result = highestAverageSubject();
        
    for(let i = 0; i < output.length; i++){
        if(result === output[i]){
            console.log(`Test case passed`);
        }else{
            console.log(`Test case failed`);
        }
    }
}


testCase()