import React, { useState, useEffect } from "react";

function Contact() {
  const [data, setData] = useState({ username: "", email: "", message: "" });
  const [validUsername, setValidUsername] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMessage, setValidMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    validInfo();
  };

  const validInfo = () => {
    if (!data.username) {
      setValidUsername(false);
    } else {
      setValidUsername(true);
    }

    const re2 = /^([\da-z\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (!re2.test(data.email)) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }

    if (!data.message) {
      setValidMessage(false);
    } else {
      setValidMessage(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validInfo();

    if (validUsername && validEmail && validMessage) {
      alert(`Your details are submitted successfully!`);
      setData({ username: "", email: "", message: "" });
      setValidUsername(false);
      setValidEmail(false);
      setValidMessage(false);
      return;
    }
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
          fontFamily: "Lucida Handwriting",
          padding: "10px",
          fontWeight: "bolder",
        }}
      >
        Contact
      </h2>
      <form className="container">
        <div className="row input-group-lg m-4">
          <div>
            <label for="nameInput" class="form-label">
              Name
            </label>
          </div>
          <input
            name="username"
            id="nameInput"
            value={data.username}
            onChange={handleChange}
            type="text"
            class="form-control"
            placeholder="Enter your name"
          ></input>
          <div className="form-text text-danger" id="nameWarning">
            {!validUsername ? "Your name cannot be empty!" : ""}
          </div>
        </div>
        <div className="row input-group-lg m-4">
          <div>
            <label for="emailInput" class="form-label">
              Email Address
            </label>
          </div>
          <input
            name="email"
            id="emailInput"
            value={data.email}
            onChange={handleChange}
            type="email"
            class="form-control"
            placeholder="Enter your email address"
          ></input>
          <div className="form-text text-danger" id="emailWarning">
            {!validEmail ? "Your email is not valid!" : ""}
          </div>
        </div>
        <div className="row input-group-lg m-4">
          <div>
            <label for="messageInput" class="form-label">
              Message
            </label>
          </div>
          <textarea
            name="message"
            id="messageInput"
            value={data.message}
            onChange={handleChange}
            type="text"
            class="form-control"
            placeholder="Enter your message"
            rows="4"
          ></textarea>
          <div className="form-text text-danger" id="messageWarning">
            {!validMessage ? "Your message cannot be empty!" : ""}
          </div>
        </div>
        <div className="row m-4">
          <button
            type="button"
            className="btn btn-outline-primary btn-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
