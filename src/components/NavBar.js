import React, { useState } from "react";
import "../components/styles/NavBar.css";

function Navbar(props) {
  //const [activeBtn, setActiveBtn] = useState("About");

  const pages = ["About", "Contact", "Portfolio", "Resume"];

  const handleClick = (page) => {
    props.setActive(page);
  };

  const status = (btnName) => {
    if (props.active === btnName) {
      return "active";
    }

    return "inActive";
  };

  const renderBtn = (page) => {
    return (
      <li>
        <a
          href="#"
          key={page}
          onClick={() => handleClick(page)}
          className={status(page)}
        >
          {page}
        </a>
      </li>
    );
  };

  return (
    <div>
      <h1 className="headerTitle">Chi Kin's page</h1>
      <ul
        className="btnContainer"
        style={{ display: "flex", listStyleType: "none" }}
      >
        {pages.map((page) => {
          return renderBtn(page);
        })}
      </ul>
    </div>
  );
}

export default Navbar;
