const stringToNumArr = function(timeStr) {
  const timeArr = timeStr.split(":");
  return timeArr;
};
const getMinuteFromString = function(timeArr) {
  const hours = Number(timeArr[0]) * 60;
  const minutes = Number(timeArr[1]);
  const allMinutes = hours + minutes;
  return allMinutes;
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


