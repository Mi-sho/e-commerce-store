import { Routes, Route } from 'react-router'
import { ToastContainer } from 'react-toastify'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

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
import Checkout from './components/profile-checkout/Checkout'
import CreateEditItem from './components/admin/create-edit-item/CreateEditItem'
import WriteEditArticle from './components/admin/write-edit-article/WriteEditArticle'
import ItemDetails from './components/item-details/ItemDetails'
import ArticleDetails from './components/article-details/ArticleDetails'
import ProfileOrderHistory from './components/profile-order-history/ProfileOrderHistory'
import Logout from './components/logout/Logout'
import UserProvider from './providers/UserProvider'
import GuestGuard from './components/guards/GuestGuard';
import AuthGuard from './components/guards/AuthGuard';
import AdminGuard from './components/guards/AdminGuard';

function App() {
  return (
     <>
     <UserProvider>
      
      <Navigation/>
     <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/about-us' element={<About />} />
     <Route path='/blog' element={<Blog />} />
     <Route path='/catalog' element={<Catalog />} />
     <Route path='/catalog/:itemId/details' element={<ItemDetails />} />
     <Route path='/blog/:articleId/details' element={<ArticleDetails />} />

      <Route element={<GuestGuard />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
     </Route>
     
     <Route element={<AuthGuard />}>
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='/myprofile/cart' element={<Cart />}/>
          <Route path='/myprofile/checkout' element={<Checkout />}/>
          <Route path='/myprofile/orderhistory' element={<ProfileOrderHistory />} />
        
          <Route path='/logout' element={<Logout />} />
     </Route>
     
      <Route element={<AdminGuard />}>
          <Route path='/admin/create' element={<CreateEditItem tittle='Create' />}/>
          <Route path='/admin/:itemId/edit' element={<CreateEditItem tittle='Edit' />}/>
          <Route path='/admin/write-article' element={<WriteEditArticle tittle='Write' />}/>
          <Route path='/admin/:articleId/edit-article' element={<WriteEditArticle tittle='Edit' />}/>
      </Route>

     </Routes>

    <Footer /> 
    
    </UserProvider>
    <ToastContainer position="top-right" autoClose={3000} />
    </>

  )
}

export default App
