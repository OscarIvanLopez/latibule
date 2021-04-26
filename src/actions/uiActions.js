import { types } from "../types/types";

export const startShowSidebar = () => ({
  type: types.uiShowSidebar,
});

export const startHideSidebar = () => ({
  type: types.uiHideSidebar,
});
