import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function PageContainer(props) {
  return (
    <div>
      {() => {
        switch (props.activePage) {
          case "About":
            return <About />;
          case "Contact":
            return <Contact />;
          case "Portfolio":
            return <Portfolio />;
          default:
            return <Resume />;
        }
      }}
    </div>
  );
}

export default PageContainer;
