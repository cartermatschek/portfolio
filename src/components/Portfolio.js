import React from "react";
import Project from "./Project";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Portfolio() {
  return (
   <div>
        <Project> </Project>
   </div>
  );
}

export default Portfolio;