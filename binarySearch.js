function binarySearch(num, arr) {
  let min = 0;
  let max = arr.length - 1;
  let mid = Math.floor(arr.length / 2);
  while (num !== arr[mid]) {
    mid = Math.floor((min + max) / 2);
    if (num < arr[mid]) {
      max = mid;
    } else if (num > arr[mid]) {
      min = mid;
    }
  }
  return mid;
}

function recursiveBinarySearch(num, arr, min = 0, max = arr.length) {
  let mid = (min + max) / 2;
  if (num === arr[mid]) {
    return mid;
  }
  if (num < arr[mid]) {
    return recursiveBinarySearch(num, arr, min, mid);
  }
  return recursiveBinarySearch(num, arr, mid, max);
}

console.log(binarySearch(7, [1, 2, 4, 5, 6, 7, 8, 9, 10, 11]));
console.log(recursiveBinarySearch(7, [1, 2, 4, 5, 6, 7, 8, 9, 10, 11]));
