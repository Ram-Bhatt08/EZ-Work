import React, { useState } from "react";
import "./Portfolio.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
const videos = [
  "https://www.youtube.com/embed/tgbNymZ7vqY",
  "https://www.youtube.com/embed/sBws8MSXN7A",
  "https://www.youtube.com/embed/ysz5S6PUM-U",
];

export default function Portfolio() {
  const [index, setIndex] = useState(0);

  const prevVideo = () =>
    setIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const nextVideo = () =>
    setIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

  return (
    <section className="portfolio-container">
      <div className="portfolio-content">
        <h2 className="portfolio-title">The Highlight Reel</h2>
        <p className="portfolio-subtitle">
          Watch the magic we’ve captured.
        </p>

        <div className="portfolio-video-frame">
          <button className="nav-btn left" onClick={prevVideo}>
            <ChevronLeft size={30} />
          </button>

          <div className="film-frame">
            <iframe
              src={videos[index]}
              title="Portfolio Video"
              frameBorder="0"
              allowFullScreen
              className="portfolio-video"
            ></iframe>
          </div>

          <button className="nav-btn right" onClick={nextVideo}>
            <ChevronRight size={30} />
          </button>
        </div>
      </div>

      {/* Background Illustrations */}
      <div className="portfolio-bg left"></div>
      <div className="portfolio-bg right"></div>
    </section>
  );
}
