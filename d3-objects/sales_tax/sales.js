const calculateSalesTax = function(salesData, taxRates) {
  let totalObj = {};
  //let totalSec = 0;

  for (let obj of salesData) {
    let newKey = obj.name;
    totalObj[newKey] = {};
    totalObj[newKey]['totalSales'] = 0;
    totalObj[newKey]['totalTaxes'] = 0;
  }

  // ====== Lets sumup ========///
  for (let obj of salesData) {
    let sum = 0;
    let objName = obj.name;
    for (let value of obj.sales) {
      sum += value;
    }
    if (totalObj[objName]['totalSales']) {
      totalObj[objName]['totalSales'] += sum;
      totalObj[objName]['totalTaxes'] += sum * taxRates[obj['province']];
    } else {
      totalObj[objName]['totalSales'] = sum;
      totalObj[objName]['totalTaxes'] = sum * taxRates[obj['province']];
    }
  }
  return totalObj;
};










// ----- example ------ ////

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];


console.log(calculateSalesTax(companySalesData, salesTaxRates));