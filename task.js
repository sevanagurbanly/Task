//1.Istifadcinin daxil etdiyi say qeder daxil etdiyi ededi arraya yigin. +
let numbers = [];
let a = 5;
let b = 10;
let c = 15;
let d = 20;
numbers.push(a, b, c, d);
console.log(numbers);

//2.Array icinde en boyuk və en kicik ededi tapin +
let number = [1, 2, 3, 4, 5, 6, 7];
console.log(Math.max(...number));
console.log(Math.min(...number));

//3.Funksiya islederek array icinde mukemmel ededi tapin
function perfect(a) {
  let total = 0;
  for (let i = 1; i < a; i++) {
    if (a % i === 0) {
      total += i;
    }
  }
  if (total === a) {
    return a;
  }
}
let array = [1, 6, 58, 45, 28, -57];
array = array.filter((a) => perfect(a));
console.log(array);

//4.Daxil olunan say qeder daxil olunan m ve n ededleri arasinda random eded yaradib arraya yigin +
let max = 60;
let min = 40;
let eded = [];
let r1 = Math.floor(Math.random() * (max - min + 1) + min);
let r2 = Math.floor(Math.random() * (max - min + 1) + min);
let r3 = Math.floor(Math.random() * (max - min + 1) + min);
let r4 = Math.floor(Math.random() * (max - min + 1) + min);
eded.push(r1, r2, r3, r4);
console.log(eded);
console.log(eded[0] + eded[1] + eded[2] + eded[3]);
