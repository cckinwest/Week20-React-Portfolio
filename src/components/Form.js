import React, { useRef } from "react";
//import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function Form({ data, dataStatus, setData }) {
  const form = useRef();

  const SERVICE_ID = "chi_gmail";
  const TEMPLATE_ID = "chi_template";
  const PUBLIC_KEY = "FZM0DRgXa-jNOaqau";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    document.querySelector("#usernameWarning").textContent = "";
    document.querySelector("#emailWarning").textContent = "";
    document.querySelector("#messageWarning").textContent = "";
  };

  const sendEmail = () => {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dataStatus.username) {
      document.querySelector("#usernameWarning").textContent =
        "Name cannot be empty!";
    } else {
      document.querySelector("#usernameWarning").textContent = "";
    }

    if (dataStatus.email) {
      document.querySelector("#emailWarning").textContent =
        "Email is not valid!";
    } else {
      document.querySelector("#emailWarning").textContent = "";
    }

    if (dataStatus.message) {
      document.querySelector("#messageWarning").textContent =
        "Message cannot be empty!";
    } else {
      document.querySelector("#messageWarning").textContent = "";
    }

    if (!dataStatus.username && !dataStatus.email && !dataStatus.message) {
      // emailjs
      //   .sendForm("chi_gmail", "chi_template", e.target, "FZM0DRgXa-jNOaqau")
      //   .then((res) =>
      //     console.log("The message is sent successfully!", res.status, res.text)
      //   )
      //   .catch((error) => console.log("Failed!"));

      sendEmail();

      alert(`Your details are submitted successfully!`);
      setData({ username: "", email: "", message: "" });
    }
  };

  return (
    <form ref={form} className="container">
      <div className="row input-group-lg m-4">
        <div>
          <label for="nameInput" className="form-label">
            Name
          </label>
        </div>
        <input
          name="username"
          id="nameInput"
          value={data.username}
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Enter your name"
        ></input>
        <div className="form-text text-danger" id="usernameWarning"></div>
      </div>
      <div className="row input-group-lg m-4">
        <div>
          <label for="emailInput" className="form-label">
            Email Address
          </label>
        </div>
        <input
          name="email"
          id="emailInput"
          value={data.email}
          onChange={handleChange}
          type="email"
          className="form-control"
          placeholder="Enter your email address"
        ></input>
        <div className="form-text text-danger" id="emailWarning"></div>
      </div>
      <div className="row input-group-lg m-4">
        <div>
          <label for="messageInput" className="form-label">
            Message
          </label>
        </div>
        <textarea
          name="message"
          id="messageInput"
          value={data.message}
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Enter your message"
          rows="4"
        ></textarea>
        <div className="form-text text-danger" id="messageWarning"></div>
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
  );
}

export default Form;
