import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Contact from './screens/Contact';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import AboutUs from './screens/AboutUs';
import CoursesIndividual from './screens/CoursesIndividual';
import CoursesGroup from './screens/CoursesGroup';

export default function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
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
        </Router>
    );
}
