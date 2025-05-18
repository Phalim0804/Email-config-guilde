import React from "react";
import ArrayList from "../../ListData/Arraylist";
import Step1 from "../../../assets/Thunderbird/Guilde/Step1.png";
import Step1_1 from "../../../assets/Thunderbird/Guilde/Step2.png";
import Step2 from "../../../assets/Thunderbird/Guilde/Step3.png";

const data = [
  {
    title: "Step 1",
    image: Step1,
    text: <li>Click the 'New message' button in the toolbar.</li>,
  },
  {
    title: "Step 2",
    image: Step1_1,
    text: <li>Type your message in Pharagraph</li>,
  },
  {
    title: "Step 3",
    image: Step2,
    text: <li>Click on send</li>,
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
