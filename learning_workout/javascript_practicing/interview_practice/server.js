// const http = require('http'); // Import HTTP module

// const server = http.createServer((req, res) => {
//     res.end('Hello, World!'); // Send response
// });

// server.listen(3000, () => console.log('Server running on port 3000'));


async function fetchData() {
    console.log("Fetching data...");

    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();

    console.log("Data received:", data);
}

console.log("Start");
fetchData();
console.log("End");

console.log("Start");



// setTimeout(() => {
//     console.log("Async Task Completed");
// }, 2000);

// console.log("End");