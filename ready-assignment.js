function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }
  let difference = income - expenses;
  let tax = difference * 0.2;
  return tax;
}


function sendNotification(email) {
  if (email.includes("@") === false) {
    return "Invalid Email";
  }

  let newStr = email.split("@");
  let message = newStr[0] + " sent you an email from " + newStr[1];
  return message;
}


function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  let items = [];
  for (let item of name) {
    if (item > 0) {
      return true;
    }
  }
  return false;
}


function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }
  let total = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily === true) {
    total = total + 20;
  }
  if (total >= 80) {
    return true;
  } else {
    return false;
  }
}


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
