import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
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

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
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
                        <Contact />
                    </Route>
                    <Route exact path="/o-nas">
                        <AboutUs />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
            </div>
            <CookieConsent
                location="bottom"
                buttonText="Akceptuję"
                cookieName="cookieConsent"
                style={{
                    background: 'rgba(7, 41, 77, 0.98)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    alignItems: 'center',
                    fontSize: '14px',
                }}
                buttonStyle={{
                    fontSize: '14px',
                    color: '#fff',
                    borderColor: '#0f8d8c',
                    background: '#0f8d8c',
                    fontWeight: '500',
                    borderRadius: '5px',
                    fontFamily: '"Filson Pro", sans-serif',
                    padding: '8px 15px',
                }}
                expires={90}
            >
                Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w celach statystycznych, reklamowych
                oraz funkcjonalnych. Dzięki nim możemy indywidualnie dostosować stronę do twoich potrzeb. Każdy może
                zaakceptować pliki cookies albo ma możliwość wyłączenia ich w przeglądarce, dzięki czemu nie będą
                zbierane żadne informacje. Dowiedz się{' '}
                <a href="http://ciasteczka.eu/#jak-wylaczyc-ciasteczka" target="_blank" rel="noreferrer">
                    jak je wyłączyć.
                </a>{' '}
                Więcej możesz przeczytać w naszej <Link to="/polityka-prywatnosci">polityce prywatnosci.</Link>
            </CookieConsent>
        </Router>
    );
}
