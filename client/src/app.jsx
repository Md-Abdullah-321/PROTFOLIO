import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/index';
import Contact from './components/contact/index';
import Footer from './components/footer/index';
import Home from './components/home/index';
import Navbar from './components/navbar/index';
import Protfolio from './components/protfolio/index';
import Services from './components/services/index';
import './style.css';

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/protfolio' element={<Protfolio/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes> 
            <Footer/>
        </>
    )
}

export default App;