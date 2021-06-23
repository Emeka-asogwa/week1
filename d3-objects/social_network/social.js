const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};




const biggestFollower = function (data) {
  let followers = 0;
  let newName = "";
  for (let keys in data) {
    let lengthOfFollows = data[keys].follows.length;
    let name = data[keys].name;
    //console.log(data[keys].follows.length);
    if (lengthOfFollows > followers) {
      followers = lengthOfFollows
      newName = name;
    }
  }
  return newName;

}

console.log(biggestFollower(data));



