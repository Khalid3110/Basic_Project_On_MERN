const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.model");
const ExpressError = require("./ExpressError");

main()
  .then((res) => {
    console.log("DB is connected");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakechat");
}

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

app.use((err, req, res, next) => {
  console.log("-----Error5--------");
  next(err);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get(
  "/chats",
  asyncWrap(async (req, res) => {
    let chats = await Chat.find({});
    // console.log(chats);
    res.render("home.ejs", { chats });
  })
);

// app.get("/chats/:id/show", async (req, res, next) => {  -----> try-catch approch
//   try {
//     let { id } = req.params;
//     let chat = await Chat.findById(id);
//     if (!chat) {
//       next(new ExpressError(402, "Chat not found"));
//     }
//     res.render("show.ejs", { chat });
//   } catch (err) {
//     next(err);
//   }
// });
app.get(
  "/chats/:id/show",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      next(new ExpressError(402, "Chat not found"));
    }
    res.render("show.ejs", { chat });
  })
);

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post(
  "/chats",
  asyncWrap(async (req, res, next) => {
    let { from, to, msg } = req.body;
    let chat = new Chat({
      from: from,
      to: to,
      msg: msg,
    });

    await chat.save();
    // .then((res) => {
    //   console.log("Chat Saved");
    // })
    // .catch((err) => {
    //   next(err);
    // });
  })
);

// Mongoose Errors handling middleware

const handleValidationErr = (err) => {
  console.log("This is Validation Errors");
  return err;
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleValidationErr(err);
  }
  next(err);
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occured" } = err;
  res.status(status).send(message);
});

//-----------> simple middleware
app.use((req, res, next) => {
  res.send("Page Not Found");
});

app.listen(3000, () => {
  console.log("Server is running");
});
