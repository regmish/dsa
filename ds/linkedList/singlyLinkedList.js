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

  insertFront(data) {
    const node = new ListNode(data);
    node.next = this.head;
    this.head = node;
  }

  insertEnd(data) {
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

  insertAfter(prev, data) {
    if (!prev || !(prev instanceof ListNode)) {
      console.log('Invalid Previous Node');
    } else {
      const node = new ListNode(data);
      node.next = prev.next;
      prev.next = node;
    }
  }

  search(key) {
    let curr = this.head;

    while (curr) {
      if (curr.data === key) return curr;
      curr = curr.next;
    }

    return null;
  }

  delete(key) {
    let prev = null;
    let curr = this.head;

    while (curr) {
      if (curr.data === key) break;
      prev = curr;
      curr = curr.next;
    }

    if (curr) {
      if (curr === this.head) {
        this.head = this.head.next;
      } else {
        prev.next = curr.next;
      }
    }
  }

  deleteHead() {
    if (this.head) {
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

  list.insertEnd(2)
  list.insertEnd(3)
  list.insertEnd(4)
  list.insertEnd(6)
  list.insertFront(1)
  list.insertAfter(list.search(4), 5);

  list.print();
  list.delete(3)
  list.delete(1);
  list.delete(6);
  list.print();


}
