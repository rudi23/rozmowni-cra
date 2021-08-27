import { createContext, useMemo } from 'react';
import tracker from '../services/tracking';

const TrackingContext = createContext();

const TrackingContextProvider = ({ children }) => {
    tracker.init();

    const value = useMemo(() => ({ tracker }), []);

    return <TrackingContext.Provider value={value}>{children}</TrackingContext.Provider>;
};

export { TrackingContextProvider };
export default TrackingContext;
