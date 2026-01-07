//** start of script.js **

function maskEmail(email) {
  const emailNameSlice = email.slice(0, email.indexOf("@"));
  const emailDomain = email.slice(email.indexOf("@"));
  const mask = emailNameSlice.replace(emailNameSlice.slice(1,-1), "*");
  const maskRepeat = mask.slice(1, -1).repeat(emailNameSlice.slice(1, -1).length)
  return`${email[0]}${maskRepeat}${emailNameSlice.slice(-1)}${emailDomain}`;
}

let email = "sunset.at@dawn.us";

console.log(maskEmail("apple.pie@example.com"))
console.log(maskEmail("freecodecamp@example.com"))
console.log(maskEmail("info@test.dev"))
console.log(maskEmail("user@domain.org"))
console.log(maskEmail(email));

//** end of script.js **

//Another implementation of the same challenge

//** start of script.js **

function maskEmail(email) {
  const emailFirstPart = email.slice(0, email.indexOf("@"));
  const emailSecondPart = email.slice(email.indexOf("@"));
  const maskedString = emailFirstPart.slice(1, -1).replace(emailFirstPart.slice(1, -1), "*");
  const repeatedMask = maskedString.repeat(emailFirstPart.slice(1, -1).length);
  return `${emailFirstPart[0]}${repeatedMask}${emailFirstPart.slice(-1)}${emailSecondPart}`;

  //console.log(repeatedMask)
}

//maskEmail("ground@mail.net");

let email = "dgls.cc@notsafe.ly";

console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("i**o@test.dev"));
console.log(maskEmail("u**r@domain.org"));

//** end of script.js **


