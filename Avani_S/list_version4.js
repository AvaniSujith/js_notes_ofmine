function createNode(num){
    let first = null;
    let current = null;


    for(let i = 0; i < num; i++){
        const obj = {
            val: i,
            next : null
        }

        if(first === null){
            first = obj;
        }else{
            current.next = obj;
        }

        current = obj;
    }

    return first;
}

function list(num){
    const first = createNode(num);
    let current = first;

    while(current !== null){
        console.log(current.val);
        current = current.next;
    }
}

list(6);

// version - 1 

function addElement(){
    const newObj = {
        val : 20,
        next: first
    }

    if(this.first === null){
        first = newObj
    }else{
        newObj.next = first
    }

    return first
}


