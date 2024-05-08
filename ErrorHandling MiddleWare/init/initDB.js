const mongoose = require("mongoose");
const Chat = require("../models/chat.model");

main()
  .then((res) => {
    console.log("DB is connected");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakechat");
}

const chats = [
  {
    from: "Khan",
    to: "Arif",
    msg: "Hello",
  },
  {
    from: "Singh",
    to: "Khan",
    msg: "Hello Hello Hello",
  },
  {
    from: "Khan",
    to: "Singh",
    msg: "Kya haal hai",
  },
];

Chat.insertMany(chats);
