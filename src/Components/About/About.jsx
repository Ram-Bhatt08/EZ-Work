import React from "react";
import "./About.css";
import logo1 from "./1.jpg";
import mountain from "./2.jpg";

const About = () => {
  return (
    <section className="about-container">
      {/* LEFT SECTION */}
      <div className="about-left">
        <h2 className="about-heading">A montage of familiar faces and names.</h2>
        <p className="about-text">
          Some stories come from the biggest names. Others begin with bold,
          rising voices. We’ve been fortunate to walk alongside both —
          listening, creating, and building stories that matter.
        </p>

        <div className="about-stats">
          <div className="stat-card rotate-left">
            <h3>85+</h3>
            <p>Projects</p>
          </div>
          <div className="stat-card rotate-mid">
            <h3>50+</h3>
            <p className="orange">Happy Clients</p>
          </div>
          <div className="stat-card rotate-right border-highlight">
            <h3>10+</h3>
            <p className="red">Experts Team</p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="about-right">
        <p className="about-quote">
          Every project is more than just a brief – <br />
          it’s a new chapter waiting to be written. <br />
          Together, we’ve crafted tales that inspire, <br />
          connect and endure.
        </p>

        <div className="brand-logos">
          {/* <img src={logo1} alt="brand logo" className="brand-logo-img" /> */}
        </div>

        {/* <img
          src={mountain}
          alt="mountain"
          className="mountain-img"
        /> */}
      </div>
    </section>
  );
};

export default About;
