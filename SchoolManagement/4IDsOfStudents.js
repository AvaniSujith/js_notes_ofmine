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


// function idsOfStudents(){
//     let id = [];
//     for(let i = 0; i < classObj.students.length; i++){
//         let item = classObj.students.id;
//         id.push(item)
//     }

//     console.log(id)
// }

// idsOfStudents();


// version -2


// function idsOfStudents(){
//     let ids = [];
//     for(let i = 0; i < classObj.students.length; i++){
//         let item = classObj.students[i].id;
//         ids.push(item)
//     }

//     return ids;
// }

// // console.log(idsOfStudents());

// function testCases(){
//     if(idsOfStudents(classObj) === "[ '101', '102', '103', '104' ]"){
//         console.log(`Test case passed`)
//     }else{
//         console.log(`Test case Failed`)
//     }
// }

// testCases();


// version - 3


function idsOfStudents(){
    let ids = [];
    for(let i = 0; i < classObj.students.length; i++){
        let item = classObj.students[i].id;
        ids.push(item)
    }
    return ids;
}

function testCases(){
    let output = [ '101', '102', '103', '104' ];
    let result = idsOfStudents();

    if(JSON.stringify(result) === JSON.stringify(output)){
        console.log(`Test case passed`);
    }else{
        console.log(`Test case failed`)
    }
}

testCases()