import React, {useEffect, useState} from 'react'
import {Routes, Route,BrowserRouter} from 'react-router-dom';
import Register from './components/Register/Register';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import './App.css';
import UpdateUser from './components/UpdateUser/UpdateUser';


function App() {



  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/update' element={<UpdateUser />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
