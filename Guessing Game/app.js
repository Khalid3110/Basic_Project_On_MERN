const max = prompt("Enter the maximum range of the number");
const rand = Math.floor(Math.random() * max) + 1;
let guess = prompt("Enter your guess number");

while (true) {
  if (guess == "quit") {
    console.log("User quit game");
    break;
  } else if (guess == rand) {
    console.log("You Win. Random Number is", rand);
    break;
  } else if (guess > rand) {
    guess = prompt("You enter larger number. Please enter samller number");
  } else {
    guess = prompt("You enter smaller number. Please enter larger number");
  }
}
