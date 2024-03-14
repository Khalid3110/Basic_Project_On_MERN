let num = 6683;
if (num % 10 == 0) {
  console.log("good");
} else {
  console.log("bad");
}

let username = prompt("Enter your name");
let age = prompt("Enter your age");
alert(`${username} is ${age} year old.`);

let quarter = prompt("Enter the quarter like 1,2,3,4");
switch (quarter) {
  case "1":
    console.log("January, February, March");
    break;
  case "2":
    console.log("April, May, June");
    break;
  case "3":
    console.log("July, August, September");
    break;
  case "4":
    console.log("October, November, December");
    break;
  default:
    console.log("Please enter correct quarter");
}

let str = prompt("Enter string");
if ((str[0] == "A" || str[0] == "a") && str.length > 5) {
  console.log("Golden");
} else {
  console.log("Not Golden");
}

let num1 = 55;
let num2 = 99;
let num3 = 87;

if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2);
} else {
  console.log(num3);
}

let n1 = 32;
let n2 = 47762;

console.log(n1 % 10 == n2 % 10);
