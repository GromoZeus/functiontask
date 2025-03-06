// Реализуйте функцию, которая принимает на вход массив чисел и искомое число.
//  Задача функции — найти в массиве ближайшее число к искомому и вернуть его индекс в массиве.

// Если в массиве содержится несколько чисел, одновременно являющихся ближайшими к искомому числу,
//  то возвращается наименьший из индексов ближайших чисел.

const findIndexOfNearest = (arr, num) => {
  const newArr = arr.map((element) => Math.abs(element - num));
  return arr.length ? newArr.findIndex((element) => element === Math.min(...newArr)) : null;
};

console.log(findIndexOfNearest([], 2)); // null
console.log(findIndexOfNearest([15, 10, 3, 4], 0)); // 2
console.log(findIndexOfNearest([7, 5, 3, 2], 4)); // 1
console.log(findIndexOfNearest([7, 5, 4, 4, 3], 4)); // 2
