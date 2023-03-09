import React from "react";
import Navigation from "./Navigation";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Header() {
  return (
   <div>
        <Navigation></Navigation>
   </div>
  );
}

export default Header;