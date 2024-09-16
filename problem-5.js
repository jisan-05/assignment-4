function waitingTime(waitingTimes, serialNumber) {
  if (
    Array.isArray(waitingTimes) !== true ||
    typeof serialNumber !== "number"
  ) {
    return "Invalid Input";
  }

  let sum = 0;
  for (let waiting of waitingTimes) {
    sum = waiting + sum;
  }
  let average = Math.round(sum / waitingTimes.length);
  let her_serial = serialNumber - 1;
  let before_her = her_serial - waitingTimes.length;
  let time_need = before_her * average;

  return time_need;
}
 
console.log(waitingTime([3, 5, 7, 11, 6], 10));
 
