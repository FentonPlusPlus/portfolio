import React from "react";
import "./about.css";
// import AboutImg from "../../assets/about.jpg";
// import CV from "../../assets/Smith-Cv.pdf";

const About = () => {
  const aboutMe = `I became interested in coding whilst working for a small, but great, indie game studio called Gamechuck. Here I started studying Python in my spare time, which eventually led to me learning software development with Java, and then eventually web development with Javascript at the School of Code.

  Though I am passionate about many things, ultimately I just love to create stuff. So... Talk to me sometime, let's share interests, and who knows what we might have in common.`;

  return (
    <section className="about section" id="about">
      
      <div className="about__container container grid">
      <h2 className="about__title">About Me</h2>
      <span className="about__subtitle" padding="50%">{aboutMe}</span>
        </div>
    </section>
  );
};

export default About;
