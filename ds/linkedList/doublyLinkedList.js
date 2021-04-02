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
  }

  insertFront(data) {}
  insertEnd(data) {}
  insertAfter(prev, data) {}
  insertBefoe(next, data) {}
  delete(key) {}
  traverse(dir = 'forward') {}
}

