import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import About from './pages/About'
import Navbar from './components/Navbar'
import LanguageSwitcher from "./components/LanguageSwitcher.jsx";
import SearchBar from './components/SearchBar.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <LanguageSwitcher/>
            <Navbar/>
            <SearchBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/collection' element={<Collection/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/placeOrder' element={<PlaceOrder/>}/>
                <Route path='/product/:productId' element={<Product/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
