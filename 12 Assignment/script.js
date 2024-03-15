let arr = [7, 9, 0, -2];

let first = prompt("Enter the number to get first n element");
for (let i = 0; i < first; i++) {
  console.log(arr[i]);
}

let last = prompt("Enter the number to get last n element");
for (let i = arr.length - 1; i >= arr.length - last; i--) {
  console.log(arr[i]);
}

let str = "abba";
if (str.length == 0) {
  console.log("blank");
} else {
  console.log("not blank");
}

let index = 1;

if (str[index] >= "a" && str[index] <= "z") {
  console.log("lower");
} else {
  console.log("not lower");
}

let str2 = "    Khan     ";
console.log("Before trim :", str2);
str2 = str2.trim();
console.log("After trim :", str2);

let ele = prompt("Enter the element that you want to check");
let flage = false;
for (item of arr) {
  //first approch
  if (item == ele) {
    flage = true;
  }
}

if (flage) {
  console.log("Exists");
} else {
  console.log("Not exists");
}

//second approch
if (arr.indexOf(ele) != -1) {
  console.log("Exists");
} else {
  console.log("Not exists");
}
