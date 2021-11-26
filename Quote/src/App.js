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

// controls the animation of the author name in the preview
// author name
// let text = author; 

let text = "Learning Never Stops!!";
let i = 0;

setInterval(function(){
    let cursor= (i%4 == 0 || 1%3 == 0 ? "_" : "&nbsp;");
    let displayText = text.substring(0, i % text.length+1);
    document.getElementById("typespace").innerHTML = displayText;
    i++;
// adjust inteval time to adjust to the length of the author name such that the duration of the animation is the same for every name in the list
    
}, 200)