import React from "react";
import Header from "../components/Header";

export default function Projects() {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />

        <hr className="m-0" />

        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Projects</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-3 text-primary">Territory</h3>
                <p className="lead">
                  The Territory Project focuses on developing a detailed map
                  system for clients using PHP, HTML, CSS, Bing Maps, and
                  JavaScript. My role includes:
                </p>
                {/* <div className="task-list"> */}
                <ul>
                  <li>
                    <strong>Client Communication:</strong> regularly interact
                    with clients to understand their requirements and ensure the
                    project meets their expectations.
                  </li>
                  <li>
                    <strong>Feature Implementation:</strong> I build and
                    integrate features using PHP and JavaScript to enhance the
                    functionality of the map system.
                  </li>
                  <li>
                    <strong>Issue Resolution:</strong> I quickly address and
                    resolve any issues that arise to keep the project on track.
                  </li>
                  <li>
                    <strong>Database Management:</strong> I manage and optimize
                    database operations using HeidiSQL to ensure the system
                    performs efficiently.
                  </li>
                </ul>
                {/* </div> */}
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-3 text-primary">Eqnaa</h3>
                <p className="lead">
                  In the EQNAA project, I was responsible for developing APIs
                  for various components and pages. My role included:
                </p>
                <ul>
                  <li>
                    <strong>Creating APIs:</strong> I designed and built APIs
                    that allowed different parts of the project to communicate
                    effectively.
                  </li>
                  <li>
                    <strong>Implementing Interfaces:</strong> I implemented
                    these APIs to ensure smooth interaction between various
                    project elements.
                  </li>
                  <li>
                    <strong>Ensuring Connectivity:</strong> The APIs I developed
                    were crucial for connecting different components, which
                    helped the project run smoothly and successfully.
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-3 text-primary">
                  Human Resource Management (HRM) System
                </h3>
                <p className="lead">
                  The HRM system is designed to manage various HR functions
                  efficiently. Developed with React on the frontend and Laravel
                  on the backend, it offers a robust and modern solution.
                </p>
                <p className="lead">
                  My role in the project involved working on several key areas:
                </p>
                <ul>
                  <li>
                    <strong>Attendance Management:</strong> Developed features
                    to track and manage employee attendance.
                  </li>
                  <li>
                    <strong>Task Management:</strong> Created functionalities
                    for task creation, assignment, and tracking.
                  </li>
                  <li>
                    <strong>Invoice Processing:</strong> Integrated features to
                    handle billing and payments.
                  </li>
                  <li>
                    <strong>Leave Management:</strong> Built the system for
                    managing leave applications and approvals.
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-3 text-primary">In-House Websites</h3>
                <p className="lead">
                  In developing various in-house websites, my main roles were
                  managing backend functionality, ensuring database
                  connectivity, and adding JavaScript functionality to enhance
                  user interactions.
                </p>
                <p className="lead">My key responsibilities included:</p>
                <ul>
                  <li>
                    <strong>Backend Functionality:</strong> Developed and
                    maintained server-side logic to support website operations.
                  </li>
                  <li>
                    <strong>Database Connectivity:</strong> Managed database
                    connections and queries for reliable data handling.
                  </li>
                  <li>
                    <strong>JavaScript Functionality:</strong> Added interactive
                    features and dynamic content to improve user experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
}
