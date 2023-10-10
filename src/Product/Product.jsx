import React from 'react'
import './product.css'
import Prod1 from "../images/product1.jpg"
import Prod2 from "../images/product2.jpg"
import Prod3 from "../images/product3.jpg"
import Prod4 from "../images/product4.jpg"
import Prod5 from "../images/product5.jpg"
import Prod6 from "../images/product6.jpg"

function Product() {
    return (
        <>

            <section className="product" id="product">

                <h1 className="heading"> new products </h1>

                <div className="box-container">

                    <div className="box">
                        <span className="discount">-10%</span>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <img src={Prod1} alt="" />
                        <h3>latest plants</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="quantity">
                            <span> quantity : </span>
                            <input type="number" min="1" max="100" value="1" />
                        </div>
                        <div className="price">$14.70 <span>$18.20</span></div>
                        <a href="#" className="btn">add to cart</a>
                    </div>

                    <div className="box">
                        <span className="discount">-25%</span>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <img src={Prod2} alt="" />
                        <h3>latest plants</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="quantity">
                            <span> quantity : </span>
                            <input type="number" min="1" max="100" value="1" />
                        </div>
                        <div className="price">$14.70 <span>$18.20</span></div>
                        <a href="#" className="btn">add to cart</a>
                    </div>

                    <div className="box">
                        <span className="discount">-7%</span>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <img src={Prod3} alt="" />
                        <h3>latest plants</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="quantity">
                            <span> quantity : </span>
                            <input type="number" min="1" max="100" value="1" />
                        </div>
                        <div className="price">$14.70 <span>$18.20</span></div>
                        <a href="#" className="btn">add to cart</a>
                    </div>

                    <div className="box">
                        <span className="discount">-4%</span>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <img src={Prod4} alt="" />
                        <h3>latest plants</h3>
                        <div class="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="quantity">
                            <span> quantity : </span>
                            <input type="number" min="1" max="100" value="1" />
                        </div>
                        <div className="price">$14.70 <span>$18.20</span></div>
                        <a href="#" className="btn">add to cart</a>
                    </div>

                    <div className="box">
                        <span className="discount">-13%</span>
                        <div class="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <img src={Prod5} alt="" />
                        <h3>latest plants</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="quantity">
                            <span> quantity : </span>
                            <input type="number" min="1" max="100" value="1" />
                        </div>
                        <div className="price">$14.70 <span>$18.20</span></div>
                        <a href="#" className="btn">add to cart</a>
                    </div>

                    <div className="box">
                        <span className="discount">-20%</span>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <img src={Prod6} alt="" />
                        <h3>latest plants</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="quantity">
                            <span> quantity : </span>
                            <input type="number" min="1" max="100" value="1" />
                        </div>
                        <div className="price">$14.70 <span>$18.20</span></div>
                        <a href="#" className="btn">add to cart</a>
                    </div>

                </div>

            </section>
        </>
    )
}
export default Product;
