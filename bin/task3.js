// Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает
//  строку задом наперед, используя рекурсию.

const reverse = (str) => {
  if (!str.length) {
    return '';
  }
  return `${str.slice(-1)}${reverse(str.slice(0, -1))}`;
};

console.log(reverse('string'));
