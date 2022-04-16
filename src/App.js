import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Singup from './Components/Singup/Singup';


function App() {
  return (
    <div>

      <Navbar></Navbar>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/contact' element={<Contact></Contact>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/singup' element={<Singup></Singup>}></Route>
       </Routes>

    </div>
  );
}

export default App;
