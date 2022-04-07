import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';

import errorReducer, { ErrorActionType } from '../a2-reducers/error-reducer';
import { PackListActionsType, packListReducer } from '../a2-reducers/pack-list-reducer';
import profileReducer, {
  ProfileReducerActionsType,
} from '../a2-reducers/profile-reducer';
import { questionReducer } from '../a2-reducers/question-reduser';

import { appReducer } from 'finalProject/store/app/app-reducer';
import { AppActionType } from 'finalProject/store/app/types';
import { cardsReducer } from 'finalProject/store/cards/cards-reducer';
import { CardsReducerActionsType } from 'finalProject/store/cards/types';
import { loginReducer } from 'finalProject/store/login/login-reducer';
import { LoginActionsType } from 'finalProject/store/login/types';
import { newPasswordReducer } from 'finalProject/store/newPassword/newPassword-reducer';
import { NewPasswordActionType } from 'finalProject/store/newPassword/Types';
import { passwordRecoveryReducer } from 'finalProject/store/passwordRecovery/passwordRecovery-reducer';
import { PasswordRecoveryActionType } from 'finalProject/store/passwordRecovery/Types';
import { registrationReducer } from 'finalProject/store/registration/registration-reducer';
import { RegistrationActionType } from 'finalProject/store/registration/Types';

const rootReducer = combineReducers({
  app: appReducer,
  cards: cardsReducer,
  login: loginReducer,
  newPassword: newPasswordReducer,
  registration: registrationReducer,
  passwordRecovery: passwordRecoveryReducer,
  profile: profileReducer,
  error: errorReducer,
  packList: packListReducer,
  questionReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>;

// AppActionsType
export type AppRootActionsType =
  | AppActionType
  | CardsReducerActionsType
  | ErrorActionType
  | LoginActionsType
  | NewPasswordActionType
  | PackListActionsType
  | PasswordRecoveryActionType
  | ProfileReducerActionsType
  | RegistrationActionType;

// thunk type
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppRootActionsType
>;
