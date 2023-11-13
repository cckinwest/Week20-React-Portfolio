import React, { useRef } from "react";
//import { google } from "googleapis";
//import axios from "axios";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import TextArea from "./TextArea";

function Form({ data, dataStatus, setData }) {
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const appendForm = async (info) => {
    try {
      const response = await fetch(
        "https://sheet.best/api/sheets/d9803fe0-ec3b-4d75-b203-879bf724a1df",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(info),
        }
      );

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!dataStatus.Username && !dataStatus.Email && !dataStatus.Message) {
      sendEmail();
      await appendForm(data);

      alert(`Your details are submitted successfully!`);
      setData({ Username: "", Email: "", Message: "" });
    }
  };

  return (
    <form ref={form} className="container">
      <Input
        name="Username"
        value={data.Username}
        placeholder="Enter your name"
        onChange={handleChange}
        valid={!dataStatus.Username}
        warning="Name cannot be empty!"
      />

      <Input
        name="Email"
        value={data.Email}
        placeholder="Enter your email"
        onChange={handleChange}
        valid={!dataStatus.Email}
        warning="Email is not valid!"
      />

      <TextArea
        name="Message"
        value={data.Message}
        placeholder="Enter your message"
        onChange={handleChange}
        valid={!dataStatus.Message}
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
