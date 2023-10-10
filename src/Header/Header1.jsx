import React from 'react'
import './header1.css'

function Header1() {
  return (
    <>
      <div className="header-1">

        <div className="share">
          <span> follow us : </span>
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-linkedin"></a>
        </div>

        <div className="call">
          <span> call us : </span>
          <a href="#">+123-456-7890</a>
        </div>

      </div>
    </>
  )
}
export default Header1;
