function createList(num){
    let head = null; 
    let tail = null;

    for(let i= 0; i< num ; i++){
        const node = {
            val: i,
            Id:i + 1,
            next: null
        };

        if(head === null){
            head = node;
            tail = node;
            
        }else{
            tail.next = node;
            tail = node;
        }
    }

    return {head, tail};

}

function addElement(list, value, Id){


    if(repeatedValue(list, value, Id)){
        console.log(`Already existing value or Id.`)
        return;
    }


    const newNode = { val: value, Id, next: null};

    if(list.head === null){

        list.head = newNode;
        list.tail = newNode;

    }else if(Id <= list.head.Id){

        newNode.next = list.head;
        list.head = newNode;
        incrementId(list.head.next);

    }else{
        let currentNode = list.head;
        let previousNode = null;

        while(currentNode && currentNode.Id < Id){
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        newNode.next = currentNode;
        previousNode.next = newNode;

        if(!currentNode){
            list.tail = newNode
        }

        incrementId(newNode.next);
    }
}



function incrementId(node){
    while(node){
        node.Id += 1;
        node = node.next;
    }
}


function removeElement(list, Id){
    if(list.head === null){
        console.log("Empty list")
        return;
    }

    if(list.head.Id === Id){
        list.head = list.head.next;

        list.head = list.head.next;

        if(list.head === null){
            list.tail = null;

        }else{
            decrementId(list.head);
        }
        return;
    }


    let currentNode = list.head;
    let previousNode = null;

    while(currentNode && currentNode.Id !== Id){
        previousNode = currentNode;
        currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next;

    if(currentNode.next === null){
        list.tail = previousNode;
    }else{
        decrementId(currentNode.next);
    }
}

function decrementId(node){
    while(node){
        node.Id -= 1;
        node = node.next;
    }
}


function repeatedValue(list, value, Id){
    let currentNode = list.head;
    while(currentNode){
        if(currentNode.val === value || currentNode.Id === Id){
            return true;
        }

        currentNode = currentNode.next;
    }
    return false;
}

function findElement(list, value){
    while(list.head === null){
        console.log("Empty")
    }

    let currentNode = list.head;

    while(currentNode){
        if(currentNode.val === value){
            console.log("Value present in list");
            return;
        }

        currentNode = currentNode.next;
    }

    console.log("Not present");

}

function findId(list, Id){
    while(list.head === null){
        console.log("Empty")
    }

    let currentNode = list.head;

    while(currentNode){
        if(currentNode.Id === Id){
            console.log(`Id is present with value ${currentNode.val}`);
            return;
        }
        currentNode = currentNode.next
    }
    console.log("Not present")
}

function display(){
    let currentNode = list.head;

    if(currentNode === null){
        console.log("Empty");
        return;
    }

    while(currentNode){
        console.log(`Id: ${currentNode.Id}, Value: ${currentNode.val}`);
        currentNode = currentNode.next;
    }

}

const list = createList(3);
display(list);

// addElement(list, 10, 6);
// console.log("After adding Element");
// display(list);

addElement(list, 2, 1);
console.log("same value");
display(list);

// removeElement(list, 3)
// console.log("After removing element");
// display(list);

// findElement(list, 7);
// findId(list, 2)

