import Nav from './Nav';
import './App.css';
import {Button} from './Create'
import {BrowserRouter as Router} from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
    <Router>
    <Nav />
    </Router>
    <Button />
    </div>
  );
 }
 // add button to run the randimiser functon onclick
export default App;