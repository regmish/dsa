const { LinkedList } = require('../linkedList/singlyLinkedList');

class Stack {
  constructor(size) {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.insertFront(data);
  }

  pop() {
    const data = this.list.head && this.list.head.data;
    this.list.deleteHead();
    return data;
  }

  peek() {
    return this.list.head && this.list.head.data;
  }

  isEmpty() {
    return !this.list.head;
  }

  print() {
    let curr = this.list.head;

    while (curr) {
      process.stdout.write(curr.data + ' --> ')
      curr = curr.next;
    }
    process.stdout.write('NULL\n')
  }
}

module.exports = Stack;

if (require.main === module) {
  const stack = new Stack();

  console.log('Pushing -> 7', stack.push(7));
  console.log('Pushing -> 8', stack.push(8));
  console.log('Pushing -> 9', stack.push(9));
  console.log('Pushing -> 10', stack.push(10));
  stack.print();
  console.log('Popping ->', stack.pop());
  console.log('Popping ->', stack.pop());
  console.log('Peek ->', stack.peek());
  console.log('Popping ->', stack.pop());
  console.log('Popping ->', stack.pop());
  console.log('isEmpty ->', stack.isEmpty());
}
