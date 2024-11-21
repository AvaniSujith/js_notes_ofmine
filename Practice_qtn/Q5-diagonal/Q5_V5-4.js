function diagonal(matrix){
    let position = 0;
    if(matrix.length !== matrix[position].length && matrix.length === 0){
        console.log("Not a diagonal matrix");
    }
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix.length; j++){
                if(i != j){
                    // matrix[position] != 0;
                    matrix[i][j] != 0;
                    console.log("Not a diagonal matrix");
                }else{
                    console.log("Is a diagonal matrix");
                }
                
            }
        }
    
}