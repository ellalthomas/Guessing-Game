//ask user to guess
//if guess > random bigger
//guess < random smaller
//guess = random correct

//Asking for players names
let player1 = prompt('What is your name player1?');
let player2 = prompt('What is your name player2?');
 
console.log('Are you ready to play?');

//draw a random name for player1
let randomName = ['Peter', 'Lily', 'Alex', 'Keira', 'Megan', 'Jamie'];
let pickedRandomName1 = randomName[Math.floor(Math.random() * 5 + 0)];

//draw a random name for player2
// let randomName = ['Peter', 'Lily', 'Alex', 'Keira', 'Megan', 'Jamie'];
let pickedRandomName2 = randomName[Math.floor(Math.random() * 5 + 0)];

//picks name for both players
if (player1 == '' && player2 == ''){
  console.log("player2 is " + pickedRandomName1 + ", Player1 is " + pickedRandomName2);
} 

//player1 enters a name, player2 doesn't
else if (player2 == ''){
console.log("player1 is " + player1 + " Player2 is " + pickedRandomName2);

} 
//player2 enters a name, but player1 doesn't
else if (player1 == ''){
console.log("player2 is " + player2 + ", Player1 is " + pickedRandomName2);
} 

//Welcoming players who have given own name
else {
  console.log('Welcome ' + player1 + ' and ' + player2 + ' to the guessing game');
}

let player1Point = 0;
let player2Point = 0;

//set ;round; to 1 and set ;point; to 0 at the beginning of the game
play();
function play(){
random = Math.floor(Math.random() * 20 + 1);
let round = 1;

do{
guessPlayer1 = prompt(player1 + ' guess a number between 1 - 20:');

if (guessPlayer1 > random){
  console.log('Enter a smaller number');
}else if (guessPlayer1 < random){
  console.log('Enter a larger number');
}else {
  console.log('You got it!');
  player1Point++
  console.log(player1 + ', your point now is ' + player1Point);
}

//asking for players numbers and telling if too high ot low
guessPlayer2 = prompt(player2 + ' guess a number between 1 - 20:')
if (guessPlayer2 > random){
  console.log('Enter a smaller number');
}else if (guessPlayer2 < random){
  console.log('Enter a larger number');
}else if (guessPlayer2 == random){
  console.log('You got it!');
  player2Point++
  console.log(player2 + ', your point now is ' + player2Point);
  break;
  }
  round ++
} while (round <= 3){
}

again = prompt('Do you want to play again?');

if (again == 'yes') {
play();
} else {
	console.log(player1 + ' your final point is ' + player1Point)
  console.log(player2 + ' your final point is ' + player2Point)
	console.log('GAME OVER');
}
}