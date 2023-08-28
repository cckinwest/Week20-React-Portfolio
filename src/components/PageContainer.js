import React, { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

import Navbar from "./NavBar";
import Footer from "./Footer";

function PageContainer() {
  const [active, setActive] = useState("About");

  const renderPage = () => {
    if (active === "About") {
      return <About />;
    } else if (active === "Contact") {
      return <Contact />;
    } else if (active === "Portfolio") {
      return <Portfolio />;
    }

    return <Resume />;
  };

  return (
    <div>
      <Navbar active={active} setActive={setActive} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default PageContainer;
