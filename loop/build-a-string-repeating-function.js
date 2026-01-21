** start of script.js **

function repeatStringNumTimes(str, num) {
  if(num <= 0) {
    return "";
  } else {
    let counter = 0;
    let result = "";
    while(counter < num) {
      counter++;
      result += str;
    }
    return result;
  }
}

console.log(repeatStringNumTimes("*", -3));
console.log(repeatStringNumTimes("abc", 3));

** end of script.js **



//using an array result variable

function repeatStringNumTimes(str, num) {
  if(num <= 0) {
    return "";
  } else {
    let result = [];
    for(let i = 0; i < num; i++) {
      result.push(str);
    }
    return `${result.join("").trimEnd()}`;
  }
}

console.log(repeatStringNumTimes("str", 3));
