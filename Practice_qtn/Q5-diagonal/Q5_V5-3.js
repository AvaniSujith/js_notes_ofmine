function diagonal(matrix){
    let position = 0;
    if(matrix.length !== matrix[position].length && matrix.length === 0){
        console.log("Not a diagonal matrix");
    }else{
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix.length; j++){
                let element = 0;
                if(element = matrix[i][j]){
                    element != 0;
                }else{
                    element === 0;
                }
            }
        }
        
    }
}