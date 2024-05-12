const mongoose = require("mongoose");

main()
  .then(() => console.log("database connect successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDB");
}

// one to many(millions) refrences relation model

const postSchema = new mongoose.Schema({
  content: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Postuser",
  },
});

const postuserSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const Postuser = mongoose.model("Postuser", postuserSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  const user1 = new Postuser({
    username: "Khan",
    email: "khan@xyz.com",
  });

  const post1 = new Post({
    content: "Hello sir",
    likes: 6,
  });

  post1.user = user1;

  await user1.save();
  await post1.save();
};

const addData2 = async () => {
  const user = await Postuser.findOne({ username: "Khan" });

  const post2 = new Post({
    content: "By By",
    likes: 9,
  });

  post2.user = user;
  await post2.save();
};

// addData();
addData2();
