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
import MyShop from './views/MyShop';

function App() {
  let page
  switch (window.location.pathname) {
    case '/myhome':
      page = <MyHome />
      break
      case '/mylogin':
        page = <MyLogin />
        break
        case '/mysignup':
          page = <MySignup />
          break
          case '/mycart':
            page = <MyCart />
            break
            case '/myindprod':
              page = <MyIndProd />
              break
                case '/myShop':
                  page = <MyShop />
                  break
  }
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNav />
      {/* {page} */}
      <Routes>
        <Route children path='/mylogin' element={<MyLogin  />} />
        <Route children path='/mysignup' element={<MySignup  />} />
        <Route children path='/mycart' element={<MyCart  />} />
        <Route children path='/myindprod' element={<MyIndProd  />} />
        <Route children path='/myhome' element={<MyHome />} />
        <Route children path='/myshop' element={<MyShop />} />
      </Routes>
      <MyFooter />
    </>
  )
}

export default App
