import React from 'react-native';
import ReactComponent from './reactComponent';

// -- MODEL
export function init(props) {
  return props;
}


// -- UPDATE
export function update(state) {
  return state;
}


// -- VIEW
export function view(props) {
  return <ReactComponent {...props}/>;
}

export default ReactComponent;
