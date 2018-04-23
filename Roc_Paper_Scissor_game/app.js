var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");
var scoreBoardDiv = document.querySelector(".score-board");
var resultDiv = document.querySelector(".result");
var rockDiv = document.getElementById("r");
var paperDiv = document.getElementById("p");
var scissorDiv = document.getElementById("s");

function getComputerChoice(){
  var choice = ['r','p','s'];
  var randomNumber = math.floor(math.random() * 3);
  return choice[randomNumber];
}

function game(userChoice){
  var computerChoice = getComputerChoice();
  console.log("user Choice => " + userChoice);
  console.log("computer Choice => " + computerChoice);
}
