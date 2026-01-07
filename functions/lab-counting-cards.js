//** start of script.js **

let count = 0;

function cardCounter(card) {

  card = (card >= 2 && card <= 10)
    ? Number(card) 
    : String(card);
  
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
  }

  return count >= 1 ? `${count} Bet` : `${count} Hold`;

}

console.log(cardCounter(6));
console.log(cardCounter("J"));
console.log(cardCounter(9));



//** end of script.js **

