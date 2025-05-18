import React from "react";
import ArrayList from "../../ListData/Arraylist";
import Step1 from "../../../assets/Gmail/Guilde/step1.png";
import Step2 from "../../../assets/Gmail/Guilde/step2.png";
import Step3 from "../../../assets/Gmail/Guilde/step3.png";

const data = [
  {
    title: "Step 1",
    image: Step1,
    text: (
      <li>
        Sign in your google account to any browser. Then search for gmail.
      </li>
    ),
  },
  {
    title: "Step 2",
    image: Step2,
    text: <li>Click on compose.</li>,
  },
  {
    title: "Step 3",
    image: Step3,
    text: (
      <li>
        Fill the email of someone you wish to send mail to, write your mail and
        press send.
      </li>
    ),
  },
];

const guild = () => {
  return (
    <div>
      <ArrayList data={data} />
    </div>
  );
};

export default guild;
