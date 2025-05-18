import React from "react";
import "./aboutSec.css";
import Title from "../Title Section/title.jsx";
import tbLogo from "../../assets/Thunderbird/Thunderbird_icon.png";
import olLogo from "../../assets/Outlook/Outlook_icon.png";
import gmLogo from "../../assets/Gmail/Gmail_icon.png";
import { Link } from "react-router-dom";

const aboutSec = () => {
  return (
    <div className="aboutSection">
      <section className="about">
        <div className="caption">
          <Title
            title={"Mozilla Thunderbird"}
            subTitle={
              "Thunderbird is a free and open source email client developed by Mozilla, designed to manage multiple email accounts with features like smart folders, powerful spam filtering, message encryption, calendar integration, and extensive customization through add ons and themes, all while prioritizing user privacy and security."
            }
          />
          <Link to="/thunderbird" className="button">
            See more
          </Link>
        </div>
        <div className="imgAboutSec">
          <img src={tbLogo} alt="" />
        </div>
      </section>
      <section className="about">
        <div className="imgAboutSec">
          <img src={gmLogo} alt="" />
        </div>
        <div className="caption right">
          <Title
            title={"Google Mail"}
            subTitle={
              "Google Mail aka Gmail is a free, web based email service developed by Google that offers powerful search, automatic email categorization, spam filtering, and seamless integration with other Google services like Drive, Calendar, and Meet, making it a popular choice for both personal and professional communication."
            }
          />
          <Link to="/gmail" className="button">
            See more
          </Link>
        </div>
      </section>
      <section className="about">
        <div className="caption">
          <Title
            title={"Microsoft Outlook"}
            subTitle={
              "Microsoft Outlook is a feature rich email client and personal information manager that integrates email, calendar, contacts, tasks, and notes into a single platform, offering advanced organization, scheduling, and collaboration tools especially well suited for business and enterprise use through its seamless integration with Microsoft 365 services."
            }
          />
          <Link to="/outlook" className="button">
            See more
          </Link>
        </div>
        <div className="imgAboutSec">
          <img src={olLogo} alt="" />
        </div>
      </section>
    </div>
  );
};

export default aboutSec;
