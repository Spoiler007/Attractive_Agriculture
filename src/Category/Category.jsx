import React from 'react'
import './catagory.css'
import Cat1 from "../images/cat1.jpg"
import Cat2 from "../images/cat2.jpg"
import Cat3 from "../images/cat3.jpg"
import Cat4 from "../images/cat4.jpg"

function Category() {
    return (
        <>
            <section className="category" id="category">

                <h1 className="heading"> shop by category </h1>

                <div className="box-container">

                    <div className="box">
                        <img src={Cat1} alt="" />
                        <div className="content">
                            <h3>bonsai</h3>
                            <a href="#" className="category-btn">shop now</a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Cat2} alt="" />
                        <div className="content">
                            <h3>plants for house</h3>
                            <a href="#" className="category-btn">shop now</a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Cat3} alt="" />
                        <div className="content">
                            <h3>plants for office</h3>
                            <a href="#" className="category-btn">shop now</a>
                        </div>
                    </div>
                    <div class="box">
                        <img src={Cat4} alt="" />
                        <div className="content">
                            <h3>gift plants</h3>
                            <a href="#" className="category-btn">shop now</a>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
export default Category;
