import logo from './logo.svg';
import './App.css';
import NBExNewPlanPage from './redux-practise/NBExNewPlanPage';
import { Navbar } from './project1/Navbar';
import { Homepage } from './project1/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
