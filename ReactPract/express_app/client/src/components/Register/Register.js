import React, {useState} from 'react'
import NavBar from '../NavBar/NavBar'

export default function Register() {
const [user, setUser] = useState({
    username: '',
    password: '',
    email: ''
})

const handleChange = (event) => {
    const { target: { name, value } } = event
    setUser({...user, [name]: value })


}

const handleSubmit = () => {
    sendLogin()
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
   return (
    <div>
    
        <h1>Name: {user.username} Pass:  {user.password} Email: {user.email}</h1>
        <form onSubmit={() => handleSubmit()}>
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
