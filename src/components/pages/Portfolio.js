import React from "./react";
import Card from "../Card";

function Portfolio() {
  const projects = [
    {
      pic: "../pics/schedulerApp.png",
      title: "QuizApp",
      description: "You will not miss anything with this app.",
      tags: ["localStorage"],
      url: "https://github.com/cckinwest/work-day-scheduler",
    },
    {
      pic: "../pics/quizApp.png",
      title: "QuizApp",
      description: "An app fetching weather information from API.",
      tags: ["API", "localStorage"],
      url: "https://github.com/cckinwest/Quiz-app",
    },
    {
      pic: "../pics/investmentApp.png",
      title: "InvestmentApp",
      description: "An app fetching finance data and news for investment.",
      tags: ["API", "localStorage", "chartJS"],
      url: "https://github.com/cckinwest/trial_project/",
    },
    {
      pic: "../pics/managementDB.png",
      title: "ManagementDB",
      description: "A backend managing data of a company.",
      tags: ["inquirer", "mySQL"],
      url: "https://github.com/cckinwest/employee-tracker",
    },
    {
      pic: "../pics/blogApp.png",
      title: "BlogApp",
      description: "An app for making blogPosts and comments.",
      tags: ["bootstrap", "sequelize", "handlebar"],
      url: "https://github.com/cckinwest/Week14-TechBlog",
    },
    {
      pic: "../pics/eCommerceApp.png",
      title: "eCommerceApp",
      description: "An eShop for comphrensive shopping experience.",
      tags: ["sequelize", "stripe", "handlebar"],
      url: "https://github.com/cckinwest/Project2-WearCorp",
    },
  ];

  return (
    <div className="projectsContainer">
      {projects.map((project) => {
        return (
          <Card
            pic={project.pic}
            title={project.title}
            description={project.description}
            tags={project.tags}
            url={project.url}
          />
        );
      })}
    </div>
  );
}

export default Portfolio;
