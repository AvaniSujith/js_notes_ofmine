// const fs = require('fs').promises;

// async function fetchData() {
//     // try {
//     let response = await fetch('data.json');
//     let data = await response.json();
//     console.log(data)

// }

// fetchData();

// async function fetchData(){
//     const response = await fetch('data.json');
//     const data = await response.json();
//     console.
// }

// async function fetchData() {
//     const response = await fetch('data.json'); // Fetch the JSON file
//     const data = await response.json(); // Convert response to JSON
//     console.log(data.name); // Output the 'name' property
// }

// fetchData();


// const fs = require('fs').promises;

// async function fetchData() {
//     try {
//         const data = await fs.readFile('data.json', 'utf-8'); // Read JSON file
//         const jsonData = JSON.parse(data); // Convert text to JSON
//         console.log(jsonData.name); // Access the 'name' property
//     } catch (error) {
//         console.error('Error reading file:', error);
//     }
// }

// fetchData();




// async function subjectofAstudent(studentName) {
//     try {
//         const response = await fetch('data.json')
//         const data = await response.json()
//         let subList = []
//         data.students.forEach(student => {
//             if (studentName === student.name) {
//                 student.marks.forEach(subjects => {
//                     subList.push(subjects.subject)
//                 })
//             }
//         })
//         return subList
//     } catch (error) {
//         return 'error'
//     }
// }
// subjectofAstudent('Aju').then(result => console.log(result))




// async function fetchData() {
//     try {
//         let response = await fetch('data.json')
//         let data = await response.json();

//         console.log(data);
//     } catch (error) {
//         console.log('error', error)
//     }
// }

// fetchData()

// async function fetchData() {
//     console.log("Fetching data...");

//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let data = await response.json();

//     console.log("Data received:", data);
// }

// console.log("Start");
// fetchData();
// console.log("End");

// console.log("Start");