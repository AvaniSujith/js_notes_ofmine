// You are given an integer n and a 2D integer array queries.
// There are n cities numbered from 0 to n - 1. Initially, there is a unidirectional road from city i to city i + 1 for all 0 <= i < n - 1.
// queries[i] = [ui, vi] represents the addition of a new unidirectional road from city ui to city vi. After each query, you need to find the length of the shortest path from city 0 to city n - 1.
// Return an array answer where for each i in the range [0, queries.length - 1], answer[i] is the length of the shortest path from city 0 to city n - 1 after processing the first i + 1 queries.
// Example 1:
// Input: n = 5, queries = [[2,4],[0,2],[0,4]]
// Output: [3,2,1]


// function shortestDistance(n, queries){
//     for(let i = 0; i< queries.length; i++){
        
//     }
// };



// n = 5   queries = [ [2,4], [0,2], [0,4]];
// n = 4   queries = [ [0,3], [0,2]];

// n cities == 0 to n-1
// initial roads == 0 -> 1 -> 2 -> ... -> n - 1.
// queries[i] = [u, v];   -- new road btwn u and v.



// steps
// 1. graph creation
// 2. 


// function shortestDistance(n, queries){
//     let graph = {};

//     for(let i = 0; i < n; i++) graph[i] = [];
//     for(let i = 0; i < n - 1; i++) graph[i].push(i + 1);

//     function bfs(start, end){
//         let queue = [[start, 0]];
//         let visited = new Set();

//         while(queue.length > 0){
//             let [ current , dist ] = queue.shift();
//             if(current === end) return dist;
//             if(visited.has(current)) continue;

//             visited.add(current);
//             if(current === end) return dist;
//             if(visited.has(current)) continue;

//             visited.add(current);
//             for(let neighbor of graph[current]){
//                 if(!visited.has(neighbor)) {
//                     queue.push([neighbor, dist + 1]);

//                 }
//             }
//         }
//         return -1
//     }
//     let result = [];
//     for(let [u, v] of queries){
//         graph[u].push(v);
//         result.push(bfs(0, n - 1));
//     }
//     return result;
// }


// let n = 5;
// let queries = [
//     [1,3],
//     [0,4],
//     [3,4]
// ];

// console.log(shortestDistance(n, queries));

function shortestDistance(n, queries){
    const graph = {};
    for(let i = 0; i < n; i++) graph[i] = [];
    for(let i = 0; i < n - 1; i++) graph[i].push(i+1);

    function bfs(start, end){
        const queue = [[start, 0]];
        const visited = new Set();

        while(queue.length > 0){
            const [current, dist] = queue.shift();
            if(current === end) return dist;
            if(visited.has(current)) continue;

            visited.add(current);
            for(const neighbor of graph[current]){
                if(!visited.has(neighbor)){
                    queue.push([neighbor, dist + 1]);
                }
            }
        }
        return -1;
    }
    const result = [];
    for(const [u, v] of queries){
        graph[u].push(v);
        result.push(bfs(0, n - 1));
    }
    return result;
}

let n = 5;
let queries = [
    [1,3],
    [0,4],
    [3,4]
];

console.log(shortestDistance(n, queries));