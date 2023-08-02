import React from 'react'
import './header2.css'
import logo from "../images/AAlogo.jpg"

function Header2() {
  return (
    <>
      <div className="header-2">

        <a href="#" className="logo">
        <img src={logo}></img>
        
         <h4>Attractive Agriculture </h4>
         
         </a>

        <form action="" className="search-bar-container">
          <input type="search" id="search-bar" placeholder="search here..." />
          <label for="search-bar" className="fas fa-search"></label>
        </form>

      </div>

    </>
  )
}
export default Header2;
