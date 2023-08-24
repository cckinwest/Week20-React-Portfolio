import React, { useState } from "react";

function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !message) {
      setWarning(`Don't leave any field empty!`);
    } else {
      setWarning(`Your details are submitted successfully!`);
      setUsername("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div>
      <h2 className="title">Contact Form</h2>
      <form className="form">
        <p className="warningMessage">{warning}</p>
        <input
          name="username"
          value={username}
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
        ></input>
        <input
          name="email"
          value={email}
          onChange={handleChange}
          type="text"
          placeholder="Enter your email"
        ></input>
        <input
          name="message"
          value={message}
          onChange={handleChange}
          type="text"
          placeholder="Enter your message"
        ></input>
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
