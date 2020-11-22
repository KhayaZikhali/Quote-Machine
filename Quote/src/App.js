import Nav from './Nav';
import './App.css';
import { Create, MyComponent} from './Create'
import {BrowserRouter as Router} from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
      <Router>
    <Nav />
    </Router>
    <Create />  
    < MyComponent />
    </div>
  );
 }
 
export default App;