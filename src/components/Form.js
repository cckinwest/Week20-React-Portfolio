import React, { useRef } from "react";
//import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import TextArea from "./TextArea";

function Form({ data, dataStatus, setData }) {
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const sendEmail = () => {
    const SERVICE_ID = "chi_gmail";
    const TEMPLATE_ID = "chi_template";
    const PUBLIC_KEY = "FZM0DRgXa-jNOaqau";

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

    if (!dataStatus.username && !dataStatus.email && !dataStatus.message) {
      sendEmail();

      alert(`Your details are submitted successfully!`);
      setData({ username: "", email: "", message: "" });
    }
  };

  return (
    <form ref={form} className="container">
      <Input
        name="username"
        value={data.username}
        placeholder="Enter your name"
        onChange={handleChange}
        valid={!dataStatus.username}
        warning="Name cannot be empty!"
      />

      <Input
        name="email"
        value={data.email}
        placeholder="Enter your email"
        onChange={handleChange}
        valid={!dataStatus.email}
        warning="Email is not valid!"
      />

      <TextArea
        name="message"
        value={data.message}
        placeholder="Enter your message"
        onChange={handleChange}
        valid={!dataStatus.message}
        warning="Message cannot be empty!"
      />

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
