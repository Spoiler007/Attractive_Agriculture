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
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem eligendi repudiandae
            pariatur. Aut, esse molestias laborum sunt reprehenderit repellat officiis aspernatur consequatur
            nemo! Veritatis, ex architecto! Eligendi, iste nulla.</p>
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
