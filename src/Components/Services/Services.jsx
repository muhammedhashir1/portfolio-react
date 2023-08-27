import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>ReactJS Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Application Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User interfaces using the React JavaScript library.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-End Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Component Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Single-Page Applications (SPAs).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deployment and Hosting.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Version Control.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Collaboration.</p>
            </li>
          </ul>
        </article>
        {/* <!--END OF React Developer--> */}
        {/* <article className="service">
          <div className="service__head">
            <h3>Websites</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Attractive and Unique websites</p>
            </li>
          </ul>
        </article> */}
        {/* <!--END OF Websites and Digital Platform--> */}
        {/* <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile app UX and UI design services.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-platform experiences design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design workshops.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web design services.</p>
            </li>
          </ul>
        </article> */}
        {/* <!--END OF UI/UX--> */}
      </div>
    </section>
  );
};

export default Services;
