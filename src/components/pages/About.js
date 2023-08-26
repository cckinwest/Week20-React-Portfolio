import React from "react";
import profilePic from "../pics/photo.jpg";

function About() {
  return (
    <div>
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
      <p className="content">
        Hi, my name is ChiKin. I came from Hong Kong and I was an editor before.
        I don't want to do such boring job anymore, so I am taking this bootcamp
        and hopefully I will become a full stack web developer very soon.
      </p>
    </div>
  );
}

export default About;
