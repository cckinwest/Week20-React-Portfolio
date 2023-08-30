import React, { useState } from "react";
import Form from "../Form";

function Contact() {
  const [data, setData] = useState({ username: "", email: "", message: "" });
  const re = /^([\da-z\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  const dataStatus = {
    username: data.username.length === 0,
    email: !re.test(data.email),
    message: data.message.length === 0,
  };

  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "#FFF6BF",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          fontFamily: "Montserrat, sans-serif",
          padding: "10px",
          fontWeight: "bolder",
        }}
      >
        Contact
      </h2>

      <Form data={data} dataStatus={dataStatus} setData={setData} />
    </div>
  );
}

export default Contact;
