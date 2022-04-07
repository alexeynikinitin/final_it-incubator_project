import {
  PasswordRecoveryActionType,
  PasswordRecoveryStateType,
} from 'finalProject/store/passwordRecovery/Types';

const initialPasswordRecoveryState: PasswordRecoveryStateType = {
  isEmailSend: false,
  email: 'bla bla',
  isLoading: false,
};

export const passwordRecoveryReducer = (
  state: PasswordRecoveryStateType = initialPasswordRecoveryState,
  action: PasswordRecoveryActionType,
): PasswordRecoveryStateType => {
  switch (action.type) {
    case 'passwordRecovery/SET-IS-EMAIL-SEND':
      return {
        ...state,
        ...action.payload,
      };
    default: {
      return state;
    }
  }
};
