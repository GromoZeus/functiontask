// Реализуйте функцию, которая выводит на экран горизонтальную гистограмму.
//  Функция принимает на вход количество бросков кубика и функцию,
//  которая имитирует бросок игральной кости. Вызов этой функции
//  генерирует значение от 1 до 6, что соответствует одной из граней игральной кости.

// Гистограмма содержит строки, каждой из которых соответствует грань
//  игральной кости и количество выпадений этой грани. Результаты
//  отображаются графически (с помощью символов #) и в виде числового
//  значения, за исключением случаев, когда количество равно 0 (нулю).

const play = (count, fn) => {
  const keys = ['1', '2', '3', '4', '5', '6'];
  const obj = {};

  keys.forEach((key) => { obj[key] = 0; });

  for (let i = 0; i < count; i += 1) {
    const roll = fn();
    obj[roll] += 1;
  }

  keys.forEach((key) => {
    if (obj[key] > 0) {
      console.log(`${Number(key)}|${'#'.repeat(obj[key])} ${obj[key]}`);
    } else {
      console.log(`${Number(key)}|`);
    }
  });
};

const rollDie = () => Math.floor(Math.random() * 6) + 1;

play(100, rollDie);
