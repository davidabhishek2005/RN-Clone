
import './App.css';

//import rnclone from './Components/Rnclone/rnclone';
import Rnclone from './Components/Rnclone/rnclone';
import About from './Components/Rnclone/about';
import Contact from './Components/Rnclone/contact';
import Event from './Components/Rnclone/events';
import Sponsor from './Components/Rnclone/sponsor';
import Ourteam from './Components/Rnclone/ourteam';
function App() {
  return (
    <div className="App">     
     <Rnclone/>
     <About/>
     <Event/>
     <Ourteam/>
     <Sponsor/>
     <Contact/>
    </div>
  );
}

export default App;
