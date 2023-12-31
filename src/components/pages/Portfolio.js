import React from "react";
import Card from "../Card";

import SchedulerApp from "../pics/schedulerApp.png";
import QuizApp from "../pics/quizApp.png";
import InvestmentApp from "../pics/investmentApp.png";
import ManagementDB from "../pics/managementDB.png";
import BlogApp from "../pics/blogApp.png";
import eCommerceApp from "../pics/eCommerceApp.png";

function Portfolio() {
  const projects = [
    {
      pic: SchedulerApp,
      title: "SchedulerApp",
      description: "You will not miss anything with this app.",
      tags: ["localStorage"],
      url: "https://github.com/cckinwest/work-day-scheduler",
      link: "https://cckinwest.github.io/work-day-scheduler/",
    },
    {
      pic: QuizApp,
      title: "QuizApp",
      description: "An app fetching weather information from API.",
      tags: ["API", "localStorage"],
      url: "https://github.com/cckinwest/Quiz-app",
      link: "https://cckinwest.github.io/Quiz-app/index.html",
    },
    {
      pic: InvestmentApp,
      title: "InvestmentApp",
      description: "An app fetching finance data and news for investment.",
      tags: ["API", "localStorage", "chartJS"],
      url: "https://github.com/cckinwest/trial_project/",
      link: "https://cckinwest.github.io/trial_project/",
    },
    {
      pic: ManagementDB,
      title: "ManagementDB",
      description: "A backend managing data of a company.",
      tags: ["inquirer", "mySQL"],
      url: "https://github.com/cckinwest/employee-tracker",
      link: "https://drive.google.com/file/d/1QunKPEIgGmoXljrw4vrwh7wWC9Vr1TgH/view",
    },
    {
      pic: BlogApp,
      title: "BlogApp",
      description: "An app for making blogPosts and comments.",
      tags: ["bootstrap", "sequelize", "handlebar"],
      url: "https://github.com/cckinwest/Week14-TechBlog",
      link: "https://week14-techblog-app-e3396b82dfd7.herokuapp.com/",
    },
    {
      pic: eCommerceApp,
      title: "eCommerceApp",
      description: "An eShop for comphrensive shopping experience.",
      tags: ["sequelize", "stripe", "handlebar"],
      url: "https://github.com/cckinwest/Project2-WearCorp",
      link: "https://wearcorp-app-098bafb41b6f.herokuapp.com/",
    },
  ];

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
          fontFamily: "Montserrat, sans-serif",
          padding: "10px",
          fontWeight: "bolder",
        }}
      >
        Portfolio
      </h2>
      <div className="container">
        <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
          {projects.map((project) => {
            return (
              <div className="col-md-6 col-lg-4 col-sm-12 g-3">
                <Card
                  pic={project.pic}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  url={project.url}
                  link={project.link}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
