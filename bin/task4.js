// Реализуйте функцию, которая находит все анаграммы слова. Функция принимает
//  исходное слово и список для проверки (массив), а возвращает массив всех
//  анаграмм. Если в списке слов отсутствуют анаграммы, то возвращается пустой массив.

const filterAnagrams = (str, arr) => {
  const strSort = str.split('').sort().join();
  return arr.filter((element) => strSort === element.split('').sort().join());
};

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']

console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']

console.log(filterAnagrams('laser', ['lazing', 'lazy', 'lacer']));
// []
