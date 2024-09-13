import React from "react";
import Header from "../components/Header";

const Experience = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />

        <hr class="m-0" />

        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Senior Web Developer</h3>
                <div class="subheading mb-3">SFS Webtech Pvt. Ltd. Indore</div>
                <p>
                  As a Senior Web Developer at SFS WebTech, I worked with my
                  team to design and add new features, improving user
                  experience. I collaborated across teams to tackle complex
                  issues with creative solutions. I focused on frontend
                  development with React.js and JavaScript, building
                  user-friendly interfaces and connecting them with backend
                  systems. I also used Laravel for backend development, creating
                  strong and scalable server-side solutions.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">April 2024 - Present</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Web Developer</h3>
                <div class="subheading mb-3">Am Webtech Pvt. Ltd. Indore</div>
                <p>
                  Collaborated with team members to design and implement new
                  features, making the user experience better. Worked with
                  different teams to solve tricky problems with creative
                  solutions. Developed server-side code using PHP, HTML, and
                  JavaScript for various projects. Created back-end components
                  to link applications with web services. Designed user-facing
                  elements to blend with web APIs and server-side logic.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">December 2022 - March 2024</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Junior PHP Developer</h3>
                <div class="subheading mb-3">Am WebTech Pvt. Ltd. Indore</div>
                <p>
                  As a Junior PHP Developer, I contributed to building and
                  refining features to improve user interactions. I collaborated
                  with various teams to find effective solutions to technical
                  challenges. My role involved writing PHP, HTML, and JavaScript
                  code for server-side development, integrating applications
                  with web services, and creating user interfaces that worked
                  smoothly with APIs and backend systems.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">November 2021 - November 2022</span>
              </div>
            </div>
            {/* <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Web Design Intern</h3>
                <div class="subheading mb-3">Shout! Media Productions</div>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits. Dramatically visualize customer
                  directed convergence without revolutionary ROI.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">September 2008 - June 2010</span>
              </div>
            </div> */}
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Experience;
