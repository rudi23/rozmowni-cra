import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Features from './Features';
import CoursesIndividual from './CoursesIndividual';
import CoursesGroup from './CoursesGroup';
import CoursesSmallGroup from './CoursesSmallGroup';
import Teachers from './Teachers';
import Facts from './Facts';
import Testimonials from './Testimonials';
import Video from './Video';
import About from './About';
import Conversations from './Conversations';
import JoinUs from './JoinUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Features />
      <About />
      <Conversations />
      <Video />
      <CoursesIndividual />
      <CoursesGroup />
      <CoursesSmallGroup />
      <JoinUs />
      {/*<Facts />*/}
      {/*<Teachers />*/}
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
