import { fromJS, Map } from 'immutable';
import { Text, ScrollView, View } from 'react-native';

export default new Map({
  'App': getSampleTree(),
});

function getSampleTree() {
  return fromJS({
    displayName: 'Root',
    type: View,
    props: {
      children: [
        {
          displayName: 'NavBar',
          type: View,
          props: {
            children: [
              {
                type: Text,
                props: {
                  children: [
                    'Talker',
                  ],
                  style: {
                    color: 'white',
                    fontFamily: 'Avenir',
                    fontSize: 18,
                  },
                },
              },
            ],
            style: {
              alignItems: 'center',
              backgroundColor: '#00b5ec',
              justifyContent: 'center',
              height: 48,
            },
          },
        },
        {
          displayName: 'Feed',
          type: ScrollView,
          props: {
            children: [
              {
                displayName: 'Cell',
                type: View,
                props: {
                  children: [
                    {
                      displayName: 'Author Info Section',
                      type: View,
                      props: {
                        children: [
                          {
                            displayName: 'Avatar Image',
                            type: View,
                            props: {
                              children: [],
                              style: {
                                backgroundColor: '#ccc',
                                borderRadius: 8,
                                marginRight: 10,
                                height: 50,
                                width: 50,
                              },
                            },
                          },
                          {
                            type: View,
                            props: {
                              children: [
                                {
                                  type: Text,
                                  props: {
                                    children: [
                                      'James Corolla',
                                    ],
                                    style: {
                                      color: '#333',
                                      fontFamily: 'Avenir',
                                      fontSize: 14,
                                      fontWeight: '600',
                                    },
                                  },
                                },
                                {
                                  type: Text,
                                  props: {
                                    children: [
                                      '@corolla',
                                    ],
                                    style: {
                                      color: '#666',
                                      fontFamily: 'Avenir',
                                      fontSize: 14,
                                    },
                                  },
                                },
                              ],
                              style: {},
                            },
                          },
                        ],
                        style: {
                          alignItems: 'center',
                          flexDirection: 'row',
                          marginBottom: 20,
                        },
                      },
                    },
                    {
                      displayName: 'Post Body',
                      type: Text,
                      props: {
                        children: [
                          'I hate how much I have to think.  I\'m more or less done with it.  I never want to have to think about anything again.',
                        ],
                        style: {
                          color: '#444',
                          fontFamily: 'Avenir',
                          fontSize: 14,
                        },
                      },
                    },
                  ],
                  style: {
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1,
                    padding: 20,
                  },
                },
              },
              {
                displayName: 'Cell',
                type: View,
                props: {
                  children: [
                    {
                      displayName: 'Author Info Section',
                      type: View,
                      props: {
                        children: [
                          {
                            displayName: 'Avatar Image',
                            type: View,
                            props: {
                              children: [],
                              style: {
                                backgroundColor: '#ccc',
                                borderRadius: 8,
                                marginRight: 10,
                                height: 50,
                                width: 50,
                              },
                            },
                          },
                          {
                            type: View,
                            props: {
                              children: [
                                {
                                  type: Text,
                                  props: {
                                    children: [
                                      'Mariah Camry',
                                    ],
                                    style: {
                                      color: '#333',
                                      fontFamily: 'Avenir',
                                      fontSize: 14,
                                      fontWeight: '600',
                                    },
                                  },
                                },
                                {
                                  type: Text,
                                  props: {
                                    children: [
                                      '@mcamry',
                                    ],
                                    style: {
                                      color: '#666',
                                      fontFamily: 'Avenir',
                                      fontSize: 14,
                                    },
                                  },
                                },
                              ],
                              style: {},
                            },
                          },
                        ],
                        style: {
                          alignItems: 'center',
                          flexDirection: 'row',
                          marginBottom: 20,
                        },
                      },
                    },
                    {
                      displayName: 'Post Body',
                      type: Text,
                      props: {
                        children: [
                          'My sister just got her car stolen when she was warming it up for work and the person left her a 98 Toyota Camry running in the street😭😭😂😂',
                        ],
                        style: {
                          color: '#444',
                          fontFamily: 'Avenir',
                          fontSize: 14,
                        },
                      },
                    },
                  ],
                  style: {
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1,
                    padding: 20,
                  },
                },
              },
            ],
            style: {
              flex: 1,
            },
          },
        },
      ],
      style: {
        backgroundColor: 'white',
        flex: 1,
      },
    },
  });
}
