import React, {useState} from 'react'
import Login from '../Login/Login'

export default function UpdateUser() {
  var userStored = JSON.parse(localStorage.getItem("CurrentUser"))
    const [user, setUser] = useState(userStored)
    
    const handleChange = (event) => {
        const { target: { name, value } } = event
        setUser({...user, [name]: value })
    
    
    }
    
    const handleSubmit = () => {
        sendLogin()
    }

    const logUser = () => {
      console.log(userStored)
    }
    
    const sendLogin = () => {
        console.log("JSON", JSON.stringify(user))
        
        fetch('http://localhost:5000/users/adduser', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }).then(res => res.json())
        .then(res => console.log(res));
      
      
      }
      if(userStored){
       return (
        <div>
           
            <h1 onClick={() => logUser() }>Update: {userStored.username}</h1>
            <form onSubmit={() => handleSubmit()} autoComplete="off">
            <h5>Username</h5>
            <input value={user.username} name='username' onChange={(e) => handleChange(e)}></input>
            <h5>Password</h5>
            <input value={user.password} name='password' onChange={(e) => handleChange(e)}></input>
            <h5>Email</h5>
            <input value={user.email} name='email' onChange={(e) => handleChange(e)}></input>
           <br></br>
            <button className='btn-dark' type='submit'>submit</button>
            </form>
      </div>
      )
       }
       else {
         return(
         <Login />
               )      }
    }