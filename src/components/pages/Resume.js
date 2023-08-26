import React from "react";
import Section from "../Section";

function Resume() {
  const jobs = [
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
      jobTitle: "WareHouse Assistant",
      jobCompany: "World Of Books",
      jobTime: "Oct 2022 to Mar 2023",
      jobDescriptions: [
        "Identifying issues of books/CDs with an eye of details",
        "Using manual pallet truck to deliver parcels",
      ],
    },
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
  ];

  return (
    <div>
      {jobs.map((job) => {
        return (
          <Section
            jobTitle={job.jobTitle}
            jobCompany={job.jobCompany}
            jobTime={job.jobTime}
            jobDescriptions={job.jobDescriptions}
          />
        );
      })}
    </div>
  );
}

export default Resume;
