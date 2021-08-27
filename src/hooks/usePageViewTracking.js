import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import TrackingContext from '../contexts/TrackingContext';

function usePageViewTracking() {
    const location = useLocation();
    const { tracker } = useContext(TrackingContext);

    useEffect(() => {
        const currentPath = location.pathname + location.search;
        tracker.sendPageView(currentPath);
    }, [location, tracker]);
}

export default usePageViewTracking;
