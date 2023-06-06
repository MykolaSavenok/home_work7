// Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
const priceDollar = 40;
let sum = '';

for (let i = 10; i <= 100; i += 10) {
   if (i === 100) {
      sum += i * priceDollar;
   } else {
      sum += i * priceDollar + ', '
   }
}
console.log(sum)
alert(sum)


//Дано ціле число. З'ясувати, чи є воно простим (простим називається число, більше ніж 1, яке не має інших дільників, крім 1 і себе).
let number = 10;

for (let i = 2; i <= number; i++) {
   let isPrime = true;
   for (let j = 2; j < i; j++) {
      if (i % j === 0) {
         isPrime = false;
         console.log(`${i}: Складене число`)
         break;
      }
   }
   if (isPrime) {
      console.log(`${i}: Просте число`);
   }
}


//Дано ціле число. Визначити, чи можна одержати це число шляхом зведення числа 3 в деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)
const base = 3;
const exponent = 3;
let result = 1;

for (let i = 0; i < exponent; i++) {
  result *= base;
}
console.log(result);

