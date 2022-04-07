import {
  NewPasswordActionType,
  NewPasswordStateType,
} from 'finalProject/store/newPassword/Types';

const initialNewPasswordState: NewPasswordStateType = {
  isSetNewPassword: false,
};

export const newPasswordReducer = (
  state: NewPasswordStateType = initialNewPasswordState,
  action: NewPasswordActionType,
): NewPasswordStateType => {
  switch (action.type) {
    case 'newPasswordReducer/SET-IS-SET-NEW-PASSWORD':
      return {
        ...state,
        ...action.payload,
      };
    default: {
      return state;
    }
  }
};
