const express = require("express");
var userModel = require('./models');
var User = require ('./models')
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
//   const userId = req.params;
//   const user =  {  
//     username: req.body.username,
//     password: req.body.password,
//     email: req.body.email} 
//   userModel.findByIdAndUpdate(userId , user, 
//       function (err, docs) { 
//       if (err){ 
//           console.log(err) 
//       } 
//       else{ 
//           console.log("Updated User : ", docs); 
//       } 
//   }); 

// });


  var user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  };


  userModel.updateOne({id: req.params}, user).then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
      console.log("UPDATER USER SUCCESS")

    }
  ).catch(
    (error) => {
      console.log("UPDATE USER ERROR")
      console.log(error)
      res.status(400).json({
        error: error
      });
    }
  );
 });

module.exports = app;
