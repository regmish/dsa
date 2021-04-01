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
}

export default Stack;

if (require.main === module) {
  const stack = new Stack(3);

  console.log('Pushing -> 7', stack.push(7));
  console.log('Pushing -> 10', stack.push(10));
  console.log('Pushing -> 8', stack.push(8));
  console.log('Pushing -> 9', stack.push(9));
  console.log('Pushing -> 9', stack.push(9));
  console.log('Peek -> ', stack.peek());
  console.log('Popping ->', stack.pop());
  console.log('Popping ->', stack.pop());
  console.log('Pushing -> 9', stack.push(9));
  console.log('Popping ->', stack.pop());
  console.log('Popping ->', stack.pop());
  console.log('Popping ->', stack.pop());
}
