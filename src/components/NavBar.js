import React, { useState } from "react";
import "../components/styles/NavBar.css";

function Navbar(props) {
  //const [activeBtn, setActiveBtn] = useState("About");

  //const pages = ["About", "Contact", "Portfolio", "Resume"];

  const handleClick = (page) => {
    props.setActive(page);
  };

  const status = (btnName) => {
    if (props.active === btnName) {
      return "active";
    }

    return "inActive";
  };

  return (
    <div>
      <h1 className="headerTitle">Chi Kin's page</h1>
      <ul
        className="btnContainer"
        style={{ display: "flex", listStyleType: "none" }}
      >
        <li>
          <a
            href={`#about`}
            key="About"
            onClick={() => handleClick("About")}
            className={status("About")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href={`#contact`}
            key="Contact"
            onClick={() => handleClick("Contact")}
            className={status("Contact")}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href={`#portfolio`}
            key="portfolio"
            onClick={() => handleClick("Portfolio")}
            className={status("Portfolio")}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href={`#resume`}
            key="resume"
            onClick={() => handleClick("Resume")}
            className={status("Resume")}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
