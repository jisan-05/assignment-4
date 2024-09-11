function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }
  let difference = income - expenses;
  let tax = difference * 0.2;
  return tax;
}
console.log(calculateTax(10000, 7000));
