class Stack {
  constructor(size) {
    this.size = size;
    this.top = -1;
    this.items = [];
  }

  push(val) {
    if (this.top < this.size - 1) {
      this.items[++this.top] = val;
    } else {
      return 'Overflow';
    }
  }

  pop() {
    if (this.top > -1) {
      return this.items[this.top--];
    }

    return 'Underflow';
  }

  peek() {
    if (this.top > -1) {
      return this.items[this.top];
    }

    return undefined;
  }

  isEmpty() {
    return this.top === -1;
  }

  print() {
    let top = this.top;
    while(top > -1) {
      process.stdout.write(`| ${this.items[top--]} |\n_____\n`);
    }
  }

}

module.exports = Stack;

if (require.main === module) {
  const stack = new Stack(5);

  console.log('Pushing -> 1', stack.push(1));
  console.log('Pushing -> 2', stack.push(2));
  console.log('Pushing -> 3', stack.push(3));
  console.log('Pushing -> 4', stack.push(4));
  console.log('Pushing -> 5', stack.push(5));
  console.log('Peek -> ', stack.peek());
  console.log('Popping ->', stack.pop());
  console.log('Popping ->', stack.pop());
  console.log('Pushing -> 9', stack.push(9));
  console.log('Popping ->', stack.pop());
  console.log('Popping ->', stack.pop());
  console.log('Popping ->', stack.pop());
}
