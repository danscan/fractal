import axios from 'axios';
import { NetInfo } from 'react-native';

let events = [];
let lastDrainTime = Date.now();
let drainTimeout;

export default function track(writeKey, eventData, contextData, drainIntervalMilliseconds = 20000) {
  const event = {
    action: 'track',
    timestamp: new Date().toISOString(),
    ...eventData,
  };
  events = [...events, event];

  drain(writeKey, contextData, drainIntervalMilliseconds);
}

function drain(writeKey, contextData, drainIntervalMilliseconds) {
  const drainIntervalRemainder = drainIntervalMilliseconds - (Date.now() - lastDrainTime);
  const drainIntervalHasPast = drainIntervalRemainder <= 0;

  // If drain interval hasn't past yet, or there are no events, reshedule drain
  if (!drainIntervalHasPast || !events.length) {
    return _scheduleDrain();
  }

  // If there's no network connection, reshedule drain, else begin drain.
  return NetInfo.isConnected.fetch().done(isConnected => {
    if (isConnected) {
      return _beginDrain();
    }

    return _scheduleDrain();
  });

  // - Drain helpers -
  function _scheduleDrain() {
    // Set timeout for `drainIntervalMilliseconds` to re-call drain with same
    // parameters.
    if (drainTimeout) {
      clearTimeout(drainTimeout);
    }
    drainTimeout = setTimeout(() => drain(writeKey, contextData, drainIntervalMilliseconds), drainIntervalMilliseconds);
    return drainTimeout;
  }

  function _beginDrain() {
    // Capture events to drain, and then empty `events` so that it can begin to
    // accumulate fresh events for the next drain interval.
    const drainEvents = events;
    events = [];

    // TODO: Ensure that the batch is less than 500kb, and if it's not, split it
    // into multiple requests.
    // Attempt to asynchronously import events to segment.
    return axios({
      method: 'post',
      url: 'https://api.segment.io/v1/import',
      auth: { username: writeKey },
      data: {
        batch: drainEvents,
        context: contextData,
      },
    })
    // If import is successful, complete drain.
    .then(() => _completeDrain())
    // If import was unsuccessful, put the captured drain events back in
    // `events` for the next attempt, and log the error.
    .catch(error => _rollBackDrainEventsWithError(drainEvents, error));
  }

  function _completeDrain() {
    // Drain just succeeded... update last drain time to now, and schedule
    // the next drain.
    lastDrainTime = Date.now();
    return _scheduleDrain();
  }

  function _rollBackDrainEventsWithError(drainEvents, error) {
    console.log('Error importing analytics data... error:', error);
    // Drain just failed... log the error, put the captured drain events back
    // in `events` for the next drain attempt, and schedule the next drain.
    events = [...drainEvents, ...events];
    return _scheduleDrain();
  }
}
