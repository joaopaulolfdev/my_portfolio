import Home from './components/home'
import About from './components/about';
import Projects from './components/projects';
import Contacts from './components/contacts';

import './Global.css';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
