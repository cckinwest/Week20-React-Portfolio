import React from "react";
import profilePic from "../pics/photo.jpg";

function About() {
  return (
    <div
      style={{
        padding: "10px",
        width: "300px",
        backgroundColor: "#FF884B",
        borderRadius: "20px",
      }}
    >
      <h2 className="title">About Me</h2>
      <br />
      <img
        className="profilePic"
        src={profilePic}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
      <p
        className="content"
        style={{
          padding: "10px",
          width: "auto",
          backgroundColor: "#FFF9B0",
          borderRadius: "20px",
        }}
      >
        Hi, my name is ChiKin. I came from Hong Kong and I was an editor before.
        I don't want to do such boring job anymore, so I am taking this bootcamp
        and hopefully I will become a full stack web developer very soon.
      </p>
    </div>
  );
}

export default About;
