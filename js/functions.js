//Проверка длины строки.
const chekText = function (sometext, maxSimbols) {
  if (sometext.length <= maxSimbols) {
    return true;
  }
  return false;
};

//Проверка полиндрома.
const isPolindrom = function (string) {
  let newString = string.replaceAll(' ','').toLowerCase();
  let emptyString = '';
  for (let i = newString.length - 1; i >= 0; i--) {
    emptyString += newString[i];
  }
  return emptyString === newString;
};
