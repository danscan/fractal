import { reducer as formReducer } from 'redux-form/native';

export default function form(state, action) {
  switch (action.type) {
    default:
      return formReducer(state, action);
  }
}
