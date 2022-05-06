import React, { useState } from "react";
import { logout } from "../../service/LoginService";
import Login from "../Login/Login";
import { receiveCurrentUser } from "../../actions/LoginActions";
import { useDispatch } from "react-redux";
import "./UpdateUser.css";

export default function UpdateUser() {
  var userStored = JSON.parse(localStorage.getItem("CurrentUser"));
  const [user, setUser] = useState(userStored);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    sendUpdate();
  };


  const sendUpdate = () => {
    var updateParam = "http://localhost:5000/users/update/" + user._id;
    fetch(updateParam, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    logout(dispatch, receiveCurrentUser);
  };
  if (userStored) {
    return (
      <div>
        <h1>Update: {userStored.username}</h1>
        <form onSubmit={() => handleSubmit()} autoComplete="off">
          <h5>Username</h5>
          <input
            value={user.username}
            name="username"
            onChange={(e) => handleChange(e)}
          ></input>
          <h5>Password</h5>
          <input
            value={user.password}
            name="password"
            onChange={(e) => handleChange(e)}
          ></input>
          <h5>Email</h5>
          <input
            value={user.email}
            name="email"
            onChange={(e) => handleChange(e)}
          ></input>
          <br></br>
          <button className="btn-dark" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <Login />
        <br></br>
        <p className="p-update-logout"> You need to be Logged In</p>
      </div>
    );
  }
}
