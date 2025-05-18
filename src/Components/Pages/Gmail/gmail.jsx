import React from "react";
import "./gmail.css";
import Guild from "./guild.jsx";
import NavBar from "../../Navigation Bar/navBar.jsx";
import Footer from "../../Footer Section/footer.jsx";
import ArrayList from "../../ListData/Arraylist.jsx";
import Feature from "../../BoxFeature/boxFeature.jsx";
import Step1 from "../../../assets/Gmail/Install/step1.png";
import Step2 from "../../../assets/Gmail/Install/step2.png";
import Step3 from "../../../assets/Gmail/Install/step3.png";
import Step4 from "../../../assets/Gmail/Install/step4.png";
import Step5 from "../../../assets/Gmail/Install/step5.png";
import Step6 from "../../../assets/Gmail/Install/step6.png";
import Step7 from "../../../assets/Gmail/Install/step7.png";
import Step8 from "../../../assets/Gmail/Install/step8.png";

const thunderList = [
  {
    title: "Step 1",
    image: Step1,
    text: (
      <li>
        Go to your browser and search for create google account or visit this
        link :
        <a
          href="https://support.google.com/accounts/answer/27441?hl=en&co=GENIE.Platform%3DAndroid"
          target="_blank"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Google.com
        </a>
        .
      </li>
    ),
  },
  {
    title: "Step 2",
    image: Step2,
    text: (
      <li>
        After open the wep page fill in your information. Then click on next.
      </li>
    ),
  },
  {
    title: "Step 3",
    image: Step3,
    text: <li>Fill in your date of birth. Then click on next.</li>,
  },
  {
    title: "Step 4",
    image: Step4,
    text: <li>Choose once or customize your email. And click next.</li>,
  },
  {
    title: "Step 5",
    image: Step5,
    text: <li>Create your password. Then click next.</li>,
  },
  {
    title: "Step 6",
    image: Step6,
    text: <li>Fill in your phone number to verify.</li>,
  },
  {
    title: "Step 7",
    image: Step7,
    text: (
      <li>
        Google will sent 6 digit code to your phone nunber, so verify it and
        click next.
      </li>
    ),
  },
  {
    title: "Step 8",
    image: Step8,
    text: (
      <li>
        Then your can add a recovery account or just skip. Lastly agree to all
        google term then you are done.
      </li>
    ),
  },
];

const features = [
  {
    heading: "Search Functionality",
    description:
      " Gmail uses Google’s search technology to help you quickly find emails using keywords, filters, and advanced operators.",
  },
  {
    heading: "Spam Filtering",
    description:
      "Gmail automatically detects and filters out spam, phishing, and malicious emails, keeping your inbox clean and safe.",
  },
  {
    heading: "Conversation Threading",
    description:
      "Emails are grouped into threads by subject, making it easy to follow ongoing conversations and see all related messages in one place.",
  },
  {
    heading: "Integrated Workspace",
    description:
      "Gmail seamlessly integrates with Google tools like Drive, Docs, Calendar, and Meet, enabling smooth collaboration and productivity.",
  },
  {
    heading: "Labels and Filters",
    description:
      "Instead of folders, Gmail uses labels and filters to organize emails, allowing more flexible and powerful message categorization.",
  },
  {
    heading: "Offline Access",
    description:
      "Gmail offers offline mode, so you can read, respond to, and search your emails without an internet connection. Changes sync once you're back online.",
  },
];

const tip = [
  {
    heading: "Tip 1: Use Filters and Labels",
    bullets: [
      "Automatically sort incoming emails by setting filters and applying labels to keep your inbox organized and reduce clutter.",
    ],
  },
  {
    heading: "Tip 2: Keyboard Shortcuts",
    bullets: [
      "Turn on keyboard shortcuts in settings to quickly navigate, compose, delete, or archive emails without using your mouse.",
    ],
  },
  {
    heading: "Tip 3: Undo Send",
    bullets: [
      "Activate the Undo Send feature in settings to give yourself a few seconds to cancel an email after clicking send—great for fixing mistakes.",
    ],
  },
];

const additional = [
  {
    heading: "Official Resources:",
    bullets: ["Support: https://support.google.com/mail/#topic=7065107"],
  },
  {
    heading: "Community Help:",
    bullets: ["r/Gmail on Reddit: https://www.reddit.com/r/GMail/"],
  },
];

const gmail = () => {
  return (
    <>
      <NavBar />
      <div className="gmail" id="introduction">
        <div className="wrap">
          <h1 className="Title">Google Mail</h1>
          <p className="ThunderbirdP">
            Google’s Gmail is a free, cloud-based email service that blends generous storage, 
            intelligent organization, and tight integration with the wider Google Workspace ecosystem. 
            Accessible from any modern browser or the dedicated mobile apps, it offers 15 GB of shared storage across Gmail,
            stars, and automatic category tabs (Primary, Social, Promotions, Updates, Forums) help keep even the busiest inbox under control.
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
          <Feature title="Key Features of Gmail" features={features} />
        </div>
        <div className="box" id="tips">
          <Feature title="Essential Tips for Gmail" features={tip} />
        </div>
        <div className="box" id="additional">
          <Feature title="Additional Resources" features={additional} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default gmail;
