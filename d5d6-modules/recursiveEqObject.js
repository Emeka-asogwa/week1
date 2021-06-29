const recursiveEqObjects = function(object1, object2) {
  if (object1 === object2) {
    return true;
  } 
    
  if (object1 === null || object2 === null || typeof object1 !== "object" || typeof object2 != "object"){
    return false;
  } 
    
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  for (let keys of Object.keys(object1)) {
    if (!Object.keys(object2).includes(keys) || !recursiveEqObjects(object1[keys], object2[keys])){
      return false;
    }
    
  }
  return true;
};


console.log(recursiveEqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true

console.log(recursiveEqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(recursiveEqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false
console.log(recursiveEqObjects({ a: { z: 1 }, b: 2 }, { a: { c: 1 }, b: 2 })) // => false