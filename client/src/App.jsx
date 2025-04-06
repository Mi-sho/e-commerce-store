import { Routes, Route } from 'react-router'

import './App.css'

import Navigation from './components/navigation/Navigation'
import Home from './components/home-page/Home'
import Login from './components/login/Login'
import Register from './components/register-page/Register'
import About from './components/about-us/About'
import Footer from './components/footer/Footer'
import ContactUs from './components/contact-us/ContactUs'
import Blog from './components/blog/Blog'
import Catalog from './components/items-catalog/Catalog'
import Cart from './components/profile-cart/Cart'

function App() {
  return (
     <>
      <Navigation/>
     <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/login' element={<Login />} />
     <Route path='/register' element={<Register/>} />
     <Route path='/about-us' element={<About />} />
     <Route path='contact-us' element={<ContactUs />} />
     <Route path='/blog' element={<Blog />} />
     <Route path='/catalog' element={<Catalog />} />
     <Route path='myprofile/cart' element={<Cart />}/>
     </Routes>

    <Footer /> 
    </>

  )
}

export default App
