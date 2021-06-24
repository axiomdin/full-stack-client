import { useState,useContext  } from 'react';
import  firebase from "firebase/app"
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import img from './Group 573.png'



firebase.initializeApp(firebaseConfig);



const Login = () => {
 
 const [ loggedInUser , setLoggedInUser ] = useContext(UserContext)
 const history = useHistory();
 const location = useLocation();
 
 let { from } = location.state || { from: { pathname: "/" } };
 
  const [user ,setUser] = useState({})
  var  provider = new firebase.auth.GoogleAuthProvider();
  
  
  const handleGoogleSignIn = () =>{

    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;

    var token = credential.accessToken;
    var user = result.user;
    console.log(user,token)
    setUser(user)
    setLoggedInUser(user)
    history.replace(from)
   
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode,errorMessage,email,credential)
  });

  }
  return (
    <div className="login">
      <h1>Login your email</h1>
      <button className="loginBtn" onClick={handleGoogleSignIn}> <img src={img} alt=""/> <span className="btnName"> Google Sign in </span></button>
     </div>
  );
};

export default Login;