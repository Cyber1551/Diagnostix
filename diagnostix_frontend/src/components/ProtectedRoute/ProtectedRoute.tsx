import { PinDropSharp } from "@material-ui/icons";
import React, { Component, FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

export interface IProtectedRoute {
  component: FC;
  path:string;
}

const ProtectedRoute: FC<IProtectedRoute> = ({ component: Component, ...rest }) => {
    const {isLoggedIn} = useUserContext();

    return (
      <Route {...rest} render={props => 
          isLoggedIn() ? <Component {...rest} {...props} /> : <Redirect to='/login' />
        } />
    );
}
      
export default ProtectedRoute;