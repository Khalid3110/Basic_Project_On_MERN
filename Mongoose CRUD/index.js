const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Chat = require("./models/chat.model");
const methodOverride = require("method-override");

app.set("views engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then(() => console.log("Connection sucessfull with DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
}

// let chat1 = new Chat({
//   from: "Khan",
//   to: "Arif",
//   msg: "Hello",
//   created_at: new Date(),
// });

// chat1.save().then((res) => {
//   console.log(res);
// });

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("home.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("newchat.ejs");
});

app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let chat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });

  chat.save().then((res) => {
    console.log(res);
  });
  res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let data = await Chat.findById(id);
  res.render("edit.ejs", { data });
});

app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: msg },
    { runValidators: true, new: true }
  );
  console.log(updatedChat);
  res.redirect("/chats");
});

app.get("/chats/:id/delete", async (req, res) => {
  let { id } = req.params;
  let data = await Chat.findById(id);
  res.render("delete.ejs", { data });
});

app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server start");
});
