import { useContext } from 'react';
import TrackingContext from '../contexts/TrackingContext';

const useClickTracking = () => {
    const { tracker } = useContext(TrackingContext);

    function trackClick(eventData) {
        if (!eventData) {
            return;
        }
        tracker.sendEvent(eventData);
    }

    return trackClick;
};

export default useClickTracking;
