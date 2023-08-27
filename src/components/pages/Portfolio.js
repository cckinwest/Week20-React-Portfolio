import React from "react";
import Card from "../Card";

import SchedulerApp from "../pics/schedulerApp.png";
import QuizApp from "../pics/quizApp.png";
import InvestmentApp from "../pics/investmentApp.png";
import ManagementDB from "../pics/managementDB.png";
import BlogApp from "../pics/blogApp.png";
import eCommerceApp from "../pics/eCommerceApp.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Portfolio() {
  const projects = [
    {
      pic: SchedulerApp,
      title: "SchedulerApp",
      description: "You will not miss anything with this app.",
      tags: ["localStorage"],
      url: "https://github.com/cckinwest/work-day-scheduler",
    },
    {
      pic: QuizApp,
      title: "QuizApp",
      description: "An app fetching weather information from API.",
      tags: ["API", "localStorage"],
      url: "https://github.com/cckinwest/Quiz-app",
    },
    {
      pic: InvestmentApp,
      title: "InvestmentApp",
      description: "An app fetching finance data and news for investment.",
      tags: ["API", "localStorage", "chartJS"],
      url: "https://github.com/cckinwest/trial_project/",
    },
    {
      pic: ManagementDB,
      title: "ManagementDB",
      description: "A backend managing data of a company.",
      tags: ["inquirer", "mySQL"],
      url: "https://github.com/cckinwest/employee-tracker",
    },
    {
      pic: BlogApp,
      title: "BlogApp",
      description: "An app for making blogPosts and comments.",
      tags: ["bootstrap", "sequelize", "handlebar"],
      url: "https://github.com/cckinwest/Week14-TechBlog",
    },
    {
      pic: eCommerceApp,
      title: "eCommerceApp",
      description: "An eShop for comphrensive shopping experience.",
      tags: ["sequelize", "stripe", "handlebar"],
      url: "https://github.com/cckinwest/Project2-WearCorp",
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "#FFF6BF",
      }}
    >
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
