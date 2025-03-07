// При работе с цветами часто нужно получить отдельные значения красного,
//  зеленого и синего (RGB) компонентов цвета в десятичной системе исчисления
//  и наоборот. Реализуйте функции rgbToHex() и hexToRgb(),
//  которые возвращают соответствующие представление цвета.

import _ from 'lodash';

const hexToRgb = (str) => {
  const [r, g, b] = _.chunk(str.slice(1).split(''), 2).map((element) => element.join('')).map((element) => parseInt(element, 16));
  return { r, g, b };
};

const rgbToHex = (...number) => number.reduce((acc, elemet) => acc + elemet.toString(16).padStart(2, '0'), '#');

console.log(hexToRgb('#24ab00')); // { r: 36, g: 171, b: 0 }

console.log(rgbToHex(36, 171, 0)); // '#24ab00'
