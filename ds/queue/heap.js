const items = Symbol('items');
const heapifyUp = Symbol('heapifyUp');
const heapifyDown = Symbol('heapifyDown');
const swap = Symbol('swap');
const getparentIdx = Symbol('getparentIdx');
const getLeftChildIdx = Symbol('getLeftChildIdx');
const getRightChildIdx = Symbol('getRightChildIdx');
const compare = Symbol('compare');
const hasLeft = Symbol('hasLeft');
const hasRight = Symbol('hasRight');
const lessThan = Symbol('lessThan');
const greaterThan = Symbol('greaterThan');

class BinaryHeap {
  constructor(type = 'min') {
    this[items] = [];
    this[compare] = type === 'min' ? this[greaterThan] : this[lessThan];
  }

  get size() {
    return this[items].length;
  }

  offer(item) {
    this[items].push(item);
    this[heapifyUp]();
  }

  poll() {
    const top = this.peek();

    if(this.size === 1) {
      return this[items].pop();
    } else {
      this[items][0] = this[items].pop();
      this[heapifyDown]();
      return top;
    }
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue Empty');
    }

    return this[items][0];
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    console.log(this[items]);
  }

  /** Internal Methods */

  [heapifyUp]() {
    let currIdx = this.size - 1;

    while(currIdx > 0) {
      let parentIndex = this[getparentIdx](currIdx);
      if(this[compare](parentIndex, currIdx)) {
        this[swap](parentIndex, currIdx);
        currIdx = parentIndex;
      } else {
        break;
      }
    }
  }

  [heapifyDown]() {
    let currIdx = 0;

    while(this[hasLeft](currIdx)) {
      let replaceWith = this[getLeftChildIdx](currIdx);

      if(this[hasRight](currIdx)) {
        if(this[compare](replaceWith, this[getRightChildIdx](currIdx))) {
          replaceWith = this[getRightChildIdx](currIdx)
        }
      }

      if(this[compare](currIdx, replaceWith)) {
        this[swap](currIdx, replaceWith);
        currIdx = replaceWith;
      } else {
        break;
      }
    }
  }

  [swap](i, j) {
    const temp = this[items][i];
    this[items][i] = this[items][j];
    this[items][j] = temp;
  }

  [hasLeft](i) {
    return this[getLeftChildIdx](i) < this.size;
  }

  [hasRight](i) {
    return this[getRightChildIdx](i) < this.size;
  }

  [getparentIdx](i) {
    return Math.floor((i - 1) / 2);
  }

  [getLeftChildIdx](i) {
    return (i * 2) + 1;
  }

  [getRightChildIdx](i) {
    return (i * 2) + 2;
  }

  [lessThan](i, j) {
    return this[items][i] < this[items][j];
  }

  [greaterThan](i, j) {
    return this[items][i] > this[items][j];
  }
}

if (require.main === module) {
  const q = new BinaryHeap('max');
  q.offer(35)
  q.offer(20)
  q.offer(30)
  q.offer(40)
  q.offer(10)
  q.offer(25)
  q.offer(32);
  q.print();
  // console.log(q.size);
  for (let i = 0; i < 7; i++) {
    console.log(q.poll());
  }
}
