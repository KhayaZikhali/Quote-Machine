import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

// Navbar component
function Nav() {

const styles = {
    color : "white" ,
    "text-decoration" : "none"
}
  return (
   <nav className="ul">
       <h3 className="title">
           Quote Machine
       </h3>
       {/* links to the twittre page */}
           <Link style={styles}>
            <a href="https://twitter.com/intent/=" target="blank">
              <h3 className="new">
               Twitter
              </h3>
               </a>
           </Link>
        {/* links to the saved tasks page */
        }  
         <a href="https://tumblr.com/intent/=" target="blank">
            <h3 className="saved">
               Tumbler
            </h3>
         </a>
   </nav>
  );
}

export default Nav;
