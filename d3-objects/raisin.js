// const raisinAlarm = function(cookie) {
//   // loop through array


//   for (const i of cookie) {
//     if (i === "🍇") {
//       return "Raisin alert!";
//     }
   
//   } return 'All good!';
// };

// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));// raisin alert
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));//raisin alert
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));//all good



const raisinAlarmArray = function(cookies) {
  let sweet = [];
  for (let j = 0; j < cookies.length; j++) {
    let raisinCount = false;
    for (let k = 0; k < cookies[j].length; k++) {
      if (raisinCount === false) {
        if (cookies[j][k] === "🍇") {
          raisinCount = true;
          sweet.push("Raisin alert!");
        }
      }
      
     
    }
    if (!raisinCount) {
      sweet.push('All good!');
    }
    
  }
  return sweet;
  
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇" ],
    ["🍫", "🍫", "🍫"]
  ]
));


