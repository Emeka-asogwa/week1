const numBottlesToReceive = function(num) {
  if (isNaN(num)) {
    return {
      totalBottles: 0,
      remainingBottles: 0,
      remainingCaps: 0,
      totalEarned: 0,
      bottles: 0,
      caps: 0,
      
      
    }
  }

  let everyEmptyBottle = Math.floor(num / 2);
  let everyBottleFree = Math.floor(everyEmptyBottle / 4);
  let numBottlesFromEmpties = Math.floor(everyEmptyBottle / 2);

  return {
    totalBottles: everyEmptyBottle + everyBottleFree + numBottlesFromEmpties,
    totalEarned: everyEmptyBottle,
    bottles: numBottlesFromEmpties,
    caps: everyBottleFree,
    remainingBottles: everyEmptyBottle % 2,
    remainingCaps: everyEmptyBottle % 4,
  }
}

let result = numBottlesToReceive(Number(process.argv[2]))
console.log(`Total: ${result.totalBottles}, Purchased: ${result.totalEarned}, from empties: ${result.bottles}, from bottlecaps: ${result.caps}`);
console.log(`you have ${result.remainingBottles} empty bottles left and ${result.remainingCaps} bottle caps left.`);

module.exports = numBottlesToReceive;