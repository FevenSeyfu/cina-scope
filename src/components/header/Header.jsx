import React from 'react'
import ReactDOM  from 'react-dom';
import logo  from '../../Assets/images/logo_maroon.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Header = () => {
  return (
    <div className='top-header'>
      <div className="logo-container">
        <a href="#">
          <img src={logo} alt="cineScope logo" className="logo" />
        </a>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a class="item">
              Trending
              <i class="fire large icon"></i>
            </a>
          </li>
          <li>
            <a class="item">
              Movies
              <i class="film large icon"></i>
            </a>
          </li>
          <li>
            <a class="item">
              Tv Series
              <i class="tv large icon"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header