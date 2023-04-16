const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    if (this.length === 0) {
      this.head = new Node(value);
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
    this.length++;
  }
}
function removeKFromList(l, k) {
  let list = new LinkedList;
  let cash = l;
  while(cash!==null){
    debugger
    if (cash.value!==k){
        list.add(cash.value)
    }
    cash=cash.next
  }
    return list.head
}

module.exports = {
  removeKFromList
};
