import React from "react";

function Footer() {
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "#ABD9FF",
        fontSize: "40px",
        textAlign: "right",
        padding: "10px",
      }}
    >
      <a href="https://github.com/cckinwest" style={{ margin: "20px" }}>
        <i className="bi bi-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/chi-kin-chan-6424ba1b9/"
        style={{ margin: "20px" }}
      >
        <i className="bi bi-linkedin"></i>
      </a>
    </div>
  );
}

export default Footer;
