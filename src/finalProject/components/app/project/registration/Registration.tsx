import React from 'react';
import {PATH} from "../Project";
import {NavLink} from "react-router-dom";

export const Registration = () => {
   return (
      <div>
         Registration
         <NavLink to={PATH.HOME}>
            Home
         </NavLink>
      </div>
   );
};