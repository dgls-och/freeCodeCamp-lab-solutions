** start of script.js **

const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if(arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    console.log(`${arr[arr.length - 1]} removed from the end of the lunch menu.`);
  }
  arr.pop();
  return arr;
}

function removeFirstLunch(arr) {
  if(arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    console.log(`${arr[0]} removed from the start of the lunch menu.`)
  }
  arr.shift();
  return arr;
}

function getRandomLunch(arr) {
  const max = arr.length;
  const min = 1;
  const randomNumberGen = Math.floor(Math.random() * (max - min + 1));
  const lunchSelectedRandomly = arr[randomNumberGen];
  
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    console.log(`Randomly selected lunch: ${lunchSelectedRandomly}`);
  }
  
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`);
  }
}

addLunchToStart(lunches, "shushi");
addLunchToStart(["Burger", "Sushi"], "Pizza");
removeLastLunch(["Stew", "Soup", "Toast"],)

** end of script.js **

