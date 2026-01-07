** start of script.js **

let year = 2024;

function isLeapYear(number) {
  /* if (number % 4 === 0) {
    return `${number} is a leap year.`;
  } else if (!(number % 100 === 0)) {
    return `${number} is not a leap year.`;
  } else if (!(number % 400 === 0)) {
    return `${number} is a leap year.`;
  } */

  if (number % 4 === 0 &&
    !(number % 100 === 0 &&
      number % 400 !== 0
    )
  ) {
    return `${number} is a leap year.`;
  } else {
    return `${number} is not a leap year.`;
  }

}

const result = isLeapYear(year);

console.log(result)

** end of script.js **

