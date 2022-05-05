import React, {useState, useEffect} from 'react'
import './Login.css'

export default function Login() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: ''
    })
    const [users, setUsers] = useState([{}])
    const [passX, setPassX] = useState('')
    const [initial, seInitial] = useState(0);
    const [login, setLogin] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/users/get-users').then(res => res.json())
        .then(res => setUsers(res))   

}, [initial])

const handleChange = (event) => {
    const { target: { name, value } } = event
    setUser({...user, [name]: value })
  


}

const handleSubmit = () => {
    for(var i = 0; i<users.length; i++){
        if(users[i].username === user.username && users[i].password === user.password){
            setLogin(true)
            console.log("LOGIN SUCCESSFUL", users[i].username, "=", user.username)
        }
    }
}




  return (
    <div className='login-div'>
        <h1>Login</h1>
        <form className='login-grid' autocomplete="off"  onSubmit={() => handleSubmit()}>
        <input className='login-grid-item login-input'  placeholder='Enter Username' value={user.username} name='username' onChange={(e) => handleChange(e)}></input>
        <input className='login-grid-item login-input'  placeholder='Enter Password' value={user.password} name='password' onChange={(e) => handleChange(e)}></input>
        <button  className='btn-dark' type='submit'>LOGIN</button>
        </form>
    </div>
  )
}
