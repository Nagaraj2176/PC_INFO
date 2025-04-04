import React from "react";
import "../static/AboutPageCard.css";

export default function AboutPageCard({ title, imgsrc, content }) {
  return (
    <div className="about-card">
      <div className="about-card-image">
        <img src={imgsrc} alt="UI/UX Review Check" />
      </div>
      <div className="about-card-content">
        <h2 className="about-card-title">{title}</h2>
        <p className="about-card-text">{content}</p>
      </div>
    </div>
  );
}
