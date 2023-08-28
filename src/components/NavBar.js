import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../components/styles/NavBar.css";
import profilePic from "./pics/photo.jpg";

function Navbar(props) {
  const pages = ["About", "Contact", "Portfolio", "Resume"];

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const [showMenu, setShowMenu] = useState(true);

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
      <li style={{ margin: "5px", fontFamily: "Lucida Handwriting" }}>
        <a
          href="#"
          key={page}
          onClick={() => handleClick(page)}
          className={status(page)}
          style={{
            margin: "10px",
            padding: "4px",
            textDecoration: "none",
            color: "black",
          }}
        >
          {page}
        </a>
      </li>
    );
  };

  const controlMenu = () => {
    if (showMenu) {
      document.querySelector(".btnContainer").style.display = "block";
      setShowMenu(false);

      return;
    }

    document.querySelector(".btnContainer").style.display = "none";
    setShowMenu(true);
  };

  return (
    <header
      style={
        isTabletOrMobile
          ? { display: "block" }
          : {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }
      }
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1
          style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: "40px",
          }}
        >
          Chi Kin's page
          <img
            className="profilePic"
            src={profilePic}
            style={{
              height: "50px",
              aspectRatio: "1/1",
              objectFit: "cover",
              borderRadius: "50%",
              margin: "10px",
            }}
          />
        </h1>

        <button
          className="btn btn-outline-primary"
          style={isTabletOrMobile ? { display: "block" } : { display: "none" }}
          onClick={controlMenu}
        >
          Menu
        </button>
      </div>
      <ul
        className="btnContainer"
        style={isTabletOrMobile ? { display: "none" } : { display: "flex" }}
      >
        {pages.map((page) => {
          return renderBtn(page);
        })}
      </ul>
    </header>
  );
}

export default Navbar;
