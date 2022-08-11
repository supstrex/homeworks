//1st task
//fibonacci function with cache
function fibonacci(n) {
  if (n < 2) return n;
  fibonacci.cache = fibonacci.cache || [];
  if (!fibonacci.cache[n]) {
    fibonacci[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }
  return fibonacci[n];
}

//uncomment to test
//console.log(fibonacci(8));

//2nd task
//function that merges 5 sorted arrays in a one sorted array
function merge(arr1, arr2, arr3, arr4, arr5) {
  let arr = [],
    temp = [],
    index;
  while (
    arr1.length ||
    arr2.length ||
    arr3.length ||
    arr4.length ||
    arr5.length
  ) {
    temp = [
      arr1[0] || Infinity,
      arr2[0] || Infinity,
      arr3[0] || Infinity,
      arr4[0] || Infinity,
      arr5[0] || Infinity,
    ];
    index = temp.indexOf(Math.min(...temp));
    switch (index) {
      case 0:
        arr.push(arr1.shift());
        break;
      case 1:
        arr.push(arr2.shift());
        break;
      case 2:
        arr.push(arr3.shift());
        break;
      case 3:
        arr.push(arr4.shift());
        break;
      case 4:
        arr.push(arr5.shift());
        break;
    }
  }
  return arr;
}

//uncomment to test
// console.log(
//   merge(
//     [1, 3, 4, 5, 7],
//     [2, 3, 5, 6, 7, 8],
//     [2, 3, 5, 6, 8, 54],
//     [2, 455, 1095, 5645, 105550, 7555500],
//     [2, 3, 5, 45, 158, 789]
//   )
// );

//3rd task

//creates a bit vector with the specified maximum value
function bitVector(maxNumber) {
  return new Uint32Array(Math.ceil(maxNumber / 32));
}

//sets the specified bit to 1 in our bit vector
function set(vector, num) {
  let vectorIndex = Math.floor(num / 32);
  let numberIndex = num % 32;
  vector[vectorIndex] = vector[vectorIndex] | (1 << numberIndex);
}

//sets the specified bit to 0 in our bit vector
function clear(vector, num) {
  let vectorIndex = Math.floor(num / 32);
  let numberIndex = num % 32;
  vector[vectorIndex] = vector[vectorIndex] & ~(1 << numberIndex);
}

//returns a boolean value about the state of specified bit
function get(vector, num) {
  var vectorIndex = Math.floor(num / 32);
  var numberIndex = num % 32;
  var value = vector[vectorIndex] & (1 << numberIndex);
  return value != 0;
}

//uncomment to test
// let vec = bitVector(2000000000);
// set(vec, 1234567)
// console.log(get(vec, 1234567));
//clear(vec, 1234567)
// console.log(get(vec, 1234567));
