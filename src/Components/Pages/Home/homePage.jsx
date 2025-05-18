import React from "react";
import NavBar from "../../Navigation Bar/navBar.jsx";
import HeroSec from "../../Hero Section/heroSec.jsx";
import Title from "../../Title Section/title.jsx";
import AboutSec from "../../About Section/aboutSec.jsx";
import Footer from "../../Footer Section/footer.jsx";
import "./homePage.css"

const homepage = () => {
  return (
    <div>
      <NavBar />
      <div className="Container">
        <HeroSec />
        <div id="aboutUs">
        <hr />
          <div className="cc">
            <Title id="guide"
              title={"About this website"}
              subTitle={
                "Email Guide is your go to resource for setting up and managing your email accounts with ease. Whether you're using Mozilla Thunderbird, Microsoft Outlook, or Gmail, our step-by-step tutorials cover everything from initial setup to advanced features. Designed for both beginners and professionals, our guides help you configure, troubleshoot, and optimize your email experience across platforms quickly, clearly, and confidently."
              }
            />
          </div>
          <AboutSec />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default homepage;
