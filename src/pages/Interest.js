import React from "react";
import Header from "../components/Header";

const Interest = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
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
            {/* <p class="mb-0">
              When forced indoors, I follow a number of sci-fi and fantasy genre
              movies and television shows, I am an aspiring chef, and I spend a
              large amount of my free time exploring the latest technology
              advancements in the front-end web development world.
            </p> */}
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Interest;
