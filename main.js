function invite(friend) {
  friend.invited = true;

  if (friend.friends) {
    friend.friends.forEach((person) => {
      invite(person);
    });
  }
}

// (STUPID EXAMPLE)
const factorial = (order) => {
  if (order == 0) {
    return 1;
  } else {
    return order * factorial(order - 1);
  }
};

console.log(factorial(3));
// 6
console.log(factorial(5));
// 120

function binarySort(arr) {
  // Base case: if the array has 0 or 1 element, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort the left and right halves
  const sortedLeft = binarySort(left);
  const sortedRight = binarySort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge the sorted halves into the result array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate any remaining elements from the left or right halves
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
const arr = [5, 3, 1, 7, 2, 9, 4, 6, 8];
const sortedArr = binarySort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
