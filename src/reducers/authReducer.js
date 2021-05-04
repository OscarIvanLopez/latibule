import { types } from "../types/types";

const initialState = {
    logged: false,
    user: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                logged: true,
            };

        case types.authSaveUserGithub:
            return {
                ...state,
                logged: true,
                user: action.payload,
            };

        default:
            return state;
    }
};
