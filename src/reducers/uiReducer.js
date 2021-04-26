import { types } from "../types/types";

const initialState = {
  toggleSidebar: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiShowSidebar:
      return {
        ...state,
        toggleSidebar: true,
      };

    case types.uiHideSidebar:
      return {
        ...state,
        toggleSidebar: null,
      };

    default:
      return state;
  }
};
