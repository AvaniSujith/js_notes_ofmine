// obtain mean, median and mode 

function dataset(arr){
    
    let mean = 0;
    let total = 0;
    let totalNum = arr.length;
    
    for(let i = 0; i<totalNum; i++){
        total += arr[i];
    }
    
    mean = total / totalNum;
    console.log(`Mean: ${mean}`);

    let arr1 = arr.sort((a,b)=>{a>b});
    if(totalNum%2 === 0){
        let value = totalNum % 2;
        let median = arr1[value];
        console.log(`Medain: ${median}`);
    }else{
        let value = [totalNum - 1] % 2;
        let median = [arr1[value] + arr1[value+1]] / 2;
        console.log(`Median: ${median}`);
    }
    
    let mode = 0;
    
}


dataset([1,2,3]);
dataset([2,4,6]);
dataset([3,7,8,5,10]);