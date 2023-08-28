import React from "react";

function Card(props) {
  return (
    <a
      style={{
        padding: "10px",
        width: "auto",
        backgroundColor: "#FFEBAD",
        borderRadius: "20px",
        display: "flex",
        flex: "1",
        height: "100%",
        textDecoration: "none",
        color: "black",
      }}
      href={props.url}
    >
      <div style={{ width: "64%" }}>
        <h3 className="cardTitle">{props.title}</h3>
        <p className="cardBodyText">{props.description}</p>
        <ul
          className="tagsContainer"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {props.tags.map((tag) => {
            return (
              <li
                className="tag"
                style={{
                  margin: "8px",
                  padding: "4px",
                  borderRadius: "2px",
                  listStyleType: "none",
                  outlineStyle: "solid",
                }}
              >
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "36%",
        }}
      >
        <img
          style={{
            width: "80%",
            aspectRatio: "1/1",
            objectFit: "cover",
            borderRadius: "50%",
          }}
          className="cardPic"
          src={props.pic}
        />
      </div>
    </a>
  );
}

export default Card;
