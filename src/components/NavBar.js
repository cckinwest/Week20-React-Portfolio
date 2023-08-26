import React from "react";

function Navbar(props) {
  const handleClick = (page) => {
    props.setActive(page);
  };

  return (
    <div>
      <h1 className="headerTitle">Chi Kin's page</h1>
      <ul className="btnContainer">
        <li>
          <a href={`#about`} key="About" onClick={() => handleClick("About")}>
            About
          </a>
        </li>
        <li>
          <a
            href={`#contact`}
            key="Contact"
            onClick={() => handleClick("Contact")}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href={`#portfolio`}
            key="portfolio"
            onClick={() => handleClick("Portfolio")}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href={`#resume`}
            key="resume"
            onClick={() => handleClick("Resume")}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
