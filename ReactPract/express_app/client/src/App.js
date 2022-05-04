import {Routes, Route,BrowserRouter} from 'react-router-dom';
import Register from './Register/Register';
import NavBar from './NavBar/NavBar';
import Login from './Login/Login';
import './App.css';


function App() {


const sendGet = () => {
  fetch('http://localhost:5000/users/get-users').then(res => res.json())
  .then(res => console.log(res));


}


  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
