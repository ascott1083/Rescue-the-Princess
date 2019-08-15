$(document).ready(function(){

// add variables and object for the four items to click
let matchNumber;
let wins = 0;
let losses = 0;

const heros = [
  {
    name: "#mario"
  },
  { name: "#luigi"
  },
  { name: "#toad"
  },
  { name: "#yoshi"
  }
]

// start the game and execute related functions
function startGame() {
  resetCounter();
  generateMatchNumber();
  giveHerosRandomValues();
}

// generate a random point value for each of the items to click
function giveHerosRandomValues() {
  for (let i = 0; i < heros.length; i++) {
    heros[i].assignedValue = generateRandomNum(1, 12);
  }
}

// set up on-click functions and assign random point value
// compare points to secret total point value to match
// update the master point total for items to click

$("#mario").on("click", function() {
  let heroClick = addClicks(heros[0].assignedValue);
  $("#hero-totals").text(heroClick);
  compareClicksToMatch(heroClick, matchNumber);
});

$("#luigi").on("click", function() {
  let heroClick = addClicks(heros[1].assignedValue);
  $("#hero-totals").text(heroClick);
  compareClicksToMatch(heroClick, matchNumber);
});

$("#toad").on("click", function() {
  let heroClick = addClicks(heros[2].assignedValue);
  $("#hero-totals").text(heroClick);
  compareClicksToMatch(heroClick, matchNumber);
});

$("#yoshi").on("click", function() {
  let heroClick = addClicks(heros[3].assignedValue);
  $("#hero-totals").text(heroClick);
  compareClicksToMatch(heroClick, matchNumber);
});

// general function to generate a random number
function generateRandomNum(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
}

// generates the total that clicks need to sum to match
// between 19-120
function generateMatchNumber() {
  matchNumber = generateRandomNum(19,120);
  $("#random-total").text(matchNumber);
  return matchNumber;
}

// create a counter function
let addClicks = (function(clickValue) {
  let counter = 0;
  return function(clickValue) {
    return counter += clickValue;
  }
})();

// reset the counter
function resetCounter () {
  let myTotalScore = addClicks(0);
  myTotalScore = (myTotalScore * -1);
  addClicks(myTotalScore);
}

// test if the number of cats is equal to (winner) or more than the number to match
// update the score text and restart game
function compareClicksToMatch(heroAttacks, matchNumber) {
  if (heroAttacks === matchNumber) {
    wins++;
    $("#wins").text(wins);
    startGame();
  }
  if (heroAttacks > matchNumber) {
    losses++;
    $("#losses").text(losses);
    startGame();
    }
}

startGame();

});