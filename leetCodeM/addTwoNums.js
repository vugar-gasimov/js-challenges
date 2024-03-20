// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return dummyHead.next;
};

// Create nodes for l1
const l1 = new ListNode(9);
l1.next = new ListNode(9);
l1.next.next = new ListNode(9);
l1.next.next.next = new ListNode(9);
l1.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next.next = new ListNode(9);
// Create nodes for l2
const l2 = new ListNode(9);
l2.next = new ListNode(9);
l2.next.next = new ListNode(9);
l2.next.next.next = new ListNode(9);

console.log(addTwoNumbers(l1, l2));

// Function to convert linked list to array
function linkedListToArray(head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

const result = addTwoNumbers(l1, l2);
console.log(linkedListToArray(result));
