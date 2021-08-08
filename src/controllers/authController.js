const express = require("express");
const bcrypt = require('bcrypt')

const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (name && email && password) {
    try {
      //req.body['password'] = await hashPasswordAsync(req.body['password']);
      const user = User.create(req.body);

      return res.send({ user });
    } catch (err) {
      return res.status(400).send({ error: "Registration failed" });
    }
  }else{
    return res.status(400).send({ error: "Expected parameters not received" });
  }
});

const hashPasswordAsync = async password => {
	const salt = await bcrypt.genSalt()
	const hash = await bcrypt.hash(password, salt)
	return hash;
}

module.exports = (app) => app.use("/auth", router);
