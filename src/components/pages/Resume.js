import React from "react";
import Section from "../Section";
import myResume from "../download/Resume.pdf";

function Resume() {
  const jobs = [
    {
      jobTitle: "Administrative Assistant",
      jobCompany: "University Hospitals Coventry and Warwickshire",
      jobTime: "Mar 2023 to Now",
      jobDescriptions: [
        "Managing the in-house erostering software",
        "Answering queries from nurses and patients",
        "Handling and Organizing paperwork",
      ],
    },
    {
      jobTitle: "WareHouse Assistant",
      jobCompany: "World Of Books",
      jobTime: "Oct 2022 to Mar 2023",
      jobDescriptions: [
        "Identifying issues of books/CDs with an eye of details",
        "Using manual pallet truck to deliver parcels",
      ],
    },
    {
      jobTitle: "Volunteer",
      jobCompany: "St. Francis Church",
      jobTime: "Jul 2022 to Oct 2022",
      jobDescriptions: [
        "Managing the reception area and welcoming visitors to the church",
        "Acting as first point of contact for clients needing career support and financial assistance",
      ],
    },
    {
      jobTitle: "Editor of Mathematics",
      jobCompany: "Oxford University Press",
      jobTime: "Apr 2014 to May 2022",
      jobDescriptions: [
        "Maintaining the accuracy of large volumes of data",
        "Managing projects independently with minimal supervision",
        "Prioritizing tasks and estimating time",
      ],
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
          fontFamily: "Roboto, sans-serif",
          padding: "10px",
          fontWeight: "bolder",
        }}
      >
        Resume
      </h2>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        <div className="row">
          {jobs.map((job) => {
            return (
              <div className="col-md-6 col-sm-12 g-3">
                <Section
                  jobTitle={job.jobTitle}
                  jobCompany={job.jobCompany}
                  jobTime={job.jobTime}
                  jobDescriptions={job.jobDescriptions}
                />
              </div>
            );
          })}
          <div className="row mb-3">
            <button
              className="btn btn-outline-primary btn-lg"
              onClick={() => {
                window.open(myResume);
              }}
            >
              Download my Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
