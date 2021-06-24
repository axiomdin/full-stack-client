import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://young-beyond-69977.herokuapp.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])



    
    const handleOrderAdd = () => {
        const {name , price } = product;
        const newUser = {
            productName : name,
            productPrice : price,
        }
        newUser.userName = loggedInUser.displayName;
        newUser.email = loggedInUser.email;
        newUser.date = new Date();


        fetch('https://young-beyond-69977.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        }



    return (
        <div>

            <div>
                <div className="Order">
                    <h1>{product.name}</h1>
                    <h1>Quantity : 1 </h1>
                    <h1>{product.price}</h1>

                </div>
                 <h1 className="total">Total:{product.price}</h1>
                  <button className="btn" onClick={handleOrderAdd}>CheckOut</button>
                 

            </div>

        </div>
    );
};

export default Checkout;