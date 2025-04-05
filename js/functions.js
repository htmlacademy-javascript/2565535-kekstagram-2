//Проверка длины строки.
const checkText = function (sometext, maxSimbols) {
  if (sometext.length <= maxSimbols) {
    return true;
  }
  return false;
};
checkText();

//Проверка полиндрома.
const isPolindrom = function (string) {
  const newString = string.replaceAll(' ','').toLowerCase();
  let emptyString = '';
  for (let i = newString.length - 1; i >= 0; i--) {
    emptyString += newString[i];
  }
  return emptyString === newString;
};
isPolindrom();

