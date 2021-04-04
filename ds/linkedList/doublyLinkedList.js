class ListNode {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFront(data) {
    const node = new ListNode(data, this.head, null);

    if (this.head) {
      this.head.prev = node;
    } else {
      this.tail = node;
    }

    this.head = node;
  }

  insertEnd(data) {
    const node = new ListNode(data);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
    }
    this.tail = node;
  }

  insertAfter(prev, data) {
    if (!prev || !(prev instanceof ListNode)) {
      console.log('Invalid Previous Node');
    } else {
      const node = new ListNode(data, prev.next, prev);
      prev.next = node;
    }
  }

  insertBefoe(next, data) {
    if (!next || !(next instanceof ListNode)) {
      console.log('Invalid Next Node');
    } else {
      const node = new ListNode(data, next, prev.prev);
      next.prev.next = node;
    }
  }

  search(key) {
    let headNode = this.head;
    let tailNode = this.tail;

    while (headNode || tailNode) {
      if (headNode) {
        if (headNode.data === key) return headNode;
        headNode = headNode.next;
      }

      if (tailNode) {
        if (tailNode.data === key) return tailNode;
        tailNode = tailNode.prev;
      }
    }

    return null;
  }

  delete(key) { }

  print() {
    // console.log(this.head);
    // console.log(this.tail);
    let curr = this.head;
    process.stdout.write('NULL <-- ')
    while (curr) {
      process.stdout.write(curr.data + ' <--> ')
      curr = curr.next;
    }
    process.stdout.write('NULL\n')
  }
}

if (require.main === module) {
  const list = new DoublyLinkedList();

  list.insertFront(5);
  list.insertFront(3);
  list.insertEnd(6);
  // list.insertAfter(list.search(6), 4);
  list.insertBefoe(list.search(6), 4);
  list.print();
  // console.log(list.search(4));
}

