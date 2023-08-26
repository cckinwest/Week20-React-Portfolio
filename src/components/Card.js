import React from "react";

function Card(props) {
  return (
    <div className="cardContainer">
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
      <h3 className="cardTitle">{props.title}</h3>
      <p className="cardBodyText">{props.description}</p>
      <ul className="tagsContainer">
        {props.tags.map((tag) => {
          return <li className="tag">{tag}</li>;
        })}
      </ul>
      <a href={props.url}>Link</a>
    </div>
  );
}

export default Card;
