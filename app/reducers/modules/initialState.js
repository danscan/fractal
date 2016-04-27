import {
  Component,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { fromJS, Map } from 'immutable';

function createComponent(name, renderTree, propTypes, defaultProps) {
  // TODO: Somehow pass loadModule selector fn...?
  const loadModule = () => {};

  return class extends Component {
    static propTypes = propTypes;
    static defaultProps = defaultProps;
    static displayName = name;

    // (?)
    static getElementTree = (...args) => fromJS(renderTree(...args));

    render() {
      return renderTree(this.props, loadModule);
    }
  };
}

export default new Map({
  'app/index.js': {
    default: createComponent((props, loadModule) => ({
      displayName: 'Root',
      type: View,
      props: {
        style: loadModule('./styles').container,
        children: [
          {
            displayName: 'NavBar',
            type: View,
            props: {
              style: loadModule('./styles').navBar,
              children: [
                {
                  type: Text,
                  props: {
                    style: loadModule('./styles').navBarTitleLabel,
                    children: ['Talker'],
                  },
                },
              ],
            },
          },
          {
            displayName: 'Feed',
            type: ScrollView,
            props: {
              style: loadModule('./styles').feed,
              children: [
                {
                  displayName: 'Cell',
                  type: View,
                  props: {
                    style: loadModule('./styles').cell,
                    children: [
                      {
                        displayName: 'Author Info Section',
                        type: View,
                        props: {
                          style: loadModule('./styles').authorInfoSection,
                          children: [
                            {
                              displayName: 'Avatar Image',
                              type: View,
                              props: {
                                style: loadModule('./styles').authorAvatarImage,
                                children: [],
                              },
                            },
                            {
                              type: View,
                              props: {
                                style: loadModule('./styles').authorProfile,
                                children: [
                                  {
                                    type: Text,
                                    props: {
                                      style: loadModule('./styles').authorProfileNameLabel,
                                      children: ['James Corolla'],
                                    },
                                  },
                                  {
                                    type: Text,
                                    props: {
                                      style: loadModule('./styles').authorProfileUsernameLabel,
                                      children: ['@corolla'],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        displayName: 'Post Body',
                        type: Text,
                        props: {
                          style: loadModule('./styles').postBodyLabel,
                          children: [
                            'I hate how much I have to think.  I\'m more or less done with it.  I never want to have to think about anything again.',
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  displayName: 'Cell',
                  type: View,
                  props: {
                    style: loadModule('./styles').cell,
                    children: [
                      {
                        displayName: 'Author Info Section',
                        type: View,
                        props: {
                          style: loadModule('./styles').authorInfoSection,
                          children: [
                            {
                              displayName: 'Avatar Image',
                              type: View,
                              props: {
                                style: loadModule('./styles').authorAvatarImage,
                                children: [],
                              },
                            },
                            {
                              type: View,
                              props: {
                                style: loadModule('./styles').authorProfile,
                                children: [
                                  {
                                    type: Text,
                                    props: {
                                      style: loadModule('./styles').authorProfileNameLabel,
                                      children: ['Mariah Camry'],
                                    },
                                  },
                                  {
                                    type: Text,
                                    props: {
                                      style: loadModule('./styles').authorProfileUsernameLabel,
                                      children: ['@mcamry'],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        displayName: 'Post Body',
                        type: Text,
                        props: {
                          style: loadModule('./styles').postBodyLabel,
                          children: [
                            'My sister just got her car stolen when she was warming it up for work and the person left her a 98 Toyota Camry running in the street😭😭😂😂',
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        ...props,
      },
    })),
  },

  'app/styles.js': {
    default: StyleSheet.create({
      container: {
        flex: 1,
      },

      navBar: {},
      navBarTitleLabel: {},

      feed: {},
      feedContentContainer: {},

      cell: {},
      authorInfoSection: {},
      authorAvatarImage: {},
      authorProfile: {},
      authorProfileNameLabel: {},
      authorProfileUsernameLabel: {},
      postBodyLabel: {},
    }),
  },

  'app/selectors/post.js': {
    postBodyByPost(post) {
      return post.body;
    },
  },
});
