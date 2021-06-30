const maxProfit = function(arry) {
  let maxprofit = 0;
  for (let i = 0; i < arry.length - 1; i++) {
    for (let j = i + 1; j < arry.length; j++) {
      let profit = arry[j] - arry[i];
      if (profit > maxprofit) {
        maxprofit = profit;
       } 
    }
    
  }
  return maxprofit === 0 ? -1:maxprofit;
};

module.exports = maxProfit;

