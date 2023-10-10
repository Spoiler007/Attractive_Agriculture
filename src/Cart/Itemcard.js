import React from 'react'
import './store.css'
import { useCart } from 'react-use-cart'

const Itemcard = (props) => {
const {addItem} = useCart();

  return (

<div className="box">
        <span className="discount">-13%</span>
        <div class="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-share"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <img src={props.img} alt=""/>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <div className="quantity">
            <span> quantity : </span>
            <input type="number" min="1" max="100" value="1"/>
        </div>
        <div className="price">${props.price}<span>$18.20</span></div>
        <button onClick={()=>addItem(props.item)} className="prod-btn">add to cart</button>
    </div>
    
  )
}

export default Itemcard;