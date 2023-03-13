import React from "react";
import resume from "./images/Resume.jpg";

function Resume() {
  return (
   <div className="sm:flex sm:justify-center">

<a href={resume} download>
<img src={resume}></img>
</a>
   </div>
  );
}

export default Resume;