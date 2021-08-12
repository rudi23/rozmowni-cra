import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Contact from './screens/Contact';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import AboutUs from './screens/AboutUs';
import Courses from './screens/Courses';

export default function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/kursy">
                        <Courses />
                    </Route>
                    <Route path="/cennik">
                        <Courses />
                    </Route>
                    <Route path="/kontakt">
                        <Contact />
                    </Route>
                    <Route path="/o-nas">
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
