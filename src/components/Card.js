import React from "react";

function Card(props) {
  return (
    <div
      className="cardContainer"
      style={{
        padding: "10px",
        width: "300px",
        backgroundColor: "#FFD384",
        borderRadius: "20px",
        margin: "10px",
      }}
    >
      <img
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          borderRadius: "50%",
        }}
        className="cardPic"
        src={props.pic}
      />
      <div
        style={{
          padding: "10px",
          width: "auto",
          backgroundColor: "#FFF9B0",
          borderRadius: "20px",
        }}
      >
        <h3 className="cardTitle">{props.title}</h3>
        <p className="cardBodyText">{props.description}</p>
        <ul className="tagsContainer">
          {props.tags.map((tag) => {
            return <li className="tag">{tag}</li>;
          })}
        </ul>
        <a href={props.url}>Link</a>
      </div>
    </div>
  );
}

export default Card;
