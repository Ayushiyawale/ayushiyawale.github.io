import React from "react";
import Header from "../components/Header";
import Education from "./Education";
import Experience from "./Experience";

const Home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Ayushi
              <span className="text-primary">Yawale</span>
            </h1>
            <div className="subheading mb-5">
              EWS-372, Ram Nagar Khandwa [M.P.] · (+91) 7974070130 ·
              <a href="mailto:ayushiyawale4@gmail.com">
                ayushiyawale4@gmail.com
              </a>
            </div>
            <p className="lead mb-5">
              Detail-oriented Web Developer with 2+ years of experience in HTML,
              CSS, JavaScript, and PHP, and a strong background in frontend
              development using React and Next.js. Demonstrated success in
              delivering responsive and high-performance websites. Enthusiastic
              team player committed to continuous learning and improvement.
            </p>
            <div className="social-icons">
              <a className="social-icon" href="#!">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-github"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        {/* <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Senior Web Developer</h3>
                <div className="subheading mb-3">Intelitec Solutions</div>
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. User generated
                  content in real-time will have multiple touchpoints for
                  offshoring.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">March 2013 - Present</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Web Developer</h3>
                <div className="subheading mb-3">Intelitec Solutions</div>
                <p>
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">December 2011 - March 2013</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Junior Web Designer</h3>
                <div className="subheading mb-3">Shout! Media Productions</div>
                <p>
                  Podcasting operational change management inside of workflows
                  to establish a framework. Taking seamless key performance
                  indicators offline to maximise the long tail. Keeping your eye
                  on the ball while performing a deep dive on the start-up
                  mentality to derive convergence on cross-platform integration.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">July 2010 - December 2011</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Web Design Intern</h3>
                <div className="subheading mb-3">Shout! Media Productions</div>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits. Dramatically visualize customer
                  directed convergence without revolutionary ROI.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">September 2008 - June 2010</span>
              </div>
            </div>
          </div>
        </section> */}
        <Experience />
        <hr className="m-0" />
        <Education />
        {/* <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">University of Colorado Boulder</h3>
                <div className="subheading mb-3">Bachelor of Science</div>
                <div>Computer Science - Web Development Track</div>
                <p>GPA: 3.23</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">August 2006 - May 2010</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">James Buchanan High School</h3>
                <div className="subheading mb-3">Technology Magnet Program</div>
                <p>GPA: 3.56</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">August 2002 - May 2006</span>
              </div>
            </div>
          </div>
        </section> */}
        <hr className="m-0" />

        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>
              <li class="list-inline-item">
                <i class="fas fa-database"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-php"></i>
              </li>
            </ul>
            <div class="subheading mb-3">Tools</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                VsCode
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Postman
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Filezila
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                HeidiSQL
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>
              Beyond my professional achievements, I have a profound interest in
              dancing and practicing yoga, which significantly contribute to my
              personal growth and well-being. Dancing is a cherished hobby that
              brings me joy and allows me to unwind, while yoga offers a
              structured practice for enhancing my physical fitness, mental
              focus, and inner peace. I also have a deep appreciation for music,
              which serves as a source of relaxation and inspiration in my life.
              My commitment to continual learning drives me to explore new ideas
              through reading and online courses. Additionally, I find
              fulfillment in helping others, as I am passionate about giving
              back to the community and supporting those in need.
            </p>
          </div>
        </section>
        <hr className="m-0" />

        {/* <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Awards & Certifications</h2>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Google Analytics Certified Developer
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Mobile Web Specialist - Google Certification
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Emerging Tech
                Competition 2009
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Adobe Creative Jam 2008
                (UI Design Category)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                2<sup>nd</sup>
                Place - University of Colorado Boulder - Emerging Tech
                Competition 2008
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                Place - James Buchanan High School - Hackathon 2006
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                3<sup>rd</sup>
                Place - James Buchanan High School - Hackathon 2005
              </li>
            </ul>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Home;
