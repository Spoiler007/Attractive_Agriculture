import React from 'react'
import './banner.css'
import banner1 from "../images/banner1.jpg"
import banner2 from "../images/banner2.jpg"




function Banner () {
    return (
        <>
            <section className="banner-container">

                <div className="banner">
                    <img src={banner1} alt=""/>
                        <div className="banner-content">
                            <span>new arrivals</span>
                            <h3>house plants</h3>
                            <a href="#" className="btn">shop now</a>
                        </div>
                </div>
                <div className="banner">
                    <img src={banner2} alt=""/>
                        <div className="banner-content">
                            <span>new arrivals</span>
                            <h3>office plants</h3>
                            <a href="#" className="btn">shop now</a>
                        </div>
                </div>

            </section>
        </>

    )
}
export default Banner;
