import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name , price, imageURL ,_id} = props.product
//    / console.log(product)
 
    return (
        <div className="product">
            <div className="productimg">

                <img src={imageURL}alt="" />

            </div>
         <div className="namebtn" >
            <div className="productName">
              
                <h4 className="name">{name}</h4>
                
                <h6 className="price">BDT: {price}</h6>
            </div>
             <div>
             <Link to={`/checkout/${_id}`}><button className="button">Buy Now</button></Link>
             </div>
         </div>
            
        </div>
    );
};

export default Product;