import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../../../n2-features/f1-auth/a1-login/Login";
import Registration from "../../../n2-features/f1-auth/a2-register/Registration";
import Profile from "../../../n2-features/f2-profile/Profile";
import ErrorPage from "../../../n2-features/f3-error-page/ErrorPage";
import PasswordRecovery from "../../../n2-features/f1-auth/a5-password-recovery/passwordRecowery/PasswordRecovery";
import ProfileEdit from '../../../n2-features/f2-profile/ProfileEdit';
import s from './routes.module.css'
import {useSelector} from "react-redux";
import {CreateNewPassword} from "../../../n2-features/f1-auth/a6-createNewPassword/CreateNewPassword";
import {CheckEmail} from "../../../n2-features/f1-auth/a5-password-recovery/checkEmail/CheckEmail";
import {AppRootStateType} from "../../m2-bll/a1-redux-store/store";
import {PackContainer} from "../../../n2-features/f4-pack/PackContainer";
import {PacksList} from "../../../n2-features/packsList/PacksList";
import {Question} from "../../../n2-features/f6-question/Question";

export const path = {
  login: '/login',
  registration: '/registration',
  profile: '/profile',
  profileEdit: '/profile-edit',
  errorPage: '/404',
  passwordRecovery: '/password-recovery',
  checkEmail: '/check-email',
  newPassword: '/new-password/:token',
  cards: '/cards/:packID',
  packList: '/pack-list',
  question: '/question/:packID'
}


const RoutesComponent = () => {
  const isLoggedIn = useSelector((state: AppRootStateType) => state.login.isLoggedIn)

  return (<div className={s.wrapp}>
      <Routes>
        <Route path={'/'} element={!isLoggedIn ? <Navigate to={path.login}/> : <Navigate to={path.profile}/>}/>
        <Route path={path.login} element={<Login/>}/>
        <Route path={path.registration} element={<Registration/>}/>
        <Route path={path.profile} element={<Profile/>}/>
        <Route path={path.cards} element={<PackContainer/>}/>
        <Route path={path.profileEdit} element={<ProfileEdit/>}/>
        <Route path={path.errorPage} element={<ErrorPage/>}/>
        <Route path={path.passwordRecovery} element={<PasswordRecovery/>}/>
        <Route path={path.checkEmail} element={<CheckEmail/>}/>
        <Route path={path.newPassword} element={<CreateNewPassword/>}/>
        <Route path={path.packList} element={<PacksList/>}/>
        <Route path={path.question} element={<Question/>}/>
      </Routes>
    </div>
  );
};

export default RoutesComponent;