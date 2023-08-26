import React from "react";

function Section(props) {
  return (
    <div>
      <h3>{props.jobTitle}</h3>
      <h5>{props.jobCompany}</h5>
      <p>{props.jobTime}</p>
      <ul>
        {props.jobDescriptions.map((description) => {
          return <li>{description}</li>;
        })}
      </ul>
    </div>
  );
}

export default Section;
