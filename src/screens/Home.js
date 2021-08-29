import Banner from '../components/Banner';
import Features from '../components/Features';
import Idea from '../components/Idea';
import Conversations from '../components/Conversations';
import WhyUs from '../components/WhyUs';
import usePageViewTracking from '../hooks/usePageViewTracking';
import useMetadata from '../hooks/useMetadata';

export default function Home() {
    usePageViewTracking();
    useMetadata();

    return (
        <>
            <Banner />
            <Features />
            <WhyUs />
            <Conversations />
            <Idea />
        </>
    );
}
