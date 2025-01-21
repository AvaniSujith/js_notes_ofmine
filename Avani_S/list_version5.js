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

function list(first){

    let current = first;

    while(current !== null){
        console.log(current.val);
        current = current.next;
    }
}

// const first = createNode(8);
// list(first);

// version - 2

function addElement(first, value){
    const newObj = {
        val : value,
        next: first
    }

    return newObj;
}

// const first = createNode(4)
// list(addElement(first, 0));


// version - 1

function removeElement(first){
    if(first  === null){
        return null;
    }

    return first.next
}


function findValue(first, value){
    let current = first;

    while(current){
        if(current.val === value){
            return true;
        }
        current = current.next;
    }
    return false;
}

