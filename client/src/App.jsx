import './App.css'

import { Routes, Route } from 'react-router'
import Navigation from './components/navigation/Navigation'
import Home from './components/home-page/Home'

function App() {
  return (
     <>
      <Navigation/>
     <Routes>
     <Route path="/" element={<Home />}/>

     </Routes>
     
    </>
  )
}

export default App
