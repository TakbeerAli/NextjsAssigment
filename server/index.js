const express = require("express");
const boddparser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const expressSession = require("express-session");
const cookiesParser = require("cookie-parser");
const bcrypt = require("bcrypt");
// import db from "./db";
const db = require("./db.js");
const app = express();

app.use(boddparser.json());
app.use(boddparser.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
  })
);

// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookiesParser("mySecretKey"));

app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

app.get("/", (req, res) => {
  res.send("Hello ");
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // console.log("hello", username, passport);

  const query = "INSERT INTO account (`username`, `password`) VALUES (?, ?)";
  const querry2 = "SELECT * FROM account WHERE username = ?";

  db.query(querry2, [username], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length > 0) {
      res.send({ message: "username already exist" });
    }
    if (result.length === 0) {
      const hashPassword = bcrypt.hashSync(password, 10);
      db.query(query, [username, hashPassword], (err, result) => {
        if (err) {
          throw err;
        }
        res.send({ message: "User created" });
      });
    }
  });
});

app.post("/business", (req, res) => {
  const businessName = req.body.businessName;
  const businessAdress = req.body.businessAdress;
  const businessTiming = req.body.businessTiming;
  const businessDay = JSON.stringify(req.body.businessDay);
  const businessCountry = req.body.businessCountry;
  // const businessbranchName = req.body.businessbranchName;
  const query =
    "INSERT INTO businessdetail (`businessName`, `businessAdress`, `businessTiming`, `businessDay`, `businessCountry`) VALUES (?, ?, ?, ?, ?)";
  const querry2 = "SELECT * FROM businessdetail WHERE businessName = ?";

  db.query(querry2, [businessName], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length > 0) {
      res.send({ message: "businessName already exist" });
    }
    if (result.length === 0) {
      db.query(
        query,
        [
          businessName,
          businessAdress,
          businessTiming,
          businessDay,
          businessCountry,
        ],
        (err, result) => {
          if (err) {
            throw err;
          }
          res.send({ message: "Business created" });
        }
      );
    }
  });
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      throw err;
    }
    if (!user) {
      res.send("No user exists");
    }
    if (user) {
      req.login(user, (err) => {
        if (err) {
          throw err;
        }
        res.send("User logged in");
        console.log(user);
      });
    }
  })(req, res, next);
});

app.get("/getBusinessDetail", (req, res) => {
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM businessdetail", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
});

app.listen(4000, () => {
  console.log("server started on port 4000");
});
