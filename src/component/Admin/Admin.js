import { Link } from 'react-router-dom';

import './Admin.css'
const Admin = () => {
  

    return (
        <div className="admin">
            <div className="adminOption" >
            <h4 style={{Color : "White"}}>AMOS ADMIN TROUPE</h4>
            <nav>
                <br/>
                <Link className="link" to="/manageProduct">Manage Product</Link>
                <br/>
                <br />
                <Link className="link" to="/addProduct">Add Product</Link>
             </nav>   
            </div>    
            <div className="adminPage">
                 <h1>Admin page</h1>
                 
            </div>
        </div>
    );
};

export default Admin;