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

// Функции возвращаются.

const stringToNumArr = function(timeStr) {
  return timeStr.split(':');
};
const getMinuteFromString = function(timeArr) {
  const hours = Number(timeArr[0]) * 60;
  const minutes = Number(timeArr[1]);
  return hours + minutes;
};
const mySced = function(startWork, endWork, startMeet, timeMeet) {
  const startDayInMinutes = getMinuteFromString(stringToNumArr(startWork));
  const endDayInMinutes = getMinuteFromString(stringToNumArr(endWork));
  const startMeetInMinutes = getMinuteFromString(stringToNumArr(startMeet));
  const endMeetInMinutes = startMeetInMinutes + timeMeet;
  if (startDayInMinutes <= startMeetInMinutes && endMeetInMinutes <= endDayInMinutes) {
    return true;
  }
  return false;
};
mySced('08:00', '15:30', '14:00', 90);
