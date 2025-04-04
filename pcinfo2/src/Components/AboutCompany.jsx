import React from "react";
import "../static/AboutCompany.css";

export default function AboutCompany() {
  return (
    <div className="about-company-card">
      <div className="company-info">
        <div>
          <h3>
            <strong>JPMorgan Chase Bank</strong>
          </h3>
          <p>Leading global financial services firm offering investment banking and asset management.</p>
        </div>
      </div>
      <div className="company-logo">
        <a href="https://www.jpmorganchase.com/" target="_blank" rel="noopener noreferrer">
          <img src="your-logo.png" alt="JPMorgan Bank" />
        </a>
      </div>
    </div>
  );
}
