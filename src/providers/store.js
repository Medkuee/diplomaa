import React, {createContext, useReducer} from 'react';

const initialState = {
  isAuthenticated: false,
  info: {
    token: null,
    avatar: null,
  },
  signUp_token: null,
  isLoading: false,
  reset_token: null,
  alert: {
    isAlert: false,
    message: '',
    buttonText: 'OK',
    textWidth: 200,
    onClose: null,
  },
  isSending: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'user_load':
      return {
        ...state,
        isAuthenticated: true,
      };
  }
};

const GlobalContext = createContext(initialState);
const ContextState = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export {GlobalContext, ContextState};
