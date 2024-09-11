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

let obj = { name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true };

console.log(calculateFinalScore(obj));
