import { init, sendEvent, sendPageView } from './googleAnalytics';
import * as allEvents from './events';

const tracking = {
    init,
    sendEvent,
    sendPageView,
    events: allEvents,
};

export const events = allEvents;

export default tracking;
