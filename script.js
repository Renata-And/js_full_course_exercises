/* Lesson 1 */

console.log('Good morning!');
console.log('Renata');
console.log(10 + 5);
console.log(20 - 5);
console.log(2 + 2 - 5);

document.body.innerHTML = 'Good afternoon!';
document.body.innerHTML = 'Renata';

/* Challenge exercises */
console.log(10 + 8 + 20);
console.log(100 - 20 - 50 + 200);
document.body.innerHTML = '';

/* Lesson 2 */
// 2a
console.log(10 + 3 * 8 + 5);
// 2b
console.log((10 + 3 * 8 + 5) / 3);
// 2c
const total = 18.5 + 2 * 7.5;
// 2d
const tax = total * 0.1;
// 2e
const tax2 = total * 0.2;
// 2f
const cost = 1899 + 2095 + 799;
// 2g
const totalBeforeTax = cost + 499;
// 2h
const tax3 = Math.round(totalBeforeTax * 0.1);
// 2i
const orderTotal = totalBeforeTax + tax3;
console.log(tax3);
console.log(orderTotal);
//2j
console.log(Math.floor(2.8));
console.log(Math.floor(3.5));
// 2k
console.log(Math.ceil(2.5));
console.log(Math.ceil(3.1));
console.log(Math.ceil(4.7));

//2l
const far25 = (25 * 9) / 5 + 32;
console.log(far25);
//2m
const cel86 = ((86 - 32) * 5) / 9;
console.log(cel86);
const farMinus5 = (-5 * 9) / 5 + 32;
console.log(farMinus5);

//3a
const str = 'My name is ';
const name = 'Renata';
console.log(str + name);
