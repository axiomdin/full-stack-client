import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddProduct.css'



const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)


    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }
        const url = `https://young-beyond-69977.herokuapp.com/addProducts`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
    }

    const handleImageUpload = (event) => {
        console.log(event.target.files)
        const imageData = new FormData();
        imageData.set('key', 'a74cc74461c75e4d1096a74a2468333e')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    return (
        <div className="admin">
            <div className="adminOption" >
            <h4 style={{Color : "White"}}>AMOS ADMIN TROUPE</h4>
                <nav>
                    <br />
                   <Link to="/manageProduct">Manage Product</Link>
                   <br />
                   <br />
                    <Link to="/addProduct">Add Product</Link>
                </nav>
            </div>

            <div className="adminPage">
                <h1>Add Products</h1>
                <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" defaultValue="Product Name " ref={register} />

                    <br />

                    <input name="price" type="text" ref={register} />

                    <br />
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                    <br />
                    <input type="submit" />
                </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;