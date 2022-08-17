function printMatrix(matrix) {
  for (let i = 0; i < matrix.length * matrix[0].length; i++) {
    console.log(matrix[Math.floor(i / matrix[0].length)][i % matrix[0].length]);
  }
}

//test
// printMatrix([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
// ]);

function linearSearch(arr, num) {
  let step = Math.ceil(Math.sqrt(arr.length));
  for (let i = 0; i < step; i++) {
    for (let j = 0; j < step && i * step + j < arr.length; j++) {
      if (arr[i * step + j] == num) {
        return i * step + j;
      }
    }
  }
  return -1;
}

//test
//console.log(linearSearch([1, 2, 3, 4, 5, 8, 24, 198, 78, 54, 63], 63));

