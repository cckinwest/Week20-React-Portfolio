import React from "react";

function Card(props) {
  return (
    <div
      style={{
        padding: "10px",
        width: "auto",
        backgroundColor: "#FFEBAD",
        borderRadius: "20px",
        display: "flex",
        flex: "1",
        height: "100%",
      }}
    >
      <div style={{ width: "64%" }}>
        <h3 className="cardTitle">{props.title}</h3>
        <p className="cardBodyText">{props.description}</p>
        <ul
          className="tagsContainer"
          style={{ display: "flex", flexWrap: "wrap", padding: "0" }}
        >
          {props.tags.map((tag) => {
            return (
              <li
                className="tag"
                style={{
                  margin: "6px",
                  padding: "3px",
                  borderRadius: "4px",
                  border: "1px solid black",
                  listStyleType: "none",
                  listStylePosition: "outside",
                  outlineStyle: "solid",
                  outlineWidth: "thin",
                  fontSize: "15px",
                }}
              >
                {tag}
              </li>
            );
          })}
        </ul>
        <div style={{ display: "flex" }}>
          <a
            href={props.url}
            style={{
              textDecoration: "none",
              color: "black",
              marginLeft: "5%",
            }}
          >
            <i class="bi bi-github"> GitHub</i>
          </a>
          <a
            href={props.link}
            style={{
              textDecoration: "none",
              color: "black",
              marginLeft: "10%",
            }}
          >
            <i class="bi bi-link"> Link</i>
          </a>
        </div>
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
    </div>
  );
}

export default Card;
