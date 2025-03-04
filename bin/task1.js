// Реализуйте функцию, которая принимает на вход массив и возвращает
//  новый, состоящий из элементов, у которых такая же чётность, как
//  и у первого элемента входного массива.

const sameParity = (arr) => {
  const [first, ...fraction] = arr;
  const newArr = fraction.filter((element) => Math.abs(element) % 2 === Math.abs(first) % 2);
  return first !== undefined ? [first, ...newArr] : [];
};

console.log(sameParity([-1, 0, 1, -3, 10, -2])); // [-1, 1, -3]
console.log(sameParity([2, 0, 1, -3, 10, -2])); // [2, 0, 10, -2]
console.log(sameParity([])); // []
