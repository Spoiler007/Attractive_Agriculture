import React, { Component } from 'react';
import {useState} from 'react'
import './home.css';
import ImageSlider from '../ImageSlider';
import img1 from "../images/slider1.jpg"
import img2 from "../images/slider2.jpg"
import img3 from "../images/slider3.jpg"



const Home20 = () => {

    const slides = [
        {url:(img1)},
        {url:{img2}},
        {url:{img3}}
    ];
    const containerStyles = {
        width:"500px",
        height:"280px",
        margin:"0 auto",

    };
  return (
    <>
    <div style={containerStyles}>
        <ImageSlider slides={slides}/>
        </div>
    </>
  )
}
export default Home20;
