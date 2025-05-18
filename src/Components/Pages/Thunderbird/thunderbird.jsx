import React from "react";
import "./thunderbird.css";
import Guild from "./guild.jsx";
import NavBar from "../../Navigation Bar/navbar.jsx";
import Footer from "../../Footer Section/footer.jsx";
import ArrayList from "../../ListData/Arraylist.jsx";
import Feature from "../../BoxFeature/boxFeature.jsx";
import Step1 from "../../../assets/Thunderbird/Install/ThunderbirdDesktop(1).png";
import Step2 from "../../../assets/Thunderbird/Install/ThunderbirdDesktop(2).png";
import Step3 from "../../../assets/Thunderbird/Install/ThunderbirdDesktop(3).png";
import Step4 from "../../../assets/Thunderbird/Install/ThunderbirdDesktop(4).png";
import Step5 from "../../../assets/Thunderbird/Install/ThunderbirdDesktop(5).png";
import Step6 from "../../../assets/Thunderbird/Install/ThunderbirdDesktop(6).png";
import Step7 from "../../../assets/Thunderbird/Install/ThunderbirdDesktop(7).png";
import Step8 from "../../../assets/Thunderbird/Install/ThunderbirdDesktop(8).png";
import Step9 from "../../../assets/Thunderbird/Install/ThunderbirdDesktop(9).png";

const thunderList = [
  {
    title: "Step 1",
    image: Step1,
    text: (
      <li>
        Go to your browser and search for Thunderbird download or visit this
        link :
        <a
          href="https://www.thunderbird.net/en-US/"
          target="_blank"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Thunderbird.net
        </a>
        .
      </li>
    ),
  },
  {
    title: "Step 2",
    image: Step2,
    text: <li>"After open the wep page click on download."</li>,
  },
  {
    title: "Step 3",
    image: Step3,
    text: (
      <li>
        "Install the file and open it.Launch Mozilla Thunderbird once
        installed".
      </li>
    ),
  },
  {
    title: "Step 4",
    image: Step4,
    text: <li>Click on this to display Thunderbird manu.</li>,
  },
  {
    title: "Step 5",
    image: Step5,
    text: <li>Click on New Account.</li>,
  },
  {
    title: "Step 6",
    image: Step6,
    text: <li>Choose Email.</li>,
  },
  {
    title: "Step 7",
    image: Step7,
    text: (
      <li>Fill in your name, Email and password. Then click on continue.</li>
    ),
  },
  {
    title: "Step 8",
    image: Step8,
    text: <li>Fill in your information. Then click Done.</li>,
  },
  {
    title: "Step 9",
    image: Step9,
    text: <li>Click finish  You're all setup.</li>,
  },
];

const features = [
  {
    heading: "Email Management",
    description:
      "Organize your emails with folders, tags, and filters. Use the quick filter toolbar to find messages quickly.",
  },
  {
    heading: "Security",
    description:
      "Built-in phishing protection, encryption support, and automatic updates keep your communications secure.",
  },
  {
    heading: "Add-ons",
    description:
      "Extend functionality with hundreds of add-ons for calendars, contacts, productivity and more.",
  },
  {
    heading: "Multiple Accounts",
    description:
      "Manage all your email accounts (POP/IMAP) in one application with unified inbox and folders.",
  },
  {
    heading: "Search",
    description:
      "Powerful search tools with quick filters and saved search folders help you find messages instantly.",
  },
  {
    heading: "Customization",
    description:
      "Change themes, toolbars, and layouts to create your perfect email environment.",
  },
];

const tip = [
  {
    heading: "Tip 1: Organization",
    bullets: [
      "Create folders to organize your emails by creating new folders in the sidebar",
      "Set up message filters to automatically sort incoming messages (Tools > Message Filters)",
      "Use tags to categorize and prioritize your emails",
    ],
  },
  {
    heading: "Tip 2: Productivity",
    bullets: [
      "Install add-ons to enhance functionality (Tools > Add-ons)",
      "Use the calendar extension to manage appointments and events",
      "Create email templates for frequently sent messages",
    ],
  },
  {
    heading: "Tip 3: Security",
    bullets: [
      "Enable encryption for secure communication",
      "Set up master password to protect your saved passwords",
      "Regularly check for updates to ensure you have the latest security fixes",
    ],
  },
];

const additional = [
  {
    heading: "Official Resources:",
    bullets: [
      "Support: support.mozilla.org/thunderbird",
      "Thunderbird Documentation: support.mozilla.org/docs",
      "Thunderbird Blog: blog.thunderbird.net",
    ],
  },
  {
    heading: "Community Help:",
    bullets: [
      "Thunderbird Forums: support.mozilla.org/forums",
      "Stack Overflow Thunderbird Tag",
      "Reddit Thunderbird Community",
    ],
  },
];

const thunderbird = () => {
  return (
    <>
      <NavBar />
      <div className="thunderbird" id="introduction">
        <div className="wrap">
          <h1 className="Title">Mozilla Thunderbird</h1>
          <p className="ThunderbirdP">
            Thunderbird is a free and open-source email client developed by the
            Mozilla Foundation. It is designed to be a powerful and flexible
            email application, providing users with a range of features to
            manage their email accounts efficiently. Thunderbird supports
            multiple email protocols, including POP3 and IMAP, and offers
            advanced features such as message filtering, spam detection, and a
            robust search function. It also supports add-ons and themes,
            allowing users to customize their experience to suit their needs.
          </p>
          <div className="thunderList">
            <ul>
              <a href="#introduction">
                <li>Introduction</li>
              </a>
              <a href="#setup">
                <li>Setup</li>
              </a>
              <a href="#sentEmail">
                <li>Sent Email</li>
              </a>
              <a href="#keyFeatures">
                <li>Key Features</li>
              </a>
              <a href="#tips">
                <li>Tips</li>
              </a>
              <a href="#additional">
                <li>Resources</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <hr id="setup" style={{ margin: "0" }} />
      <div className="wrapper">
        <h1 className="Title" style={{ margin: "70px 0" }}>
          Installation and config
        </h1>
        <ArrayList data={thunderList} />
        <div className="box" id="sentEmail">
          <h1 className="Title" style={{ margin: "40px 0" }}>
            Send email
          </h1>
          <Guild />
        </div>
        <div className="box" id="keyFeatures">
          <Feature title="Key Features of Thunderbird" features={features} />
        </div>
        <div className="box" id="tips">
          <Feature title="Essential Tips for Thunderbird" features={tip} />
        </div>
        <div className="box" id="additional">
          <Feature title="Additional Resources" features={additional} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default thunderbird;
