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
import CoursesIndividual from './screens/CoursesIndividual';
import CoursesGroup from './screens/CoursesGroup';
import ScrollToTop from './components/ScrollToTop';
import { CookieConsent } from './components/CookieConsent';

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <TrackingContextProvider>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/dlaczego-my">
                        <WhyUs />
                    </Route>
                    <Route exact path="/kursy/indywidualne">
                        <CoursesIndividual />
                    </Route>
                    <Route exact path="/kursy/grupowe">
                        <CoursesGroup />
                    </Route>
                    <Route exact path="/kontakt">
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
                    <Route exact path="/o-nas">
                        <AboutUs />
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
