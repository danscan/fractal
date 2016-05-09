import { Map } from 'immutable';

export default new Map({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  navBar: {
    alignItems: 'center',
    backgroundColor: '#00b5ec',
    justifyContent: 'center',
    height: 48,
  },
  navBarTitleLabel: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 18,
  },

  feed: {
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  feedContentContainer: {
    padding: 8,
  },

  cell: {
    backgroundColor: 'white',
    borderRadius: 4,
    marginBottom: 10,
    padding: 20,
  },
  authorInfoSection: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatarImage: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    marginRight: 10,
    height: 50,
    width: 50,
  },
  authorProfileInfo: {},
  authorNameLabel: {
    color: '#333',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '600',
  },
  authorUsernameLabel: {
    color: '#666',
    fontFamily: 'Avenir',
    fontSize: 14,
  },
  postBodyLabel: {
    color: '#444',
    fontFamily: 'Avenir',
    fontSize: 14,
  },
});
