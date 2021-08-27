import usePageViewTracking from '../hooks/usePageViewTracking';

export default function NotFound() {
    usePageViewTracking();

    return <p>Page not found</p>;
}
