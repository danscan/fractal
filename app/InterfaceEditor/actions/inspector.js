import { SET_SELECTED_INSPECTOR_TAB } from '../constants/actionTypes';

export function setSelectedTab(selectedTab) {
  return {
    type: SET_SELECTED_INSPECTOR_TAB,
    selectedTab,
  };
}
