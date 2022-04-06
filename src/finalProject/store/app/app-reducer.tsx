import {
  AppActionType,
  AppStateType,
} from 'finalProject/store/app/types';

const initialState: AppStateType = {
  status: 'idle',
  isInitialized: false,
};

export const appReducer = (
  state: AppStateType = initialState,
  action: AppActionType,
): AppStateType => {
  switch (action.type) {
    case 'APP/SET_STATUS':
    case 'APP/SET_INITIALIZED':
      return { ...state, ...action.payload };
    default: {
      return state;
    }
  }
};
