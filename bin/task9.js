// Реализуйте функции ipToInt() и intToIp(), которые преобразовывают представление IP-адреса
//  из десятичного формата с точками в 32-битное число в десятичной форме и обратно.

// Функция ipToInt() принимает на вход строку и должна возвращать число. А функция intToIp()
//  наоборот: принимает на вход число, а возвращает строку.

import _ from 'lodash';

const ipToInt = (str) => parseInt(str.split('.').map((element) => Number(element).toString(16).padStart(2, 0)).join(''), 16);
const intToIp = (num) => _.chunk(num.toString(16).padStart(8, 0), 2).map((element) => parseInt(element.join(''), 16)).join('.');

console.log(ipToInt('128.32.10.1')); // 2149583361
console.log(ipToInt('0.0.0.0')); // 0
console.log(ipToInt('255.255.255.255')); // 4294967295

console.log(intToIp(2149583361)); // '128.32.10.1'
console.log(intToIp(0)); // '0.0.0.0'
console.log(intToIp(32)); // '0.0.0.32'
console.log(intToIp(4294967295)); // '255.255.255.255'
