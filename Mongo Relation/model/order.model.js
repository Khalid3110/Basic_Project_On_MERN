const mongoose = require("mongoose");

main()
  .then(() => console.log("database connect successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDB");
}

// one to many refrences relation model
const orderSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const customerSchema = new mongoose.Schema({
  username: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addUser = async () => {
  let user1 = new Customer({
    username: "Khan",
  });

  let order1 = await Order.findOne({ name: "Badam" });
  let order2 = await Order.findOne({ name: "Pista" });

  user1.orders.push(order1);
  user1.orders.push(order2);

  let result = await user1.save();

  console.log(result);
};

addUser();
// Order.insertMany([
//   {
//     name: "Kaju",
//     price: 200,
//   },
//   {
//     name: "Badam",
//     price: 400,
//   },
//   {
//     name: "Pista",
//     price: 500,
//   },
// ]);
