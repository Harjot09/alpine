import React from 'react'
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import AboutUs from './Components/AboutUs'
import Products from './Components/Products'
import OurServices from './Components/OurServices'
import Faq from './Components/Faq'
import SignUp from './Components/SignUp'
import Login from './Components/Login' 
import Cart from './Components/Cart'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Gardening from './Components/Gardening'
import Seed from './Components/Seed'
import Pots from './Components/Pots' 
import Fertilizers from './Components/Fertilizers'
import Acessories from './Components/Acessories'
import Pebbles from './Components/Pebbles'
import Bless from './Components/Bless'
import Destined from './Components/Destined'
import Tranquil from './Components/Tranquil'
import Divine from './Components/Divine'

const App = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/Products' element={<Products />}></Route>
        <Route path='/OurServices' element={<OurServices />}></Route>
        <Route path='/Faq' element={<Faq />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      <Route path='/Login' element={<SignUp />}></Route> 
        { <Route path='/SignUp' element={<Login />}></Route>  }
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/Gardening' element={<Gardening />}></Route>
        <Route path='/Seed' element={<Seed />}></Route>
        <Route path='/Pots' element={<Pots />}></Route>
        <Route path='/Fertilizers' element={<Fertilizers />}></Route>
        <Route path='/Acessories' element={<Acessories />}></Route>
        <Route path='/Pebbles' element={<Pebbles />}></Route>
        <Route path='/Bless' element={<Bless />}></Route>
        <Route path='/Destined' element={<Destined />}></Route>
        <Route path='/Tranquil' element={<Tranquil />}></Route>
        <Route path='/Divine' element={<Divine />}></Route>
      </Routes>
    </div>
  )
}

export default App;
