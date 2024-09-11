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

console.log(checkDigitsInName("Raj"));
