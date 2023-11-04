import React from 'react'
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import '../Assets/css/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Header />
      <Main className='main'/>
      <Footer />
    </div>
  )
}

export default App