import React from "react";
import "./Services.css";
import footerImage from "./1.jpg"; // ✅ Correct image import

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">
          The storyboard reveals the breadth of our craft.
        </h2>

        <div className="services-grid">
          <div className="service-card">
            <div className="tape tape-left"></div>
            <img
              src="https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg"
              alt="Film Production"
            />
            <p>Film Production</p>
          </div>

          <div className="service-card">
            <div className="tape tape-center"></div>
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
              alt="Branding"
            />
            <p>Branding</p>
          </div>

          <div className="service-card">
            <div className="tape tape-right"></div>
            <img
              src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
              alt="Art Curation"
            />
            <p>Art Curation</p>
          </div>
        </div>

        <div className="services-footer">
          <img src={footerImage} alt="footer" className="foot" />
        </div>
      </div>
    </section>
  );
}
