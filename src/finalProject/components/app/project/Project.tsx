import React from 'react';
import {Login} from "./login/Login";
import {Registration} from "./registration/Registration";
import {Profile} from "./profile/Profile";
import {Navigate, Route, Routes} from 'react-router-dom';
import {NotFound} from "./notFound(404)/NotFound";
import {PasswordRecovery} from "./passwordRecovery/PasswordRecovery";
import {EnteringNewPassword} from "./enteringNewPassword/EnteringNewPassword";
import App from "../App";
import {Test} from "../test/Test";

export const PATH = {
   HOME: '/home',
   LOGIN: '/login',
   REGISTRATION: '/registration',
   PROFILE: '/profile',
   NOT_FOUND: '/404',
   PASSWORD_RECOVERY: '/password-recovery',
   ENTERING_NEW_PASSWORD: '/entering-new-password',
}

export const Project = () => {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Navigate replace to={PATH.HOME}/>}/>
            <Route path={PATH.HOME} element={<Test/>}/>
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.REGISTRATION} element={<Registration/>}/>
            <Route path={PATH.PROFILE} element={<Profile/>}/>
            <Route path={PATH.NOT_FOUND} element={<NotFound/>}/>
            <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
            <Route path={PATH.ENTERING_NEW_PASSWORD} element={<EnteringNewPassword/>}/>
         </Routes>
      </div>
   );
};