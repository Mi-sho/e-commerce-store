import './App.css'

import { Routes, Route } from 'react-router'
import Navigation from './components/navigation/Navigation'
import Home from './components/home-page/Home'
import Login from './components/login-page/Login'

function App() {
  return (
     <>
      <Navigation/>
     <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/login' element={<Login />} />

     </Routes>
     
    </>
  )
}

export default App
