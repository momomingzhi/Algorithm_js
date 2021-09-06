/**
 * /*
 * Given the head of a linked list, return the list after sorting it in ascending order.
 *
 * Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
 * Input: head = [4,2,1,3]
 * Output: [1,2,3,4]
 *
 * @format
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    const [left, right] = split(head);
    const root = new ListNode(null); //sort된 node들 연결하기 위해 임시 노드
    //재귀 사용
    return merge(root, sortList(left), sortList(right));
};
function split(node) {
    let slow = node;
    let fast = node;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    const left = node;
    const right = slow.next;
    //slow.next = null 해줌으로써 left와 right는 끊김
    slow.next = null;
    return [left, right];
}
function merge(root, left, right) {
    let pointer = root;
    while (left !== null || right !== null) {
        if (left === null) {
            pointer.next = right;
            right = right.next;
        } else if (right === null) {
            pointer.next = left;
            left = left.next;
        } else {
            if (left.val < right.val) {
                pointer.next = left;
                left = left.next;
            } else {
                pointer.next = right;
                right = right.next;
            }
        }
        pointer = pointer.next;
    }
    return root.next; //root는 일시적인 노드
}
