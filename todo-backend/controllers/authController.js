const User = require("../models/User");

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  // Here you would typically check the email and password against the database
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: "Invalid user" });
      }
      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      else {
        console.log("User found", user);
        res.status(200).json({ message: "Login successful" });
      }
      // Here you would typically create a session or a token
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    });
  // res.status(200).json({ message: "Login successful" });
}

exports.postSignup = (req, res, next) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  const user = new User({
    name: name,
    email: email,
    password: password
  });
  user.save().then((user) => {
    console.log("User created", user);
    res.status(201).json({ message: "User created" });
  });
}