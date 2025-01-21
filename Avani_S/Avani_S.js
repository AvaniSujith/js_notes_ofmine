function createList(num){
    let first = null;
    let end = null;

    for(let i = 0 ; i < num; i++){
        const newNode = {
            val : i,
            next : null
        }

        if(first === null){
            first = newNode;
            end = newNode;
        }else{
            end.next = newNode;
            end = newNode
        }
    }

    return {first, end};
}

// console.log(createList(7));

function addElement(list, value){
    const newNode = {val : value, next: null};

    if(!list.first){
        list.first = newNode;
        list.end = newNode;
    }else{
        list.end.next = newNode;
        list.end = newNode
    }
}


function removeElement(list){
    if(!list.first){
        console.log("Empty");
        return null;
    }

    const removedValue = list.first.val;
    list.first = list.first.next;

    if(!list.first){
        list.end = null;
    }

    return removedValue;
}


function findElement(list, value){
    let current = list.first;

    while(current){
        if(current.val === value){
            return true;
        }

        current = current.next;
    }

    return false;
}

function listDisplay(list){
    let current = list.first;

    if(!current){
        console.log("empty");
        return;
    }

    while(current){
        console.log(current.val);
        current = current.next;
    }
}

const list = createList(8);


console.log("List")
listDisplay(list);

addElement(list, 1);
console.log("After adding element");
listDisplay(list);

removeElement(list)
console.log("After removing");
listDisplay(list);

console.log(findElement(list, 5));
console.log(findElement(list, 999));


