import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../../service/LoginService';
import './NavBar.css'
import { receiveCurrentUser } from '../../actions/LoginActions';

export default function NavBar() {
const [isOpen, setIsOpen] = useState(false)
const dispatch = useDispatch()
const [login, setLogin] = useState("Login")
var curUser = JSON.parse(localStorage.getItem("CurrentUser"))
const currentUserState = useSelector((state) => state)
const [profName, setProfName] = useState('John Benson');


  useEffect(() => {
     curUser = JSON.parse(localStorage.getItem("CurrentUser"))
    if(curUser){
      console.log(" USE EFFECT CurrentUser", (curUser))
      setLogin("Logout ")
      

  
    }  
      else{
      setLogin("Login")
      console.log("No User Logged In")
    }
    
  }, [currentUserState])


  return (
    <div className="Navbar">
      <span className='nav-logo'>{profName}</span>

      <div className={`nav-items ${isOpen && "open"}`}>
        <a href='/register'>Register</a>
        <a onClick={() => logout(dispatch, receiveCurrentUser)}  href='/login'>{login}</a>
        <a href='/update'>Update</a>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
      <div className='bar'>
      </div>
      </div>
    </div>
  )
}
