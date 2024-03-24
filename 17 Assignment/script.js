let arr = [3, 4, 5, 8];

let newArr = arr.map((ele) => {
  return ele * ele;
});

const sumArr = (ar) => {
  let sum = 0;

  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }

  return sum;
};

const avg = (ar) => {
  let sum = sumArr(arr);
  return sum / ar.length;
};

// console.log(avg(arr));

let sum5 = arr.map((ele) => {
  return ele + 5;
});

// console.log(sum5);

let words = ["apple", "ball"];

let upperWords = words.map((word) => {
  return word.toUpperCase();
});

console.log(upperWords);

const doubleAndReturnArgs = (ar, ...args) => [
  ...ar,
  ...args.map((value) => value * 2),
];

console.log(doubleAndReturnArgs(arr, 3, 5, 6, 8));

let obj1 = {
  name: "Khan",
  age: 21,
};

let obj2 = {
  city: "Delhi",
  pincode: 204433,
};

let newObj = (ob1, ob2) => {
  return { ...ob1, ...ob2 };
};

console.log(newObj(obj1, obj2));
