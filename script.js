/* 
Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
Tips:
Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).
It may be helpful to check out the background videos again if you don’t quite understand what should be going on.

Thought process:

How to return the merged array
*/

function merge(leftArr, rightArr) {
  const newArray = [];

  let leftIndex = 0;
  let rightIndex = 0;
  let newIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    // console.log(leftArr[leftIndex], "<>", rightArr[rightIndex]);
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      newArray[newIndex++] = leftArr[leftIndex++];
    } else {
      newArray[newIndex++] = rightArr[rightIndex++];
    }
  }

  for (; leftIndex < leftArr.length; leftIndex++) {
    newArray[newIndex++] = leftArr[leftIndex];
  }

  for (; rightIndex < rightArr.length; rightIndex++) {
    newArray[newIndex++] = rightArr[rightIndex];
  }
  console.log("NEW ARRAY", newArray);
  return newArray;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    console.log("END", arr);
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid, arr.length);

  console.log(`LEFT: ${leftArray} -- RIGHT: ${rightArray}`);

  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);
  console.log(`SORTED LEFT: ${sortedLeft} -- SORTED RIGHT: ${sortedRight}`);

  return merge(sortedLeft, sortedRight);
}

const testArray = [7, 8, 2, 6, 4, 1, 5, 3];

console.log(mergeSort(testArray));
