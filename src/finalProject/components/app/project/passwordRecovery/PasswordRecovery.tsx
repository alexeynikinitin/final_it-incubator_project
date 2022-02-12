import React from 'react';
import {PATH} from "../Project";
import {NavLink} from "react-router-dom";

export const PasswordRecovery = () => {
   return (
      <div>
         Password Recovery
         <NavLink to={PATH.HOME}>
            Home
         </NavLink>
      </div>
   );
};