import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Achievements from './sections/Achievements/Achievements';
import Experience from './sections/Experience/Experience';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
