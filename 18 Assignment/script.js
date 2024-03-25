let body = document.querySelector("body");

// Q1
let input = document.createElement("input");
let button = document.createElement("button");

body.append(input);
body.append(button);
button.innerText = "Click me";

// Q2
input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

// Q3
let btn = document.querySelector("#btn");
btn.classList.add("blue");

// Q4
let h1 = document.createElement("h1");
body.append(h1);
h1.innerHTML = "<u>DOM Practice</u>";
h1.classList.add("purple");

// Q5
let p = document.createElement("p");
body.append(p);
p.innerHTML = "Apna College <b>Delta</b> Practice";
