import './App.css';
import Hero from './componants/Hero/Hero';
import Join from './componants/Join/Join';
import Plans from './componants/Plans/Plans';
import Programs from './componants/Programs/Programs';
import Reasons from './componants/Reasons/Reasons';
function App() {
  return (
    <div className="App" >
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Join/>
    </div>
  );
}

export default App;
