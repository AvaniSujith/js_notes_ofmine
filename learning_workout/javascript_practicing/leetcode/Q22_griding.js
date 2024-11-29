// You are given a 0-indexed 2D integer array grid of size m x n. Each cell has one of two values:
// 0 represents an empty cell,
// 1 represents an obstacle that may be removed.
// You can move up, down, left, or right from and to an empty cell.
// Return the minimum number of obstacles to remove so you can move from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1).



// function minimumObstacles(grid){
//     const m = grid.length, n = grid[0].length;
//     const cost = Array.from({length: m}, () => Array(n).fill(Infinity));
//     cost[0][0] = 0;

//     const queue = [[0, 0]];
//     const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

//     while(queue.length > 0){
//         const[x, y] = queue.shift();

//         for(const [dx, dy] of directions){
//             const nx = x + dx, ny = y + dy;

//             if(nx >= 0 && nx < m && ny >= 0 && ny < n){
//                 const newCost = cost[x][y] + grid[nx][ny];

//                 if(newCost < cost[nx][ny]){
//                     cost[nx][ny] = newCost;

//                     if(grid[nx][ny] === 0){
//                         queue.unshift([nx, ny]);
//                     }else{
//                         queue.push([nx, ny]);
//                     }
//                 }
//             }
//         }
//     }
//     return cost[m - 1][n- 1]
// }




function minimumObstacles(grid){
    const m = grid.length, n = grid[0].length;
    const directions = [[-1,0], [1,0], [0,-1], [0,1]];
    const cost = Array.from({length: m}, () => Array(n).fill(Infinity));
    cost[0][0] = 0;

    const pq = [[0,0,0]];

    while(pq.length > 0){
        pq.sort((a,b) => a[0] - b[0]);
        const[currentCost, x, y] = pq.shift();


        if(x === m - 1 && y === n - 1){
            return currentCost;
        }

        for(const [dx, dy] of directions){
            const nx = x + dx, ny = y + dy;

            if(nx >= 0 && nx < m && ny >= 0 && ny < n){
                const newCost = currentCost + grid[nx][ny];

                if(newCost < cost[nx][ny]){
                    cost[nx][ny] = newCost;
                    pq.push([newCost, nx, ny]);
                }
            }
        }
    }
    return -1;
}



function name(){
    comsole.log("name");
    console.log()
    console.log()


    name.addEvent



}