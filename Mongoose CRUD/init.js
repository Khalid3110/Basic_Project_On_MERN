// this file is used to insert multiple dummy data into mongoDB so we can perform task on DB

const mongoose = require("mongoose");
const Chat = require("./models/chat.model");

main()
  .then(() => console.log("Connection sucessfull with DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
}

let dummyChat = [
  {
    from: "Singh",
    to: "Khan",
    msg: "How are you",
    created_at: new Date(),
  },
  {
    from: "Singh",
    to: "Arif",
    msg: "Send me the notes",
    created_at: new Date(),
  },
  {
    from: "Arif",
    to: "Nawaz",
    msg: "Take the picture out",
    created_at: new Date(),
  },
  {
    from: "Paglu",
    to: "Kallu",
    msg: "Ammi Pagol Hoi Jaboo...",
    created_at: new Date(),
  },
];

Chat.insertMany(dummyChat);
