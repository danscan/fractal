import { fromJS } from 'immutable';
import { Text, ScrollView, View } from 'react-native';
import elementByType from '../../utils/elementByType';

const navBar = elementByType(View, fromJS({
  children: [
    elementByType(Text, fromJS({
      children: ['Talker'],
      style: { $$styleSheetRef: 'navBarTitleLabel' },
    })),
  ],
  style: { $$styleSheetRef: 'navBar' },
}), 'NavBar');

const cell = ({ name, username, body }) => elementByType(View, fromJS({
  children: [
    elementByType(View, fromJS({
      children: [
        elementByType(View, fromJS({
          style: { $$styleSheetRef: 'avatarImage' },
        }), 'Avatar Image'),
        elementByType(View, fromJS({
          children: [
            elementByType(Text, fromJS({
              children: [name],
              style: { $$styleSheetRef: 'authorNameLabel' },
            })),
            elementByType(Text, fromJS({
              children: [username],
              style: { $$styleSheetRef: 'authorUsernameLabel' },
            })),
          ],
          style: { $$styleSheetRef: 'authorProfileInfo' },
        }), 'Author Profile Info'),
      ],
      style: { $$styleSheetRef: 'authorInfoSection' },
    }), 'Author Info Section'),
    elementByType(Text, fromJS({
      children: [body],
      style: { $$styleSheetRef: 'postBodyLabel' },
    }), 'Post Body'),
  ],
  style: { $$styleSheetRef: 'cell' },
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
  contentContainerStyle: { $$styleSheetRef: 'feedContentContainer' },
  style: { $$styleSheetRef: 'feed' },
}), 'Feed');

const component = elementByType(View, fromJS({
  children: [
    navBar,
    feed,
  ],
  style: { $$styleSheetRef: 'container' },
}), 'Root');

export default component;
