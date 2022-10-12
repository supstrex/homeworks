//class representing BigInt functionality
class CustomBigInt {
  //function for converting a string to the BigInt
  static toBigInt(str) {
    let arr = [];
    for (let i = str.length; ; i -= 15) {
      if (i <= 15) {
        if (str[0] == "-") {
          if (i === 1) {
            arr.unshift("-");
            break;
          }
          arr.unshift(parseInt(str.slice(1, i)));
          arr.unshift("-");
          break;
        }
        arr.unshift(parseInt(str.slice(0, i)));
        arr.unshift("+");
        break;
      }
      arr.unshift(parseInt(str.slice(i - 15, i)));
    }
    return arr;
  }
  //function that compares modulus of two BigInts and returns an sorted (descending) array of them
  static compareModulus(arr1, arr2) {
    if (arr1.length > arr2.length) {
      return [arr1, arr2, true];
    } else if (arr2.length > arr1.length) {
      return [arr2, arr1, false];
    }
    for (let i = 1; i < arr1.length; i++) {
      if (arr1[i] > arr2[i]) {
        return [arr1, arr2, true];
      } else if (arr2[i] > arr1[i]) {
        return [arr2, arr1, false];
      }
    }
    return [arr1, arr2, true];
  }
  //function that compares values of two BigInts and returns a sorted (descending) array of them
  static compare(arr1, arr2) {
    let [large, small] = CustomBigInt.compareModulus(arr1, arr2);
    switch (large[0] + small[0]) {
      case "++": {
        return [large, small];
      }
      case "--": {
        return [small, large];
      }
      case "+-": {
        return [large, small];
      }
      case "-+": {
        return [small, large];
      }
    }
  }
  //function that adds to BigInts
  static addition(arr1, arr2) {
    if (arr1[0] == "-" && arr2[0] == "+") {
      arr1[0] = "+";
      return CustomBigInt.substraction(arr2, arr1);
    }
    if (arr2[0] == "-" && arr1[0] == "+") {
      arr2[0] = "+";
      return CustomBigInt.substraction(arr1, arr2);
    }
    let maxValue = 999999999999999;
    let [short, long] = arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1];
    let remainder = 0;
    let sum = [];

    for (let i = 1; i < short.length; i++) {
      if (
        arr1[arr1.length - i] + arr2[arr2.length - i] + remainder >
        maxValue
      ) {
        sum.unshift(
          arr1[arr1.length - i] +
            arr2[arr2.length - i] +
            remainder -
            maxValue -
            1
        );
        remainder = 1;
      } else {
        sum.unshift(arr1[arr1.length - i] + arr2[arr2.length - i] + remainder);
        remainder = 0;
      }
    }
    for (let j = long.length - short.length; j > 0; j--) {
      if (long[j] + remainder > maxValue) {
        sum.unshift(long[j] + remainder);
        remainder = 1;
      } else {
        sum.unshift(long[j] + remainder);
        remainder = 0;
      }
    }
    if (remainder) {
      sum.unshift(remainder);
    }
    if (short[0] == "-") {
      sum.unshift("-");
    } else {
      sum.unshift("+");
    }
    return sum;
  }
  //function that substracts to BigInts
  static substraction(arr1, arr2) {
    if (arr1[0] == "-" && arr2[0] == "+") {
      arr2[0] = "-";
      return CustomBigInt.addition(arr1, arr2);
    }
    if (arr2[0] == "-" && arr1[0] == "+") {
      arr2[0] = "+";
      return CustomBigInt.addition(arr1, arr2);
    }
    let [large, small, largeFirst] = CustomBigInt.compareModulus(arr1, arr2);
    let maxValue = 999999999999999;
    let remainder = 0;
    let result = [];

    for (let i = 1; i < small.length; i++) {
      if (large[large.length - i] - remainder < small[small.length - i]) {
        result.unshift(
          large[large.length - i] +
            maxValue +
            1 -
            remainder -
            small[small.length - i]
        );
        remainder = 1;
      } else {
        result.unshift(
          large[large.length - i] - remainder - small[small.length - i]
        );
        remainder = 0;
      }
    }
    for (let j = large.length - small.length; j > 0; j--) {
      result.unshift(large[j] - remainder);
      remainder = 0;
    }
    if ((small[0] == "-" && !largeFirst) || (large[0] == "+" && largeFirst)) {
      result.unshift("+");
    } else {
      result.unshift("-");
    }
    return result;
  }
  //overwritten toString method
  static toString(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== '+'){
            str += arr[i]
        }
    }
    return str;
  }
}

let a = CustomBigInt.toBigInt("4444444444444447444444444444445");
let b = CustomBigInt.toBigInt("5555555555555555555555555555555");
//uncomment for testing
//console.log(a, b);
//console.log(CustomBigInt.compare(a, b));
console.log(CustomBigInt.addition(a, b));
//console.log(CustomBigInt.toString(a));
