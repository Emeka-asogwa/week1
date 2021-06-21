const args = process.argv;
let num = args.slice(2);
let sum = 0;
for (let i = 0; i < num.length; i++) {
  sum = sum + Number(num[i]);
}
console.log(sum);