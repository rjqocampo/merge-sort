/* 
Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
Tips:
Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).
It may be helpful to check out the background videos again if you don’t quite understand what should be going on.
*/

function merge(leftArr, rightArr) {
  console.log("MERGE", leftArr, rightArr);
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid, arr.length);

  console.log(`LEFT: ${leftArray} -- RIGHT: ${rightArray}`);

  mergeSort(leftArray);
  mergeSort(rightArray);
  merge(leftArray, rightArray);
}

const testArray = [8, 6, 2, 7, 4, 5, 3, 1, 9, 10];
mergeSort(testArray);
