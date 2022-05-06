import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'

import './NavBar.css'
import { receiveCurrentUser } from '../../actions/LoginActions';

export default function NavBar() {
  const dispatch = useDispatch()
const [login, setLogin] = useState("Login")
var curUser = localStorage.getItem("CurrentUser")
const currentUserState = useSelector((state) => state)


  useEffect(() => {
     curUser = localStorage.getItem("CurrentUser")
    if(curUser){
      console.log(" USE EFFECT CurrentUser", (curUser))
      setLogin("Logout ")

  
    }  
      else{
      setLogin("Login")
      console.log("No User Logged In")
    }
    
  }, [currentUserState])

  const logout = () => {

    if(curUser){
    localStorage.removeItem('CurrentUser')
    dispatch(receiveCurrentUser({username: '', password: '', email: ''}))
  }
  else{
    console.log(curUser)
  }
  
}
  return (
    <div>
        <nav className='nav-cl'>
            <ul className='ul-cl'>
                <li className='li-cl'>
                    <Link className='Link-cl'  onClick={() => logout()} to='/login'>{login}</Link>
                </li>
                <li className='li-cl'>
                    <Link className='Link-cl'  to='/register'>Register</Link>
                </li>
                

            </ul>
           
            </nav>
    </div>
  )
}
