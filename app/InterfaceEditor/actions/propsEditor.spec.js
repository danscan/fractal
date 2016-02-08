/* global define, it, describe */
import expect from 'expect';
import {
  setPropSectionExpanded,
  setPropInputType,
} from './propsEditor';
import {
  SET_PROP_SECTION_EXPANDED,
  SET_PROP_INPUT_TYPE,
} from '../constants/actionTypes';

describe('interface editor: propsEditor action creators', () => {
  it('should create an action to set prop section expanded', () => {
    const propName = 'style';
    const expanded = true;
    const expectedAction = {
      type: SET_PROP_SECTION_EXPANDED,
      propName,
      expanded,
    };

    expect(
      setPropSectionExpanded(propName, expanded)
    ).toEqual(expectedAction);
  });

  it('should create an action to set prop input type', () => {
    const propName = 'style';
    const propInputType = 'Object';
    const expectedAction = {
      type: SET_PROP_INPUT_TYPE,
      propName,
      propInputType,
    };

    expect(
      setPropInputType(propName, propInputType)
    ).toEqual(expectedAction);
  });
});
