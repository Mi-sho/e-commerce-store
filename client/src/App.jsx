import { Routes, Route } from 'react-router'

import './App.css'

import Navigation from './components/navigation/Navigation'
import Home from './components/home-page/Home'
import Login from './components/login-page/Login'
import Register from './components/register-page/Register'
import About from './components/about-us-page/About'
import Footer from './components/footer/Footer'

function App() {
  return (
     <>
      <Navigation/>
     <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/login' element={<Login />} />
     <Route path='/register' element={<Register/>} />
     <Route path='/about-us' element={<About />} />
     </Routes>

    <Footer /> 
    </>

  )
}

export default App
