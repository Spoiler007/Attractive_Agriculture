import React from 'react'
import './icon.css'
import Icon1 from "../images/icon1.png"
import Icon2 from "../images/icon2.png"
import Icon3 from "../images/icon3.png"
import Icon4 from "../images/icon4.png"

function Icon() {
  return (
    <>
        <section className="icons-container">

<div className="icon">
    <img src={Icon1} alt=""/>
    <div className="content">
        <h3>free shipping</h3>
        <p>Free shipping on order</p>
    </div>
</div>
<div className="icon">
    <img src={Icon2} alt=""/>
    <div className="content">
        <h3>100% Money Back</h3>
        <p>You’ve 30 days to Return</p>
    </div>
</div>
<div className="icon">
    <img src={Icon3} alt=""/>
    <div className="content">
        <h3>Payment Secure</h3>
        <p>100% secure payment</p>
        <p>paytm, google pay, phonepay, upi</p>
    </div>
</div>
<div className="icon">
    <img src={Icon4} alt=""/>
    <div className="content">
        <h3>Support 24/7</h3>
        <p>Contact us anytime</p>
    </div>
</div>

</section>
    </>
  )
}
export default Icon;
