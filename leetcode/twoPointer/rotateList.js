/**
 * /*
 * Given the head of a linked list, rotate the list to the right by k places.
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [4,5,1,2,3]
 *
 * @format
 */

var rotateRight = function (head, k) {
    if (head) {
        const length = getLength(head);

        let leftNode = head;
        let rightNode = head;
        console.log(leftNode, rightNode);
        for (let i = 0; i < k % length; i++) {
            rightNode = rightNode.next;
        }
        console.log(rightNode);
        if (rightNode !== null) {
            while (rightNode.next) {
                leftNode = leftNode.next;
                rightNode = rightNode.next;
            }
            console.log(rightNode.next, head, leftNode.next);
            rightNode.next = head;
            head = leftNode.next;
            leftNode.next = null;

            console.log(rightNode, head, leftNode);
        }
    }

    return head;
};

function getLength(node) {
    let length = 0;

    while (node) {
        length++;
        node = node.next;
    }

    return length;
}
