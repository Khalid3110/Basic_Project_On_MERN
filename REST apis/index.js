const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
var methodOverride = require("method-override");

const port = 8080;

app.set("views engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

let posts = [
  {
    id: uuidv4(),
    name: "khalid",
    desc: "Today is very sunny day",
  },
  {
    id: uuidv4(),
    name: "Arif",
    desc: "I love coding...",
  },
  {
    id: uuidv4(),
    name: "Singh",
    desc: "My exam is over today",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("newpost.ejs");
});

app.post("/posts", (req, res) => {
  let { name, desc } = req.body;
  let id = uuidv4();
  posts.push({ id, name, desc });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id == p.id);
  res.render("view.ejs", { post });
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id == p.id);
  res.render("edit.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.desc;
  let post = posts.find((p) => id == p.id);
  post.desc = newContent;
  res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log("App is running at 8080");
});
