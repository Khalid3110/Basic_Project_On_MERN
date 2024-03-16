// Qs 1
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num) {
    arr.splice(i, 1);
  }
}

console.log(arr);

// Qs 2
let number = 287152;
let newNumber = number.toString();
let count = newNumber.length;
console.log(count);

// Qs 3
let sum = 0;
for (int of newNumber) {
  let newInt = parseInt(int);
  sum += newInt;
}
console.log(sum);

// Qs 4
let n = 5;
let facto = 1;

for (let i = 1; i <= n; i++) {
  facto = facto * i;
}

console.log(facto);

// Qs 5
let maxi = arr[0];
for (number of arr) {
  if (number > maxi) {
    maxi = number;
  }
}

console.log(maxi);
