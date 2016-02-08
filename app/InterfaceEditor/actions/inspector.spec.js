/* global define, it, describe */
import expect from 'expect';
import { setSelectedTab } from './inspector';
import { SET_SELECTED_INSPECTOR_TAB } from '../constants/actionTypes';

describe('interface editor: inspector action creators', () => {
  it('should create an action to set selected inspector tab', () => {
    const selectedTab = 0;
    const expectedAction = {
      type: SET_SELECTED_INSPECTOR_TAB,
      selectedTab,
    };

    expect(
      setSelectedTab(selectedTab)
    ).toEqual(expectedAction);
  });
});
