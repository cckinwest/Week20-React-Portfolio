import React from "react";

function About() {
  const aboutMe = [
    `Hi, I am Chan Chi Kin. Many people here called me 'Chi' as they
    think that it's my middle name. Actually I don't have a middle name
    and 'Chi Kin' is my first name. Another strange thing is that my
    surname 'Chan' comes in front of my first name.`,
    `I came from Hong Kong in June 2022 due to You Know Who. I always
    felt very sleepy in English lessons in HK not only because the
    courses were extremely boring but also I did not imagined that one
    day I would live here.`,
    `I studied Mathematics in University because I could graduate easily
    without doing any projects and I could find teaching vacancies,
    which was very high-paid. Unfortunately, no schools employed me and
    I ended up to become an editor of Maths textbooks.`,
    `I worked day and night to earn money to pay for mortgage of a small
    apartment, without thinking of change as I was satisfied with the
    very very stable life. However, when I knew that I had to leave my
    home country, I became extremely helpless as I did not have any
    professional skills needed elsewhere.`,
    `After coming to the UK, I have changed my mindset. I realised that
    the only thing that could protect me is not properties or wealth,
    but my skills, especially in the turbulent time. I am now studying
    web application and looking forwards to becoming a full-stack
    developer.`,
  ];

  const renderPara = (paragraph) => {
    return <p style={{ padding: "2px" }}>{paragraph}</p>;
  };

  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "#FFF6BF",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          fontFamily: "Lucida Handwriting",
          padding: "10px",
          fontWeight: "bolder",
        }}
      >
        About Me
      </h2>
      <div style={{ textAlign: "center" }}>
        <div
          className="content"
          style={{
            margin: "4vw",
            padding: "3vw",
            width: "90vw",
            maxHeight: "80vh",
            overflowX: "hidden",
            overflowY: "scroll",
            backgroundColor: "#FFEBAD",
            borderRadius: "10px",
            textAlign: "left",
            fontFamily: "Times New Roman, Times, serif",
            fontSize: "20px",
          }}
        >
          {aboutMe.map((para) => {
            return renderPara(para);
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
