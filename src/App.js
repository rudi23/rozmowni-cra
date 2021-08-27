import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { TrackingContextProvider } from './contexts/TrackingContext';
import Header from './Header';
import Footer from './Footer';
import Contact from './screens/Contact';
import Home from './screens/Home';
import WhyUs from './screens/WhyUs';
import NotFound from './screens/NotFound';
import AboutUs from './screens/AboutUs';
import PrivacyPolicy from './screens/PrivacyPolicy';
import CoursesIndividual from './screens/CoursesIndividual';
import CoursesGroup from './screens/CoursesGroup';
import ScrollToTop from './components/ScrollToTop';
import { CookieConsent } from './components/CookieConsent';
import { routeMap, routeNames } from './routes';

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <TrackingContextProvider>
                <Header />
                <Switch>
                    <Route exact path={routeMap[routeNames.HOME]}>
                        <Home />
                    </Route>
                    <Route exact path={routeMap[routeNames.WHY_US]}>
                        <WhyUs />
                    </Route>
                    <Route exact path={routeMap[routeNames.INDIVIDUAL_COURSE]}>
                        <CoursesIndividual />
                    </Route>
                    <Route exact path={routeMap[routeNames.GROUP_COURSE]}>
                        <CoursesGroup />
                    </Route>
                    <Route exact path={routeMap[routeNames.CONTACT]}>
                        <GoogleReCaptchaProvider
                            reCaptchaKey="6LefiSQcAAAAAOcESFE5YPnjSfDZUgnA0LNhZ3Jp"
                            language="pl"
                            scriptProps={{
                                defer: true,
                            }}
                        >
                            <Contact />
                        </GoogleReCaptchaProvider>
                    </Route>
                    <Route exact path={routeMap[routeNames.ABOUT_US]}>
                        <AboutUs />
                    </Route>
                    <Route exact path={routeMap[routeNames.PRIVACY_POLICY]}>
                        <PrivacyPolicy />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
            </TrackingContextProvider>
            <CookieConsent />
        </Router>
    );
}
