import React from 'react'
import './header1.css'

function Header1() {
  return (
    <>
      <div class="header-1">

        <div class="share">
          <span> follow us : </span>
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
        </div>

        <div class="call">
          <span> call us : </span>
          <a href="#">+123-456-7890</a>
        </div>

      </div>
    </>
  )
}
export default Header1;
