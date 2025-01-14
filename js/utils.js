// Функция, возвращающая любое число из диапазона.

const getRandomValue = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Функция, возвращающая случайное уникальное число из диапазона.

const createUniqueRandomValue = function (min, max) {
  const valuesArray = [];
  return function () {
    let currentValue = getRandomValue(min, max);
    if (valuesArray.length >= (max - min + 1)) {
      return null;
    }
    while (valuesArray.includes(currentValue)) {
      currentValue = getRandomValue(min, max);
    }
    valuesArray.push(currentValue);
    return currentValue;
  };
};

export {getRandomValue, createUniqueRandomValue};
