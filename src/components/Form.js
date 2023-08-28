import React from "react";

function Form({ data, dataStatus, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    document.querySelector("#usernameWarning").textContent = "";
    document.querySelector("#emailWarning").textContent = "";
    document.querySelector("#messageWarning").textContent = "";
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
      alert(`Your details are submitted successfully!`);
      setData({ username: "", email: "", message: "" });
    }
  };

  return (
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
        <div className="form-text text-danger" id="usernameWarning"></div>
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
        <div className="form-text text-danger" id="emailWarning"></div>
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
