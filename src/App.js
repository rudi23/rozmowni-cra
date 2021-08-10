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
import Idea from './Idea';
import Conversations from './Conversations';
import AboutUs from './AboutUs';
import JoinUs from './JoinUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Features />
      <Idea />
      <Conversations />
      {/*<Video />*/}
      <CoursesIndividual />
      <CoursesGroup />
      <CoursesSmallGroup />
      <AboutUs />
      <JoinUs />
      {/*<Facts />*/}
      {/*<Teachers />*/}
      {/*<Testimonials />*/}
      <Footer />
    </div>
  );
}

export default App;
