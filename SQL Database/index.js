const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "user",
  password: "1234",
});

let randomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

let q = "INSERT INTO users(id,username,email,password) VALUES ?";
// let user = ["123", "123Abc", "abc@gmail.com", "1234"];

let users = [];
for (let i = 1; i <= 50; i++) {
  users.push(randomUser());
}

try {
  connection.query(q, [users], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end();

// console.log(randomUser());
