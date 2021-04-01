class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new ListNode(data);
    node.next = this.head;
    this.head = node;
  }

  insertAfter(prev, data) {
    if (!prev || !(prev instanceof ListNode)) {
      console.log('Invalid Previous Node');
    } else {
      const node = new ListNode(data);
      node.next = prev.next;
      prev.next = node;
    }
  }

  insertLast(data) {
    const node = new ListNode(data);

    if (this.head === null) {
      this.head = node;
    } else {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = new ListNode(data);
    }
  }

  find(key) {
    let curr = this.head;

    while(curr) {
      if(curr.data === key) return curr;
      curr = curr.next;
    }

    return null;
  }

  delete(key) {
    let prev = null;
    let curr = this.head;

    while(curr) {
      if(curr.data === key) break;
      prev = curr;
      curr = curr.next;
    }

    if(curr) {
      if(curr === this.head) {
        this.head = this.head.next;
      } else {
        prev.next = curr.next;
      }
    }
  }

  deleteHead() {
    if(this.head) {
      this.head = this.head.next;
    }
  }

  print() {
    let curr = this.head;

    while (curr) {
      process.stdout.write(curr.data + ' --> ')
      curr = curr.next;
    }
    process.stdout.write('NULL\n')
  }
}

module.exports = {
  ListNode,
  LinkedList
};

if (require.main === module) {
  const list = new LinkedList();

  list.insertLast(2)
  list.insertLast(3)
  list.insertLast(4)
  list.insertLast(6)
  list.insertFirst(1)
  list.insertAfter(list.find(4), 5);

  list.print();
  list.delete(3)
  list.delete(1);
  list.delete(6);
  list.print();


}
