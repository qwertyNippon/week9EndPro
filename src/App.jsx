import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import './App.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MyLogin from './views/MyLogin';
import MySignup from './views/MySignup';
import MyCart from './views/MyCart';
import MyIndProd from './components/MyIndProd';
import MyHome from './views/MyHome';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNav />
      <Routes>
        <Route children path='/mylogin' element={<MyLogin  />} />
        <Route children path='/mysignup' element={<MySignup  />} />
        <Route children path='/mycart' element={<MyCart  />} />
        <Route children path='/myindprod' element={<MyIndProd  />} />
        <Route children path='/myhome' element={<MyHome />} />
      </Routes>
      <MyFooter />
    </>
  )
}

export default App
