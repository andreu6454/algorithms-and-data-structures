class Stack {
    constructor() {
        this.stack = [];
        this.head = 0;
    }
    push(el) {
        this.stack[this.head] = el;
        this.head++
    }
    pop() {
        if (this.stack[0]) {
            const item = this.stack[this.head - 1];
            delete this.stack[this.head - 1];
            this.head--;
            return item;
        } else {
            return "Stack clear";
        }
    }
    get peek(){
        return this.stack[this.head - 1];
    }
    get length() {
        return this.head;
    }
    get isEmpty() {
        return this.stack.length === 0;
    }
}

let stack = new Stack;

stack.push(2);
stack.push(4);
stack.push(5);
stack.push(6);

console.log(stack.length) // ==> 4
console.log(stack.isEmpty)  // ==> false
console.log(stack.peek)  // ==> 6
console.log(stack.pop())  // ==> 6
console.log(stack.pop())  // ==> 5
console.log(stack.pop())  // ==> 4
console.log(stack.pop())  // ==> 2
console.log(stack.pop())  // ==> Stack clear