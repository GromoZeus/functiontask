// Реализуйте функцию-предикат isValidIPv6(), которая проверяет IPv6-адреса
// (адреса шестой версии интернет протокола) на корректность. Функция принимает
//  на вход строку с адресом IPv6 и возвращает true, если адрес корректный,
//  а в противном случае false.

// Дополнительные условия:

//     Работа функции не зависит от регистра символов
//     Ведущие нули в группах цифр необязательны
//     Самая длинная последовательность групп нулей, например, :0:0:0: может
//  быть заменена на два двоеточия ::. Такую замену можно произвести только один раз

const isValidIPv6 = (ip) => {
  const normalizedIp = ip.toLowerCase();

  if (normalizedIp.split('::').length > 2) return false;

  if (normalizedIp.includes('::')) {
    const parts = normalizedIp.split('::');
    const left = parts[0] ? parts[0].split(':') : [];
    const right = parts[1] ? parts[1].split(':') : [];
    const totalSegments = left.length + right.length;

    if (totalSegments > 7) return false;

    while (left.length + right.length < 8) {
      left.push('0');
    }

    ip = [...left, ...right].join(':');
  }

  const segments = ip.split(':');
  if (segments.length !== 8) return false;

  if (!segments.every((segment) => (
    segment.length > 0 && segment.length <= 4
    && segment.split('').every((char) => (char >= '0' && char <= '9') || (char >= 'a' && char <= 'f'))))) {
    return false;
  }

  return true;
};

console.log(isValidIPv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334')); // true
console.log(isValidIPv6('2001:db8:85a3:0:0:8a2e:370:7334')); // true
console.log(isValidIPv6('2001:db8:85a3::8a2e:370:7334')); // true
console.log(isValidIPv6('2001:db8:85a3:0:0:8a2e:370g:7334')); // false
console.log(isValidIPv6('2001:db8:85a3:0:0:8a2e:370:7334:1234')); // false
console.log(isValidIPv6('::1')); // true
console.log(isValidIPv6('2001:0db8:85a3::8a2e:0370:7334')); // true
console.log(isValidIPv6('::')); // true
console.log(isValidIPv6('2001:db8::85a3::8a2e:370:7334')); // false
