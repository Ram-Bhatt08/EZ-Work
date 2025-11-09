import React from "react";
import "./Team.css"; // ✅ Import the CSS file
import one from "./1.png";
import two from "./2.png";

const Team = () => {
  return (
    <div className="team-container">
      {/* Main Content */}
      <div className="team-main">
        {/* Left Side */}
        <div className="team-left">
          {/* Sticky Note */}
          <div className="sticky-note">
            Some craft films. Some build brands. Some curate art. We bring it
            all together – a collective of storytellers driven by one belief:
            every project deserves to be more than just a message; it should
            become a masterpiece.
            <br />
            <br />
            From first spark to final frame, from raw ideas to timeless visuals –
            we shape stories that stay with you.
          </div>

          {/* Building Illustration */}
          <div className="building-container">
            <img src={one} className="people"></img>

          </div>

          {/* Arrow */}
          <svg className="arrow-right" viewBox="0 0 120 120">
            <path
              d="M 10 60 Q 40 20, 70 60 T 110 40"
              stroke="#2c3e50"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
            <path
              d="M 105 35 L 110 40 L 105 45"
              stroke="#2c3e50"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          <div className="label branding-label">Branding Experts</div>
        </div>

        {/* Right Side */}
        <div className="team-right">
          <svg className="arrow-left" viewBox="0 0 140 100">
            <path
              d="M 10 50 Q 70 10, 130 50"
              stroke="#2c3e50"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
            <path
              d="M 125 45 L 130 50 L 125 55"
              stroke="#2c3e50"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          <div className="label filmmakers-label">Film Makers</div>

          <div className="team-silhouettes">
         <img src={two} className="build"></img>
          </div>

          <div className="art-curators">
            <div className="label">Art Curators</div>
            
          </div>

          <div className="cta-section">
            <p>Take a closer look at the stories V bring to life.</p>
            <button
              className="cta-button"
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
