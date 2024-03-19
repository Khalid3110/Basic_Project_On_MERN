// Q1
let arr1 = [1, 4, 7, 3, 9, 11, 15];

function largerNumber(input, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > input) {
      console.log(arr[i]);
    }
  }
}

largerNumber(5, arr1);

// Q2
let str = "abcdabcdefgggh";

function getUnique(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (ans.indexOf(char) == -1) {
      ans += char;
    }
  }
  return ans;
}

console.log(getUnique(str));

// Q3
let countries = [];

function takingName(totalNumber) {
  for (let i = 0; i < totalNumber; i++) {
    countries[i] = prompt("Enter the country name");
  }
}

function findLength(item) {
  let l = 0;

  for (let i = 0; i < item.length; i++) {
    if (item[i] != " ") {
      l++;
    }
  }

  return l;
}

function longestName() {
  let maxLen = 0;
  let longCou = "";
  for (country of countries) {
    let currLen = findLength(country);
    if (currLen > maxLen) {
      maxLen = currLen;
      longCou = country;
    }
  }
  return longCou;
}

takingName(3);
console.log(longestName());

// Q4
function countVowels(strValue) {
  let vowelCount = 0;
  for (let i = 0; i < strValue.length; i++) {
    if (
      strValue[i] == "a" ||
      strValue[i] == "e" ||
      strValue[i] == "i" ||
      strValue[i] == "o" ||
      strValue[i] == "u"
    ) {
      vowelCount++;
    }
  }
  return vowelCount;
}

console.log(countVowels(str));

// Q5
function generateRandom(start, end) {
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start;
}

console.log(generateRandom(10, 20));
