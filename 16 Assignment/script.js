let arr = [3, 7, 5, 9, 11];

let arrayAverage = (ar) => {
  let totalSum = 0;
  for (let i = 0; i < ar.length; i++) {
    totalSum += ar[i];
  }

  return totalSum / ar.length;
};

let ans = arrayAverage(arr);

let isEven = (a) => {
  if (a % 2 == 0) {
    return "even";
  } else {
    return "Not even";
  }
};

isEven(5);

const object = {
  message: "Hello, World!",
  logMessage() {
    console.log(this.message);
  },
};

setTimeout(object.logMessage, 1000);
// undefined bcz we not call logMessage function by ()

let length = 4;
function callback() {
  console.log(this.length);
}

const object1 = {
  length: 5,
  method(callback) {
    callback();
  },
};
object1.method(callback, 1, 2);

// print 0 bcz this keyword not used in function it used in object only
