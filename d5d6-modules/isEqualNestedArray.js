const isEqual = function(a, b) {
  if (a instanceof Array && b instanceof Array) {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (!isEqual(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  return a === b;
};


console.log(isEqual([[2, 3], [4]], [[2, 3], [4]])); // => true

console.log(isEqual([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(isEqual([[2, 3], [4]], [[2, 3], 4])); // => false