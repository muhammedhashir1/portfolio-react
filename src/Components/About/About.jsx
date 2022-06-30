import React from "react";
import "./About.css";
import ME from "../../Assets/about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GoProject } from "react-icons/go";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>0</small>
            </article>
            <article className="about__card">
              <GoProject className="about__icon" />
              <h5>Projects</h5>
              <small>6</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ratione. Ex excepturi veritatis molestiae corporis itaque eaque! Qui voluptatibus pariatur modi facere, aut at maxime. Quibusdam sit assumenda odit consectetur!</p>
        
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
