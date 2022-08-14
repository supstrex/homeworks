//using bitvectors to cache chars
function isUnique(str){
    let vector = bitVector(65535)
    for (let i = 0; i < str.length; i++) {
        if(get(vector, str.charCodeAt(i))){
            return false;
        }
        set(vector, str.charCodeAt(i))   
    }
    return true;
}

function bitVector(maxNumber) {
  return new Uint32Array(Math.ceil(maxNumber / 32));
}

function set(vector, num) {
  let vectorIndex = Math.floor(num / 32);
  let numberIndex = num % 32;
  vector[vectorIndex] = vector[vectorIndex] | (1 << numberIndex);
}

function get(vector, num) {
  let vectorIndex = Math.floor(num / 32);
  let numberIndex = num % 32;
  let value = vector[vectorIndex] & (1 << numberIndex);
  return value != 0;
}

//using set object to cache chars
function isUniqueWithSet(str) {
    const cache = new Set();

    for(let i = 0; i < str.length; i++) {
        if(cache.has(str[i])) {
            return false;
        }
        cache.add(str[i]);
    }
    return true;
}

//uncomment for testing. Both have similar time of execution
//console.log(isUnique("askhjf123456fkgaskfgsakjgfkas"));
//console.log(isUniqueWithSet("askhjf123456fkgaskfgsakjgfkas"));

