import React from "react";
import "./boxFeature.css";

const boxFeature = ({ title, features }) => {
  return (
    <div className="feature-grid-wrapper">
      <h2 className="feature-title Title">{title}</h2>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3 className="feature-heading">{feature.heading}</h3>
            {feature.description && (
              <p className="feature-description">{feature.description}</p>
            )}
            {feature.bullets && (
              <ul className="feature-list">
                {feature.bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default boxFeature;
