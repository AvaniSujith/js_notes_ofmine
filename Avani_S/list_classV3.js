class linkNodes{
    constructor(){
        this.first = null;
        this.end = null;
    }

    createList(num){
        for(let i = 0; i<num; i++){
            const newNode = {val: i, next: null};

            if(this.first === null){
                this.first = newNode;
                this.end = newNode;
            }else{
                this.end.next = newNode;
                this.end = newNode;
            }
        }
    }

    addElement(value){
        const newNode = { val: value, next:null};

        if(!this.first){
            this.first = newNode;
            this.end = newNode;
        }else{
            this.end.next = newNode;
            this.end = newNode;
        }
    }

    removeElement(){
        if(!this.first){
            console.log("Empty");
            return null;
        }

        const removedValue = this.first.val;
        this.first = this.first.next;

        if(!this.first){
            this.end = null;
        }

        return removedValue;
    }

    findElement(value){
        let current = this.first;

        while(current){
            if(current.val === value){
                return true;
            }
            current = current.next;
        }

        return false;
    }

    display(){
        let current = this.first;

        if(!current){
            console.log("Empty");
            return;
        }

        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
}


const list = new linkNodes();
list.createList(5);
console.log("List")
list.display();


list.addElement(4);
console.log("List after adding")
list.display()


list.removeElement()
console.log("Lits after removing");
list.display()
