import React, { PropTypes } from 'react-native';

// (Prop type constants)
const componentPropType = PropTypes.shape({
  init: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  view: PropTypes.func.isRequired,
});

export default class Runner extends React.Component {
  static propTypes = {
    Component: componentPropType.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      state: props.Component.init(),
    };
  }

  dispatch(action) {
    const { Component } = this.props;
    const { state } = this.state;
    const nextState = Component.update(state, action);

    this.setState({ state: nextState });
    return nextState;
  }

  render() {
    const { Component } = this.props;

    return (
      <Component.view
        {...this.state}
        dispatch={action => this.dispatch(action)}
      />
    );
  }
}
