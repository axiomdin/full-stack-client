import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './ManageProduct.css'

const ManageProduct = () => {

    const [products , setProducts  ] = useState([]) 
    
    useEffect(() => {
      fetch('https://young-beyond-69977.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])  
      

    const handledelete = (id) =>{
        fetch(`https://young-beyond-69977.herokuapp.com/deleteProduct/${id}`, {
            method:"DELETE",
            headers:{"Content-Type" : "application/json"}
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }



    return (
        <div className="mngpd">
          <div className="adminOption" >
              <h4 style={{Color : "White"}}>AMOS ADMIN TROUPE</h4>
            <nav>
                <br/>
                <Link to="/manageProduct">Manage Product </Link>
                <br/>
                <br />
                <Link to="/addProduct">Add Product</Link>
             </nav>   
           </div> 

            <div>
                {
                products.map(pd => 
                <div className="pd">
                    <div className="pdname">
                      <h1>{pd.name }</h1>
                    </div>
                    
                    
                    <button onClick={() =>handledelete(pd._id)} >Delete</button>

                 </div>)
                 }
            </div>
        </div>
    );
};

export default ManageProduct;