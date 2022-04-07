import {
  RegistrationActionType,
  RegistrationStateType,
} from 'finalProject/store/registration/Types';

const initialState: RegistrationStateType = {
  isRegistration: null,
};

export const registrationReducer = (
  state: RegistrationStateType = initialState,
  action: RegistrationActionType,
): RegistrationStateType => {
  switch (action.type) {
    case 'registrationReducer/IS-REGISTRATION':
      return {
        ...state,
        ...action.payload,
      };
    default: {
      return state;
    }
  }
};
