// Реализуйте  функцию, которая принимает строку в виде графического
//  представления линейного сигнала и возвращает строку с бинарным кодом.

const nrzi = (str) => {
  if (str.length < 2) {
    return '';
  }
  const array = str.slice(2).split('|');
  const numfirst = str[0] === '|' ? '' : '0';
  return array.reduce((acc, element) => {
    let result = acc;
    result += '1'.padEnd(element.length, '0');
    return result;
  }, `${numfirst}`);
};

const signal1 = '_|¯|____|¯|__|¯¯¯';
console.log(nrzi(signal1)); // '011000110100'

const signal2 = '|¯|___|¯¯¯¯¯|___|¯|_|¯';
console.log(nrzi(signal2)); // '110010000100111'

const signal3 = '¯|___|¯¯¯¯¯|___|¯|_|¯';
console.log(nrzi(signal3)); // '010010000100111'

const signal4 = '';
console.log(nrzi(signal4)); // ''

const signal5 = '|';
console.log(nrzi(signal5)); // ''

const signal6 = '¯|__|¯|___|¯¯';
console.log(nrzi(signal6)); // '010110010'

const signal7 = '_|¯¯¯|_|¯¯¯¯|_|¯¯';
console.log(nrzi(signal7)); // '010011000110'
