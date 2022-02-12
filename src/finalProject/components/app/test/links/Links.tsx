import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from "../../project/Project";

export const Links = () => {
   return (
      <div>
         <ul>
            <li>
               <NavLink to={PATH.LOGIN}>
                  Login
               </NavLink>
            </li>
            <li>
               <NavLink to={PATH.REGISTRATION}>
                  Registration
               </NavLink>
            </li>
            <li>
               <NavLink to={PATH.PROFILE}>
                  Profile
               </NavLink>
            </li>
            <li>
               <NavLink to={PATH.NOT_FOUND}>
                  404
               </NavLink>
            </li>
            <li>
               <NavLink to={PATH.PASSWORD_RECOVERY}>
                  Password recovery
               </NavLink>
            </li>
            <li>
               <NavLink to={PATH.ENTERING_NEW_PASSWORD}>
                  Entering new password
               </NavLink>
            </li>
         </ul>
      </div>
   );
};