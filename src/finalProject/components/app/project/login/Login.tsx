import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../Project";

export const Login = () => {
   return (
      <div>
         Login
         <NavLink to={PATH.HOME}>
            Home
         </NavLink>
      </div>
   );
};

