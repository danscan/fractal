// Element encoding...
// TODO: What about conditional rendering expressions?
// TODO: What about passing props down element trees?
// IDEA: Composable clauses... one per element w/ optional sibling mutual exclusivity?  (or more switch-like?)
const element = {
  componentName: 'View',
  props: {
    children: [
      {
        componentName: 'Text',
        props: {
          children: ['The Google Logo'],
          style: { color: '#333', fontFamily: 'Avenir', fontSize: 18 },
        },
      },
      {
        componentName: 'Image',
        props: {
          source: { uri: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
          style: { height: 300, width: 400 },
        },
      },
    ],
    style: { backgroundColor: 'white', borderRadius: 8, padding: 30 },
  },
};
