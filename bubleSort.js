function swap(arr, x, y) { 
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
function bubbleSort(arr) {
  let i, j;
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
console.log(bubbleSort([1, 5, 10, 9, 5, 4]));
