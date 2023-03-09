import './App.css';

import About from './components/about/about.jsx';
import Contact from './components/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';
import Home from './components/home/home.jsx';
import ScrollUp from './components/scrollup/scrollup.jsx';
import Skills from './components/skills/skills.jsx';
import Work from './components/work/work.jsx';

function App() {
  return (
    <>
      <Header />

      <main className-='main'>
        <p>Hello</p>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
};

export default App;
