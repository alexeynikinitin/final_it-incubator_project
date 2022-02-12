import React from 'react';
import {PATH} from "../Project";
import {NavLink} from "react-router-dom";

export const EnteringNewPassword = () => {
   return (
      <div>
         Entering New Password
         <NavLink to={PATH.HOME}>
            Home
         </NavLink>
      </div>
   );
};