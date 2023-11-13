import React, { useState } from "react";
import Form from "../Form";

function Contact() {
  const [data, setData] = useState({ Username: "", Email: "", Message: "" });

  const dataStatus = {
    Username: data.Username.length === 0,
    Email: !/^([\da-z\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(data.Email),
    Message: data.Message.length === 0,
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
