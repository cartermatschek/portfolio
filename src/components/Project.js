import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Project() {
  return (
   <div>

    <h2>This is where the project info goes</h2>
    <div className="card" style="width: 18rem;">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

   </div>
  );
}

export default Project;