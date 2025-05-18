import React from "react";
import "./outlook.css";
import Guild from "./guild.jsx";
import NavBar from "../../Navigation Bar/navbar.jsx";
import Footer from "../../Footer Section/footer.jsx";
import ArrayList from "../../ListData/Arraylist.jsx";
import Feature from "../../BoxFeature/boxFeature.jsx";
import Install1 from "../../../assets/Outlook/Install/step1.png";
import Install2 from "../../../assets/Outlook/Install/step2.png";
import Install3 from "../../../assets/Outlook/Install/step3.png";
import Install4 from "../../../assets/Outlook/Install/step4.png";

const thunderList = [
  {
    title: "Step 1",
    image: Install1,
    text: (
      <li>
        Go to your browser and search for outlook download or visit this link :
        <a
          href="https://www.microsoft.com/en-us/microsoft-365/outlook/outlook-for-windows"
          target="_blank"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Office.com
        </a>
        .
      </li>
    ),
  },
  {
    title: "Step 2",
    image: Install2,
    text: (
      <li>
        "Download Microsoft Outlook Run the installer and follow the
        installation wizard Launch Microsoft Outlook once installed".
      </li>
    ),
  },
  {
    title: "Step 3",
    image: Install3,
    text: (
      <li>
        fill your information and when Outlook opens for the first time, it will
        prompt you to add an email account Enter your email address and click
        "Continue".
      </li>
    ),
  },
  {
    title: "Step 4",
    image: Install4,
    text: <li>Then your should be done.</li>,
  },
];

const features = [
  {
    heading: "Email Management",
    description:
      "Organize your emails with folders, categories, and rules. Use the Focused Inbox to prioritize important messages.",
  },
  {
    heading: "Calendar",
    description:
      "Schedule meetings, appointments, and events. Set reminders and share your calendar with colleagues.",
  },
  {
    heading: "Contacts",
    description:
      "Store and manage your contacts. Create contact groups for easy communication with teams.",
  },
  {
    heading: "Tasks",
    description:
      "Create to-do lists and set deadlines. Track your progress and never miss important deadlines.",
  },
  {
    heading: "Notes",
    description:
      "Jot down ideas and information quickly. Access your notes from any device with Outlook installed.",
  },
  {
    heading: "Integration",
    description:
      "Seamlessly works with other Microsoft 365 apps like Word, Excel, and Teams for enhanced productivity.",
  },
];

const tip = [
  {
    heading: "Tip 1: Organize Your Inbox",
    bullets: [
      "Create folders for different categories of emails",
      "Use the Focused Inbox to see important emails first",
      "Set up rules to automatically sort incoming emails",
    ],
  },
  {
    heading: "Tip 2: Calendar and Tasks",
    bullets: [
      "Switch to Calendar view to manage appointments",
      "Create tasks for to-do items",
      "Set reminders for important deadlines",
    ],
  },
  {
    heading: "Tip 3: Advanced Features",
    bullets: [
      "Schedule emails to send later",
      "Use Quick Steps for common actions",
      "Set up email signatures for professional communication",
      "Create contact groups for mass emails",
    ],
  },
];

const additional = [
  {
    heading: "Official Resources:",
    bullets: [
      "Support: support.microsoft.com/outlook",
      "Training Center: support.microsoft.com/training",
      "Blog: techcommunity.microsoft.com/outlook-blog",
    ],
  },
  {
    heading: "Video Tutorials:",
    bullets: [
      "Getting Started with Outlook",
      "Advanced Email Management",
      "Calendar and Scheduling",
      "Outlook Tips and Tricks",
    ],
  },
];

const outlook = () => {
  return (
    <>
      <NavBar />
      <div className="outlook" id="introduction">
        <div className="wrap">
          <h1 className="Title">Microsoft Outlook</h1>
          <p className="ThunderbirdP">
            Microsoft Outlook is a powerful email client and personal
            information manager developed by Microsoft. It is widely used for
            managing emails, calendars, contacts, tasks, and more, both in
            professional and personal environments. Outlook offers seamless
            integration with Microsoft 365, advanced security features, and
            productivity tools to help you stay organized and connected.
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
          <Feature title="Key Features of Outlook" features={features} />
        </div>
        <div className="box" id="tips">
          <Feature title="Essential Tips for Outlook" features={tip} />
        </div>
        <div className="box" id="additional">
          <Feature title="Additional Resources" features={additional} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default outlook;
