import React from "react";
import {Link} from "react-router-dom"
import "../css/Navigation.css"
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Navigation() {
  return (
   <div>
    <ul className="nav-list">
       <li><Link to="/">About Me</Link></li> 
       <li><Link to="/portfolio">Portfolio</Link></li>
       <li><Link to="/contact">Contact</Link></li>
       <li><Link to="/resume">Resume</Link></li>
    </ul>
   </div>
  );
}

export default Navigation;