import React from 'react'
import './deal.css'

function Deal() {
  return (
    <>
        <section class="deal" id="deal">

<h1 class="heading"> deal of the day </h1>

<div class="row">

    <div class="content">
        <h3 class="title">don't miss the deal</h3>
        <p>Plant Paradise Deals Await!

Explore exclusive offers on hand-picked plants. Limited-time specials, bundled delights, surprise flash sales, seasonal gems, and clearance treasures await. Join our Green Rewards Program for even more savings. Elevate your space with nature's finest. Act fast, quantities are limited. Happy gardening!</p>
        <div class="count-down">
            <div class="box">
                <h3 id="day">00</h3>
                <span>day</span>
            </div>
            <div class="box">
                <h3 id="hour">00</h3>
                <span>hour</span>
            </div>
            <div class="box">
                <h3 id="minute">00</h3>
                <span>minute</span>
            </div>
            <div class="box">
                <h3 id="second">00</h3>
                <span>second</span>
            </div>
        </div>
        <a href="#" class="btn">check out deals</a>
    </div>

    <div class="image">
        <img src="images/deal-img.jpg" alt=""/>
    </div>

</div>

</section>

    </>
  )
}
export default Deal;
