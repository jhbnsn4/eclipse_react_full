import React, {useState} from 'react'
import './Register.css'
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
    <div className='register-grid'>
    
        <form className='register-grid' onSubmit={() => handleSubmit()}>
        <h1 className='register-h1'>Register</h1>
        <div className='grid-div'>
        <input className='register-input' value={user.username} name='username' onChange={(e) => handleChange(e)} placeholder={'Username'}></input>
        </div>
        <div className='grid-div'>
        <input className='register-input' value={user.password} name='password' onChange={(e) => handleChange(e)}  placeholder={'Password'}></input>
       </div>
       <div className='grid-div'>
        <input className='register-input' value={user.email} name='email' onChange={(e) => handleChange(e)}  placeholder={'Email'}></input>
       </div>
       <br></br>
        <button className='btn-register' type='submit'>SUBMIT</button>
        </form>
  </div>
  )
}
