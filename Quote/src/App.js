import Nav from './Nav';
import './App.css';
import {Appo} from './Create'
import {BrowserRouter as Router} from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
    <Router>
    <Nav />
    </Router>
    <Appo />
        </div>
  );
 }
 // add button to run the randimiser functon onclick
export default App;