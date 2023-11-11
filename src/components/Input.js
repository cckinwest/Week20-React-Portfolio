import React from "react";

function Input({ name, value, placeholder, onChange, valid, warning }) {
  return (
    <div className="row input-group-lg m-4">
      <div>
        <label for={name} className="form-label">
          {name.toUpperCase()}
        </label>
      </div>
      <input
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        type="text"
        className="form-control"
        placeholder={placeholder}
      ></input>
      <div className="form-text text-danger" id="warning">
        {valid ? "" : warning}
      </div>
    </div>
  );
}

export default Input;
