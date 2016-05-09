import { fromJS } from 'immutable';
import { Text, ScrollView, View } from 'react-native';
import elementByType from '../../utils/elementByType';

const navBar = ({ styleSheet }) => elementByType(View, fromJS({
  children: [
    elementByType(Text, fromJS({
      children: ['Talker'],
      style: styleSheet.navBarTitleLabel,
    })),
  ],
  style: styleSheet.navBar,
}), 'NavBar');

const cell = ({ name, username, body }) => ({ styleSheet }) => elementByType(View, fromJS({
  children: [
    elementByType(View, fromJS({
      children: [
        elementByType(View, fromJS({
          style: styleSheet.avatarImage,
        }), 'Avatar Image'),
        elementByType(View, fromJS({
          children: [
            elementByType(Text, fromJS({
              children: [name],
              style: styleSheet.authorNameLabel,
            })),
            elementByType(Text, fromJS({
              children: [username],
              style: styleSheet.authorUsernameLabel,
            })),
          ],
          style: styleSheet.authorProfileInfo,
        }), 'Author Profile Info'),
      ],
      style: styleSheet.authorInfoSection,
    }), 'Author Info Section'),
    elementByType(Text, fromJS({
      children: [body],
      style: styleSheet.postBodyLabel,
    }), 'Post Body'),
  ],
  style: styleSheet.cell,
}), 'Cell');

const feed = ({ styleSheet }) => elementByType(ScrollView, fromJS({
  children: [
    cell({
      name: 'Dan Scanlon',
      username: '@danscan',
      body: 'Build react-native apps visually. Check out @Megafractal. Feel free to ping me w/ questions!',
    })({ styleSheet }),
    cell({
      name: 'Megafractal',
      username: '@megafractal',
      body: 'Visually build react-native interfaces, and export components & style sheets in plain JS!',
    })({ styleSheet }),
    cell({
      name: 'Devin Siver',
      username: '@dsvier',
      body: 'Just published a @peachapp clone... built in 20 minutes 0_0. @megafractal is the future []_[].',
    })({ styleSheet }),
  ],
  contentContainerStyle: styleSheet.feedContentContainer,
  style: styleSheet.feed,
}), 'Feed');

const component = ({ styleSheet }) => elementByType(View, fromJS({
  children: [
    navBar({ styleSheet }),
    feed({ styleSheet }),
  ],
  style: styleSheet.container,
}), 'Root');

export default component;
