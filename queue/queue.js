class Queue {
    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
    }
    enqueue(el){
        this.queue[this.tail] = el;
        this.tail++;
    }
    dequeue() {
        const item = this.queue[this.head];
        delete this.queue[this.head];
        this.head++;
        return item
    }
    get peek() {
        return this.queue[this.head];
    }
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.tail - this.head === 0;
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.peek)  // ==> 1
console.log(queue.length)  // ==> 4
console.log(queue.isEmpty)  // ==> false
console.log(queue.dequeue())  // ==> 1
console.log(queue.dequeue())  // ==> 2
console.log(queue.dequeue())  // ==> 3
console.log(queue.dequeue())  // ==> 4
console.log(queue.isEmpty)  // ==> true