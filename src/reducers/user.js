import { USER_LOAD, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from '../actions/user';

const initialState = {
    isAuthenticated: false,
    info: null,
    firebaseId: null,
    signUp_token: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case USER_LOAD:
            return {
                ...state,
                isAuthenticated: true,
                info: action.info,
            };
        case USER_LOGIN:
            return {
                ...state,
                info: action.info,
            };
        case USER_LOGOUT:
            return {
                ...state,
                info: null,
            };
        case USER_REGISTER:
            return {
                ...state,
                signUp_token: action.signUp_token,
            };
        default:
            return state;
    }
};

export default [reducer, initialState];
