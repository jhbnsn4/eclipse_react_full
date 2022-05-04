import React, {useState, useEffect} from 'react'

export default function Login() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: ''
    })
    const [users, setUsers] = useState([{}])
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
    <div>
        <h1>Name: {user.username} Pass:  {user.password} Email: {user.email}</h1>
        <form onSubmit={() => handleSubmit()}>
        <h5>Username</h5>
        <input value={user.username} name='username' onChange={(e) => handleChange(e)}></input>
        <h5>Password</h5>
        <input value={user.password} name='password' onChange={(e) => handleChange(e)}></input>
        <button type='submit'>LOGIN</button>
        </form>
        <p>LOGIN {login}</p>
    </div>
  )
}
