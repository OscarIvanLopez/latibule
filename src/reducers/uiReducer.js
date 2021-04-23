import { types } from "../types/types";


export const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case types.uiError:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
