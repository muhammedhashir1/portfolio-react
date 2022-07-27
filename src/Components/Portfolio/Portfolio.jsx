import React from "react";
import "./Portfolio.css";
import IMG1 from "../../Assets/netflix.jpg";
import IMG2 from "../../Assets/olx.clone.png";
import IMG3 from "../../Assets/bmi.JPG";
import IMG4 from "../../Assets/cox.cart.JPG";
import IMG5 from "../../Assets/react-portfolio.JPG";
import IMG6 from "../../Assets/cox.JPG";
import IMG7 from "../../Assets/portfolio.jpg";
import IMG8 from "../../Assets/steak.JPG";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Netflix clone",
    description: "Bootstrapped with ReactJs",
    github: "https://github.com/muhammedhashir1/netflix-clone",
    demo: "https://muhammedhashir1.github.io/netflix-clone/"
  },
  {
    id: 2,
    image: IMG2,
    title: "OLX-Clone",
    description: "Bootstrapped with ReactJs",
    github: "https://github.com/muhammedhashir1/olx",
    demo: "https://muhammedhashir1.github.io/olx/"
  },
  {
    id: 3,
    image: IMG3,
    title: "BMI calculator",
    description: "Bootstrapped with Reactjs",
    github: "https://github.com/muhammedhashir1/bmi-calculator",
    demo: "https://muhammedhashir1.github.io/bmi-calculator/"
  },
  {
    id: 4,
    image: IMG4,
    title: "COX-Cart",
    description: "NodeJs,Handlebars,Express,MongoDB",
    github: "https://github.com/muhammedhashir1/shopping-cart-cox",
    demo: "https://muhammedhashir1.github.io/shopping-cart-cox/"
  },
  {
    id: 5,
    image: IMG5,
    title: "React-Portfolio",
    description: "Bootstrapped with Reactjs",
    github: "https://github.com/muhammedhashir1/portfolio-react",
    demo: "https://muhammedhashir1.github.io/portfolio-react/"
  },
  {
    id: 6,
    image: IMG6,
    title: "Cox Gents&boys",
    description: "Responsive static website",
    github: "https://github.com/muhammedhashir1/cox-static-website",
    demo: "https://muhammedhashir1.github.io/cox-static-website/"
  },
  {
    id: 7,
    image: IMG7,
    title: "My Portfolio",
    description: "Responsive static website",
    github: "https://github.com/muhammedhashir1/portfolio",
    demo: "https://muhammedhashir1.github.io/portfolio/"
  },
  {
    id: 8,
    image: IMG8,
    title: "Steak-Shop",
    description: "static website",
    github: "https://github.com/muhammedhashir1/steak-shop",
    demo: "https://muhammedhashir1.github.io/steak-shop/"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,description,github,demo})=>{
            return(
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <h5>{description}</h5>
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