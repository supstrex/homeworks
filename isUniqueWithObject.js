function isUnique(str) {
  if(typeof str !== 'string'){
    return 'Unsupported data type'
  }
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      return false;
    } else {
      obj[str[i]] = 1;
    }
  }
  return true
}

console.log(isUnique(0));
