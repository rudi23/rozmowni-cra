import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { resolveRouteName } from '../routes';
import { getMetadata, updateMetadata } from '../services/metadata';

export default function useMetadata() {
    const location = useLocation();

    useEffect(() => {
        const routeName = resolveRouteName(location.pathname);
        const metadata = getMetadata(routeName);

        updateMetadata(metadata);
    }, [location]);
}
