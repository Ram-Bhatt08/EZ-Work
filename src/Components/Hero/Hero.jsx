import React from "react";
import "./Hero.css";
 import heroImage from "./1.png"; // ✅ Proper variable name

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <img
          src={heroImage} // ✅ Use the imported image variable
          alt="Mandala"
          className="hero-bg"
        />
        <h1>
          <span>V</span>Films
        </h1>
      </div>

      <div className="hero-right">
        <h2>Varnan is where stories find their voice and form</h2>
        <p className="hero-subtitle">Films . Brands . Art</p>
        <p className="hero-text">
          Since 2009, V’ve been telling stories — stories of people,
          their journeys, and the places that shape them. Some begin in
          polished boardrooms, others in humble village squares. But
          every story starts the same way — by listening with intent.
          V believes that trust, patience, and an eye for the unseen
          capture what truly matters. V doesn’t just tell stories — V honors them.
        </p>
      </div>
    </section>
  );
};

export default Hero;
