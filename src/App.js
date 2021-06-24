import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import { createContext,useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
} from "react-router-dom";
import Checkout from './component/Cheackout/Checkout';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Admin from './component/Admin/Admin';
import AddProduct from './component/AddProduct/AddProduct'
import ManageProduct from './component/ManageProduct/ManageProduct';
import Order from './component/Order/Order';

export const UserContext = createContext();


function App() {
  const [loggedInUser , setLoggedInUser ] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h1>{loggedInUser.displayName}</h1>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/manageProduct">
            <ManageProduct></ManageProduct>
          </Route>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
