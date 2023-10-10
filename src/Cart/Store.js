import React from 'react'
import Product from '../Product/Product';
import Itemcard from './Itemcard';
import Data from "./Data"
import prod7 from "../images/product7.jpg"

const Addtocart = () => {
  console.log(Data.productData);
  return (
    <div className='store'>
    <h1 >All Items</h1>
    <hr/>
{/* <Product/> */}
<section className="box-container">
{Data.productData.map((item,index)=>{
  return(
  <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
  )
  })}
  </section>
    </div>
  )
}

export default Addtocart;