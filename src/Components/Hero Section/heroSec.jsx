import React from "react";
import "./heroSec.css";
import tbLogo from "../../assets/Thunderbird/Thunderbird_icon.png";
import olLogo from "../../assets/Outlook/Outlook_icon.png";
import gmLogo from "../../assets/Gmail/Gmail_icon.png";
import { Link } from "react-router-dom";

const heroSec = () => {
  return (
    <div className="hero">
      <div className="discribtion">
        <h1>Get EMAIL setup easily here!</h1>
        <p style={{color:"white"}}>
          Whether you're using Thunderbird, Outlook, or Gmail, this all-in-one
          guide will help you set up, configure, and optimize your email
          experience with ease. From adding accounts to customizing settings,
          we've got step-by-step instructions tailored for each platform so you
          can stay connected, organized, and stress free.
        </p>
      </div>
      <div className="heroContainer">
        <div className="heroSec">
          <Link to="/thunderbird">
            <img src={tbLogo} alt="Thunderbird Logo" />
          </Link>
          <h2>Mozilla Thunderbird</h2>
        </div>
        <div className="heroSec ">
          <Link to="/outlook">
            <img src={olLogo} alt="Outlook Logo" />
          </Link>
          <h2>Microsoft Outlook</h2>
        </div>
        <div className="heroSec">
          <Link to="/gmail">
            <img src={gmLogo} alt="Gmail Logo" />
          </Link>
          <h2>Google Mail</h2>
        </div>
      </div>
    </div>
  );
};

export default heroSec;
