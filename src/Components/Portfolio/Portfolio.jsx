import React from "react";
import "./Portfolio.css";
import IMG1 from "../../Assets/netflix.jpg";
import IMG2 from "../../Assets/portfolio.jpg";
import IMG3 from "../../Assets/cox.JPG";
import IMG4 from "../../Assets/bmi.JPG";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Netflix clone",
    github: "https://github.com/muhammedhashir1/netflix-clone",
    demo: "https://muhammedhashir1.github.io/netflix-clone/",
  },
  {
    id: 2,
    image: IMG2,
    title: "My Portfolio",
    github: "https://github.com/muhammedhashir1/portfolio",
    demo: "https://muhammedhashir1.github.io/portfolio/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Cox Gents&boys ",
    github: "https://github.com/muhammedhashir1/cox-static-website",
    demo: "https://muhammedhashir1.github.io/cox-static-website/",
  },
  {
    id: 4,
    image: IMG4,
    title: "BMI calculator",
    github: "https://github.com/muhammedhashir1/bmi-calculator",
    demo: "https://muhammedhashir1.github.io/bmi-calculator/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a
              href={github}
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
