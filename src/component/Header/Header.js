import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
           <div className="shopName">
                <h1>Sotez Motsyo Bazar</h1>
           </div>
           <div>
             <nav>
               
                <Link to="/home">Home</Link>
                <Link to="/order">Orders</Link>
                <Link to="/admin">Admin</Link>
               
             </nav>
           </div>
        </div>
    );
};

export default Header;