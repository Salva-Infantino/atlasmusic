import Atlas from './components/Atlas';
import Events from './components/Events';
import About from './components/About';
import Artists from './components/Artists';
import Contact from './components/Contact';
import Sphere from './components/Sphere';

import Nav from './components/Nav';

const Home = () => {

  return (
    <div id='App'>
      
      <Nav />
      
      <div className='onePage overflow-scroll h-screen'>
        <Atlas />
        <Events />
        <About />
        <Sphere />
        <Artists />
        <Contact />
      </div>
    </div>
  );
}

export default Home;