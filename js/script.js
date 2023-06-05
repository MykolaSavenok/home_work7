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
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {
   for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
   }
   console.log(i);
}


//Дано ціле число. Визначити, чи можна одержати це число шляхом зведення числа 3 в деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)
let number = +prompt('Введіть число:');
let stupin = 2;

if (!number) {
   alert(`Nubmer is not valid`)
} else {
   alert(number ** stupin)
}