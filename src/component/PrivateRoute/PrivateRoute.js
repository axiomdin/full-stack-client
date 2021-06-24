import { useContext  } from 'react';
import { Redirect, Route } from 'react-router';
import * as firebase from "firebase/app"
import { UserContext } from '../../App';

const PrivateRoute = ({children , ...rest}) => {
    const [ loggedInUser , setLoggedInUser ] = useContext(UserContext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;