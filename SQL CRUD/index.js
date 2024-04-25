const mysql = require("mysql2");
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

const port = 8080;
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "user",
  password: "1234",
});

app.get("/", (req, res) => {
  let q = `select count(*) from users`;
  try {
    connection.execute(q, (err, results) => {
      if (err) throw err;
      let userCount = results[0]["count(*)"];
      res.render("home.ejs", { userCount });
    });
  } catch (err) {
    console.log(err);
    res.send("Some Error");
  }
});

app.get("/user/add", (req, res) => {
  res.render("adduser.ejs");
});

app.post("/users", (req, res) => {
  let id = uuidv4();
  let { username, useremail, userpassword } = req.body;
  let q = "insert into users (id,username,email,password) values (?,?,?,?)";
  let data = [id, username, useremail, userpassword];
  try {
    connection.execute(q, data, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.redirect("/users");
    });
  } catch (err) {
    console.log(err);
    res.send("Some Error");
  }
});

app.get("/users", (req, res) => {
  let q = `select * from users`;
  try {
    connection.execute(q, (err, allusers) => {
      if (err) throw err;
      //   console.log(results);
      res.render("showusers.ejs", { allusers });
    });
  } catch (err) {
    console.log(err);
    res.send("Some Error");
  }
});

app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `select * from users where id = '${id}'`;
  try {
    connection.execute(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Some Error");
  }
});

app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `select * from users where id='${id}'`;
  try {
    connection.execute(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Some Error");
  }
});

app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { userpassword } = req.body;
  let q = `select password from users where id = '${id}'`;
  try {
    connection.execute(q, (err, result) => {
      if (err) throw err;
      let password = result[0]["password"];
      if (userpassword == password) {
        let q2 = `delete from users where id = '${id}'`;
        connection.execute(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/users");
        });
      } else {
        res.send("Wrong Password");
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Some Error");
  }
});

app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let q = `select * from users where id = '${id}'`;
  let { username: newUsername, userpassword: password } = req.body;
  try {
    connection.execute(q, (err, result) => {
      if (err) throw err;
      let userData = result[0];
      console.log(userData.password);
      if (password != userData.password) {
        res.send("Wrong Password");
      } else {
        let q2 = `update users set username = '${newUsername}' where id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/users");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Some Error");
  }
});

app.listen(port, () => {
  console.log("server is running");
});
