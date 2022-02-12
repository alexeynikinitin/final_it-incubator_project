import React from 'react';
import {PATH} from "../Project";
import {NavLink} from "react-router-dom";

export const NotFound = () => {
   return (
      <div>
         Not Found
         <NavLink to={PATH.HOME}>
            Home
         </NavLink>
      </div>
   );
};