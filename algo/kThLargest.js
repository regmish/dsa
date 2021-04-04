/**
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 *
 * Input: nums = [3,2,1,5,6,4], k = 2
 * Output: 5
 *
 * Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
 * Output: 4
 */

const Heap = require('../ds/queue/heap');


const findKthLargest = (nums, k) => {
  const minHeap = new Heap('min');

  for (const num of nums) {
    minHeap.offer(num);

    if(minHeap.size > k) {
      minHeap.poll();
    }
  }
  return minHeap.peek();

  // while (minHeap.size) {
  //   console.log(minHeap.poll());
  // }
}

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // 4
console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 6)); // 3
