const mongoose = require("mongoose");

main()
  .then(() => console.log("database connect successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDB");
}

// one to few relation model
const userSchema = new mongoose.Schema({
  username: String,
  address: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

let addUser = async () => {
  let user1 = new User({
    username: "Khan",
    address: [
      {
        location: "Sikanderpur",
        city: "Ballia",
      },
    ],
  });

  user1.address.push({ location: "Bariya", city: "Ballia" });

  let result = await user1.save();
  console.log(result);
};

addUser();
