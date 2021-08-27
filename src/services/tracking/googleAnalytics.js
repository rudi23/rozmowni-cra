import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-2XD6SZL2GR';

const isDev = process.env.NODE_ENV === 'development';

export function init() {
    if (isDev) {
        console.log('GA: initialize');
    } else {
        ReactGA.initialize(TRACKING_ID, {
            gtagOptions: {
                send_page_view: false,
            },
        });
    }
}

export function sendEvent(payload) {
    if (isDev) {
        console.log('GA: send event', payload);
    } else {
        ReactGA.event(payload);
    }
}

export function sendPageView(path) {
    if (isDev) {
        console.log(`GA: send page view: ${path}`);
    } else {
        ReactGA.send({ hitType: 'pageview', page: path });
    }
}
