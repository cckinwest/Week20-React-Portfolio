import React from "react";

function TextArea({ name, value, placeholder, onChange, valid, warning }) {
  return (
    <div className="row input-group-lg m-4">
      <div>
        <label for={name} className="form-label">
          {name.toUpperCase()}
        </label>
      </div>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        type="text"
        className="form-control"
        placeholder={placeholder}
        row="4"
      ></textarea>
      <div className="form-text text-danger" id="warning">
        {valid ? "" : warning}
      </div>
    </div>
  );
}

export default TextArea;
