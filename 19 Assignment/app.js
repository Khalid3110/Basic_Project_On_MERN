let btn = document.querySelector("button");
let body = document.querySelector("body");
let textarea = document.querySelector("textarea");
let input = document.querySelector("input");
let h2 = document.querySelector("h2");

textarea.addEventListener("mouseout", () => {
  console.log("mouse out");
});

body.addEventListener("keypress", () => {
  console.log("key press");
});

textarea.addEventListener("scroll", () => {
  console.log("scroll");
});

window.addEventListener("load", () => {
  console.log("page reloaded");
});

btn.addEventListener("click", () => {
  btn.style.backgroundColor = "green";
});

let print = (...str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 1) {
      console.log("one");
    }
  }
};

input.addEventListener("input", () => {
  let str = input.value.replace(/[^a-zA-Z\s]/g, "");
  h2.innerText = str;
});
