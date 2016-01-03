// Component
// # object propTypes!
// # object defaultProps
// ? ref
// - Lifecycle Methods
//   - shouldComponentUpdate(object nextProps, object nextState) => (this.props !== nextProps || this.state !== nextState)
// - Custom Methods?
// - render({ props, state }) => (Component)!
//
// Could model lifecycle events and user interaction events and their side effects?
// (e.g., SearchButton.onPress ... call some custom method OR some system/external side-effect?
// - Component Lifecycle Events
//   - will mount ()
//   - did mount ()
//   - will receive props ({ object nextProps })
//   - will update ({ object nextProps, object nextState })
//   - did update ({ object prevProps, object prevState })
//   - will unmount ()
// - User Interaction Events (example)
//   - press () ... system: send sms
//   - change text (string newText) ... set state {...}
//   - change selection (any newSelectionValue) ... set state {...}
const Component = {
  constructor: {
    fragments: {
      getInitialState: (props) => ({}),
    },
  },
  statics: {
    propTypes: {}, // Should only accept children if in propTypes...
    defaultProps: {},
  },
  container: {
    redux: {
      mapStateToProps: (state, ownProps) => ({ ...ownProps, ...selector(state), }),
      mapDispatchToProps: {}, // action creators object
    },
    relay: {
      fragments: {},
      mutations: {},
    },
  },
  lifecycleSideEffects: {
    willMount: () => {},
    didMount: () => {},
    willReceiveProps: (nextProps) => {},
    willUpdate: (nextProps, nextState) => {},
    didUpdate: (prevProps, prevState) => {},
    willUnmount: () => {},
  },
  methods: {},
  render: () => {}, // need to explicity render Relay.Container w/ explicity-specified Relay.Route in some ancestor in order for container.relay to work on this Component
};

// Getting a React Component from component data representation...
function getReactNativeComponent(component) {
  class Component extends React.Component {
    static propTypes = component.statics.propTypes;
    static defaultProps = component.statics.defaultProps;

    constructor(...args) {
      super(...args);

      const [props] = args;

      this.state = component.constructor.fragments.getInitialState(props);
    }

    componentWillMount() {
      return component.lifecycleSideEffects.willMount();
    }

    componentDidMount() {
      return component.lifecycleSideEffects.didMount();
    }

    componentWillReceiveProps(nextProps) {
      return component.lifecycleSideEffects.willReceiveProps(nextProps);
    }

    componentWillUpdate(nextProps, nextState) {
      return component.lifecycleSideEffects.willUpdate(nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
      return component.lifecycleSideEffects.didUpdate(prevProps, prevState);
    }

    componentWillUnmount() {
      return component.lifecycleSideEffects.willUnmount();
    }

    // (?) What about (custom) methods?

    render() {
      // How will UI tree / expression be encoded?
      return (null);
    }
  }

  // What about Relay?
  return connect(component.container.redux.mapStateToProps, component.container.redux.mapDispatchToProps)(Component);
}
