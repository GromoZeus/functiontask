// Реализуйте функцию, которая принимает на вход содержимое конфигурационного
//  файла в виде строки, находит в нём переменные окружения, которые нужно
//  передать и возвращает их в виде строки формата "имя1=значение1,
// имя2=значение2,имя3=значение3,...".

// Переменные окружения в конфигурационном файле устанавливаются командой
//  environment, после которой в кавычках указан список переменных через запятую.

// environment="X_FORWARDED_MAIL=tirion@google.com,X_FORWARDED_HOME=/home/tirion,language=en"

// Те переменные, которые нужно пробросить, начинаются с префикса X_FORWARDED_.
//  В итоговую строку имена переменных должны попадать без этого префикса.
//  Например, если в конфигурационном файле переменная устанавливается так:
//  X_FORWARDED_HOME=/home/tirion, то в итоговой строке она должна
//  выглядеть так: "HOME=/home/tirion".

import fs from 'fs';

const content = fs.readFileSync('/home/evgeniy/functiontask/data/s.conf', 'utf-8');
const content2 = fs.readFileSync('/home/evgeniy/functiontask/data/s2.conf', 'utf-8');

const getForwardedVariables = (string) => string.split('\n')
  .filter((element) => element.includes('environment'))
  .filter((element) => element.includes('X_FORWARDED_'))
  .map((element) => element.slice(element.indexOf('X_FORWARDED_'), element.length - 1))
  .join()
  .split('X_FORWARDED_')
  .map((element) => element.slice(0, element.indexOf(',')))
  .join()
  .slice(1);

console.log(getForwardedVariables(content));
console.log(getForwardedVariables(content2));
