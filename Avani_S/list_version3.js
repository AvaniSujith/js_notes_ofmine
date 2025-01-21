function createNode(num){
    for(let i = 0; i<num; i++){
        const obj = {
            "val": i,
            "next":null
        }
    }

    return obj;
    
}

function listCreation(num){
    const head = createNode(num);
    let current = head

    if(head === null){
        head = obj;
    }else{
        current.next = obj;
    }

    while(current !== null){
        console.log(current.val);
        current = current.next;
    }

}

listCreation(5);

