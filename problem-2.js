function sendNotification(email) {
  if (email.includes("@") === false) {
    return "Invalid Email";
  }

  let newStr = email.split("@");
  let message = newStr[0] + " sent you an email from " + newStr[1];
  return message;
}

console.log(sendNotification("zishan@gmail.com"));
