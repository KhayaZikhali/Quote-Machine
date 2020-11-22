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
            <a href="https://www.twitter.com" target="blank">
              <h3 className="new">
               Twitter
              </h3>
               </a>
           </Link>
        {/* links to the saved tasks page */}
            <h3 className="saved">
               Tumbler
            </h3>
   </nav>
  );
}

export default Nav;
