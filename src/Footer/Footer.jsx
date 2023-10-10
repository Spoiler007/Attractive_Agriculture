import React from 'react'
import './footer.css'
import {AiFillYoutube} from 'react-icons/ai'

function Footer() {
  return (
<>
<section className="footer">

<div className="box-container">

    <div className="box">
        <h3>about us</h3>
        <p>Welcome to Attractive Agriculture, Your Botanical Haven!
<br/>
<br/>
Discover a curated selection of premium plants at Attractive Agriculture. Our team of dedicated horticulturists ensures each plant is a living work of art, thriving and ready to enhance your space. From rare finds to timeless classics, our collection caters to all plant enthusiasts. Need advice? Our experts are here to help. Join our community, share your successes, and participate in exclusive events. <br/><br/>Thank you for choosing Attractive Agriculture as your green companion. Let's grow together!</p>
    </div>
    <div className="box">
        <h3>branch locations</h3>
        <a href="#">Kolkata</a>
        <a href="#">Paschim Medinipur</a>
        <a href="#">Ghatal</a>
        <a href="#">Keshpur</a>
        <a href="#">Chandrakona Town</a>
        <a href="#">Chandrakona Road</a>
    </div>
    <div className="box">
        <h3>quick links</h3>
        <a href="#home">home</a>
        <a href="#category">category</a>
        <a href="#product">product</a>
        <a href="#deal">deal</a>
        <a href="#contact">contact</a>
    </div>
    <div className="box">
        <h3>follow us</h3>
        <a href="https://www.facebook.com/saumansa" target='_blank'>facebook</a>
        <a href="#">twitter</a>
        <a href="#">instagram</a>
        <a href="https://www.youtube.com/@attractiveagriculture6256" target='_blank'> You Tube</a>
    </div>

</div>
<a href="#home" className="scroll-top fas fa-angle-up"></a>

<h1 className="credit"> created by <span> Attractive Agriculture </span> | all rights reserved! </h1>

</section>

</>
  )
}
export default Footer;
