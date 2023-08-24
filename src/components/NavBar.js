import React, { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("About");
  const pages = ["About", "Contact", "Portfolio", "Resume"];

  const handleClick = (page) => {
    setActive(page);
    props.render(page);
  };

  return (
    <div>
      <ul className="btnContainer">
        {pages.map((page) => {
          if (active === page) {
            return (
              <li>
                <a className="active" onClick={handleClick(page)}>
                  {page}
                </a>
              </li>
            );
          }

          return (
            <li>
              <a className="inActive" onClick={handleClick(page)}>
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
