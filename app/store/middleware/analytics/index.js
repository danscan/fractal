import Analytics from 'analytics-node';
import Inflect from 'i';

// Instantiate inflector library
const inflect = new Inflect();

export default ({ writeKey, selectEventName = defaultSelectEventName, selectUserId = defaultSelectUserId }) => {
  const analytics = new Analytics(writeKey);
  const anonymousId = Math.random().toString(35).substr(2, 7);

  return store => next => action => {
    const state = store.getState();
    const eventName = selectEventName(action, state);
    const userId = selectUserId(action, state);

    analytics.track({
      userId,
      anonymousId: !userId ? anonymousId : undefined,
      event: eventName,
      properties: {
        ...action,
        type: undefined,
      },
    });

    return next(action);
  };
};

// Default function options
function defaultSelectEventName(action) {
  return inflect.humanize(action.type);
}

function defaultSelectUserId() {
  return undefined;
}
