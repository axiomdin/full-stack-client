import {useState, useEffect, useContext} from 'react';
import { UserContext } from '../../App';
import './Order.css'

const Order = () => {
    const [orders , setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    useEffect(() => {
        fetch('https://young-beyond-69977.herokuapp.com/order?email='+loggedInUser.email)
          .then(res => res.json())
          .then(data => setOrder(data) )
    }, [])


    return (
        <div>
            <h3>you have :{orders.length} </h3>
            {
                orders.map(order => 
                <div className="orderList">
                    <h1> User:{order.userName} </h1>
                    <h3> Product: {order.productName} </h3>
                    <p>  {(new Date(order.date).toDateString('dd/MM/yyyy'))} </p> 
                </div>)
            }
        </div>
    );
};

export default Order;