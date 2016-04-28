import { fromJS } from 'immutable';
import { Text, ScrollView, View } from 'react-native';
import elementByType from '../../utils/elementByType';

const navBar = elementByType(View, fromJS({
  children: [
    elementByType(Text, fromJS({
      children: ['Talker'],
      style: {
        color: 'white',
        fontFamily: 'Avenir',
        fontSize: 18,
      },
    })),
  ],
  style: {
    alignItems: 'center',
    backgroundColor: '#00b5ec',
    justifyContent: 'center',
    height: 48,
  },
}), 'NavBar');

const cell = ({ name, username, body }) => elementByType(View, fromJS({
  children: [
    elementByType(View, fromJS({
      children: [
        elementByType(View, fromJS({
          style: {
            backgroundColor: '#ccc',
            borderRadius: 8,
            marginRight: 10,
            height: 50,
            width: 50,
          },
        }), 'Avatar Image'),
        elementByType(View, fromJS({
          children: [
            elementByType(Text, fromJS({
              children: [name],
              style: {
                color: '#333',
                fontFamily: 'Avenir',
                fontSize: 14,
                fontWeight: '600',
              },
            })),
            elementByType(Text, fromJS({
              children: [username],
              style: {
                color: '#666',
                fontFamily: 'Avenir',
                fontSize: 14,
              },
            })),
          ],
        }), 'Author Profile Info'),
      ],
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
      },
    }), 'Author Info Section'),
    elementByType(Text, fromJS({
      children: [body],
      style: {
        color: '#444',
        fontFamily: 'Avenir',
        fontSize: 14,
      },
    }), 'Post Body'),
  ],
  style: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    padding: 20,
  },
}), 'Cell');

const feed = elementByType(ScrollView, fromJS({
  children: [
    cell({
      name: 'Dan Scanlon',
      username: '@danscan',
      body: 'Build react-native apps visually. Check out @Megafractal. Feel free to ping me w/ questions!',
    }),
    cell({
      name: 'Megafractal',
      username: '@megafractal',
      body: 'Visually build react-native interfaces, and export components & style sheets in plain JS!',
    }),
    cell({
      name: 'Devin Siver',
      username: '@dsvier',
      body: 'Just published a @peachapp clone... built in 20 minutes 0_0. @megafractal is the future []_[].',
    }),
  ],
  contentContainerStyle: {
    padding: 8,
  },
  style: {
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
}), 'Feed');

export default elementByType(View, fromJS({
  children: [
    navBar,
    feed,
  ],
  style: {
    backgroundColor: 'white',
    flex: 1,
  },
}), 'Root');
