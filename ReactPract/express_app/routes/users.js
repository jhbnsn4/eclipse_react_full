const express = require("express");
var userModel = require('./models');
const app = express();


app.post("/adduser", async (request, response) => {
  const user = new userModel(request.body);
  console.log("USER", request.body)

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/get-users", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put('/update/:id', (req, res, next) => {
  const user = new User({
    id: req.params.id,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });
  console.log("USER TO UPDATE", user)
  User.updateOne({id: req.params.id}, user).then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

module.exports = app;
