import React from "react";
import resume from "./images/Resume.png";

function Resume() {
  return (
   <div>

<a href={resume} download>Resume
<img src={resume}></img>
</a>
   </div>
  );
}

export default Resume;