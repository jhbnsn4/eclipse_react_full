import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { receiveCurrentUser } from '../../actions/LoginActions'
import NavBar from '../NavBar/NavBar'
import { useNavigate, useParams } from "react-router-dom";

import './Login.css'

export default function Login(setLoggedIn) {
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: ''
    })
    const dispatch = useDispatch()
    const [users, setUsers] = useState([{}])
    const [initial, setInitial] = useState(0);
    const curUser = useSelector((state) => state)
    const navigate = useNavigate();


    useEffect(() => {

        fetch('http://localhost:5000/users/get-users').then(res => res.json())
        .then(res => setUsers(res))   

}, [initial])

const handleChange = (event) => {
    const { target: { name, value } } = event
    setUser({...user, [name]: value })
  


}
const addFade = () => {
    
}

const handleSubmit = (e) => {
    
    for(var i = 0; i<users.length; i++){
        if(users[i].username === user.username && users[i].password === user.password){
            dispatch(receiveCurrentUser(users[i]))
            localStorage.setItem('CurrentUser', JSON.stringify(users[i]));
            navigate('/update');
        }
    }
}





  return (
      
    <div className='login-div'>
        <div className='login-heading'><h1 className='login-h1'>Login</h1></div>
        <form className='login-grid'  onSubmit={(e) => handleSubmit(e)}>
        <input onClick={() => addFade()} className='login-grid-item login-input'  placeholder='Enter Username' value={user.username} name='username' onChange={(e) => handleChange(e)}></input>
        <input className='login-grid-item login-input'  placeholder='Enter Password' value={user.password} name='password' onChange={(e) => handleChange(e)}></input>
        <button  className='btn-login' type='submit'>LOGIN</button>
        </form>
    </div>
  )



}
