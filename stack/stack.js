class Stack {
    constructor() {
        this.stack = [];
    }

    push(el) {
        this.stack.push(el);
    }

    pop() {
        if(this.stack[0]){
           return  this.stack.pop();
        } else {
            return "Stack clear";
        }
    }
    length() {
        return this.stack.length;
    }
    isEmpty() {
        return this.stack.length === 0;
    }
}

let stack = new Stack;

stack.push(2);
stack.push(4);
stack.push(5);
stack.push(6);

console.log(stack.length()) // ==> 4

console.log(stack.isEmpty())  // ==> false

console.log(stack.pop())  // ==> 6

console.log(stack.pop())  // ==> 5

console.log(stack.pop())  // ==> 4

console.log(stack.pop())  // ==> 2

console.log(stack.pop())  // ==> Stack clear