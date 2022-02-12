import React from 'react';
import {PATH} from "../Project";
import {NavLink} from "react-router-dom";

export const Profile = () => {
   return (
      <div>
         Profile
         <NavLink to={PATH.HOME}>
            Home
         </NavLink>
      </div>
   );
};