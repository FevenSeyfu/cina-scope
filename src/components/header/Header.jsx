import React from 'react'
import ReactDOM  from 'react-dom';
import logo  from '../../Assets/images/logo.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Header = () => {
  return (
    <div className='top-header'>
      <div className="logo-container">
        <a href="#">
          <img src={logo} alt="cineScope logo" className="logo" />
        </a>
      </div>
      <div class="ui grid">
        <div class="two wide column">
          <div class="ui search">
            <div class="ui icon input">
              <input type="text" autoComplete="off" value="" placeholder="Search..." tabindex="0" class="prompt"/>
                <i aria-hidden="true" class="search icon"></i>
            </div>
          </div>
        </div>
     </div>
    </div> 

  )
}

export default Header